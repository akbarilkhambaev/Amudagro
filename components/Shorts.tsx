'use client'

import { useEffect, useRef, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  FaPlay,
  FaPause,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCompress,
} from 'react-icons/fa'
import 'keen-slider/keen-slider.min.css'
import './Shorts.css'

interface ShortItem {
  id: number
  src: string
  poster: string
}

const shortsData: ShortItem[] = [
  { id: 1, src: '/videos/shorts_1.mp4', poster: '/videos/shorts_1-poster.jpg' },
  { id: 2, src: '/videos/shorts_2.mp4', poster: '/videos/shorts_2-poster.jpg' },
  { id: 3, src: '/videos/shorts_3.mp4', poster: '/videos/shorts_3-poster.jpg' },
]

function formatTime(seconds: number): string {
  if (!isFinite(seconds)) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

function ShortsPlayer({ item, onClose }: { item: ShortItem; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isSeeking, setIsSeeking] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) video.play()
    else video.pause()
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  const toggleFullscreen = () => {
    const container = containerRef.current
    if (!container) return
    if (!document.fullscreenElement) container.requestFullscreen?.()
    else document.exitFullscreen?.()
  }

  const seekToRatio = (ratio: number) => {
    const video = videoRef.current
    if (!video || !duration) return
    video.currentTime = Math.min(Math.max(ratio, 0), 1) * duration
  }

  const ratioFromEvent = (e: { clientX: number }) => {
    const bar = progressBarRef.current
    if (!bar) return 0
    const rect = bar.getBoundingClientRect()
    return (e.clientX - rect.left) / rect.width
  }

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handleFsChange)
    return () => document.removeEventListener('fullscreenchange', handleFsChange)
  }, [])

  useEffect(() => {
    if (!isSeeking) return
    const handleMove = (e: MouseEvent) => seekToRatio(ratioFromEvent(e))
    const handleUp = () => setIsSeeking(false)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleUp)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', handleUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSeeking, duration])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === ' ') {
        e.preventDefault()
        togglePlay()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="shorts-modal-content" ref={containerRef} onClick={(e) => e.stopPropagation()}>
      <button className="shorts-modal-close" onClick={onClose} aria-label="Close">
        <FaTimes />
      </button>

      <div className="shorts-player" onClick={togglePlay}>
        <video
          ref={videoRef}
          className="shorts-modal-video"
          src={item.src}
          poster={item.poster}
          autoPlay
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => {
            const video = e.currentTarget
            setCurrentTime(video.currentTime)
            if (video.duration) setProgress((video.currentTime / video.duration) * 100)
          }}
          onProgress={(e) => {
            const video = e.currentTarget
            if (video.buffered.length && video.duration) {
              setBuffered((video.buffered.end(video.buffered.length - 1) / video.duration) * 100)
            }
          }}
        />

        <div className={`shorts-player-center ${isPlaying ? 'is-hidden' : ''}`}>
          <span className="shorts-player-big-btn">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </span>
        </div>

        <div className="shorts-player-controls" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="shorts-player-btn" onClick={togglePlay} aria-label="Play/Pause">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <div
            className="shorts-progress"
            ref={progressBarRef}
            onMouseDown={(e) => {
              setIsSeeking(true)
              seekToRatio(ratioFromEvent(e))
            }}
          >
            <div className="shorts-progress-buffered" style={{ width: `${buffered}%` }} />
            <div className="shorts-progress-played" style={{ width: `${progress}%` }} />
            <div className="shorts-progress-handle" style={{ left: `${progress}%` }} />
          </div>

          <span className="shorts-time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <button type="button" className="shorts-player-btn" onClick={toggleMute} aria-label="Mute/Unmute">
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          <button type="button" className="shorts-player-btn" onClick={toggleFullscreen} aria-label="Fullscreen">
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Shorts() {
  const { t } = useLanguage()
  const [activeVideo, setActiveVideo] = useState<ShortItem | null>(null)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.8,
      spacing: 14,
    },
    breakpoints: {
      '(min-width: 480px)': {
        slides: { perView: 2.4, spacing: 16 },
      },
      '(min-width: 768px)': {
        slides: { perView: 3.4, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 4.4, spacing: 24 },
      },
    },
  })

  return (
    <section className="shorts section">
      <div className="container">
        <div className="shorts-header">
          <span className="section-label">{t.home.shorts.label}</span>
          <h2 className="section-title">{t.home.shorts.title}</h2>
          <p className="section-subtitle">{t.home.shorts.subtitle}</p>
        </div>

        <div className="shorts-slider">
          <button
            type="button"
            className="shorts-nav-btn prev"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          <div ref={sliderRef} className="keen-slider shorts-track">
            {shortsData.map((item) => (
              <div key={item.id} className="keen-slider__slide shorts-slide">
                <button
                  type="button"
                  className="shorts-card"
                  onClick={() => setActiveVideo(item)}
                  aria-label="Play video"
                >
                  <img
                    className="shorts-thumb"
                    src={item.poster}
                    alt=""
                    loading="lazy"
                  />
                  <span className="shorts-play">
                    <FaPlay />
                  </span>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="shorts-nav-btn next"
            onClick={() => instanceRef.current?.next()}
            aria-label="Next"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {activeVideo && (
        <div className="shorts-modal-overlay" onClick={() => setActiveVideo(null)}>
          <ShortsPlayer item={activeVideo} onClose={() => setActiveVideo(null)} />
        </div>
      )}
    </section>
  )
}
