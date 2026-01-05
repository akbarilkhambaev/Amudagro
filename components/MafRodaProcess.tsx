'use client';

import { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaCogs, FaBalanceScale, FaEye, FaTruck, FaBoxOpen } from 'react-icons/fa';
import './mafRoda.css';

interface MafStep {
  title: string;
  text: string;
  icon: React.ComponentType;
  stats?: string;
  media: string;
  mediaType: 'image' | 'video' | 'lottie';
}

const steps: MafStep[] = [
  {
    title: 'Современная сортировка — MAF Roda (Франция)',
    text: 'Профессиональная автоматизированная линия сортировки фруктов, обеспечивающая высокую производительность и точность.',
    icon: FaCogs,
    stats: '10 тонн/час',
    media: '/lottie/robotics.lottie', // путь к .lottie файлу
    mediaType: 'lottie',
  },
  {
    title: 'Калибровка по размеру и весу',
    text: 'Точная автоматическая сортировка без человеческого фактора. Каждый плод проходит индивидуальную оценку.',
    icon: FaBalanceScale,
    stats: '±2г точность',
    media: '/lottie/calibration.lottie', // путь к .lottie файлу
    mediaType: 'lottie',
  },
  {
    title: 'Отбор по цвету и качеству',
    text: 'Оптические сенсоры анализируют цвет, форму и внешние дефекты, обеспечивая стабильное премиум-качество.',
    icon: FaEye,
    stats: '99% точность',
    media: '/lottie/click.lottie', // путь к .lottie файлу
    mediaType: 'lottie',
  },
  {
    title: 'Стабильность поставок',
    text: 'Единый стандарт качества для международных клиентов. Надёжные партнёрства с импортёрами по всему миру.',
    icon: FaTruck,
    stats: '20+ стран',
    media: '/lottie/truck.lottie', // путь к .lottie файлу
    mediaType: 'lottie',
  },
  {
    title: 'Упаковка и охлаждение',
    text: 'Предохлаждение, контролируемое хранение и упаковка по международным стандартам для сохранения свежести.',
    icon: FaBoxOpen,
    stats: '2-4°C хранение',
    media: '/lottie/packaging.lottie', // путь к .lottie файлу
    mediaType: 'lottie',
  },
];

const MafRodaProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = Number(
              (entry.target as HTMLElement).dataset.step
            );
            setActiveStep(step);
          }
        });
      },
      { threshold: 0.6 }
    );

    const elements =
      containerRef.current.querySelectorAll<HTMLElement>('.maf-step');

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="maf-section">
      <div className="container">
        <div className="maf-header">
          <span className="section-label">Экспорт</span>
          <h2 className="section-title">Фрукты мирового уровня</h2>
          <p className="section-subtitle">
            AMUDAGRO ориентирован на экспорт в Европу, Ближний Восток и страны СНГ.
            Мы инвестируем в технологии, которые позволяют соответствовать международным 
            требованиям к качеству, калибровке и упаковке фруктов.
          </p>
        </div>
        <div className="maf-timeline" ref={containerRef}>
          <div className="maf-line">
            <div
              className="maf-progress"
              style={{
                height: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`maf-step ${activeStep >= index ? 'active' : ''} ${isEven ? 'maf-step-left' : 'maf-step-right'}`}
                data-step={index}
              >
                <div className="maf-dot">
                  <span className="maf-dot-number">0{index + 1}</span>
                </div>
                
                <div className="maf-step-info">
                  <div className="maf-step-icon">
                    <IconComponent />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {step.stats && (
                    <div className="maf-step-stats">
                      <span>{step.stats}</span>
                    </div>
                  )}
                </div>
                
                <div className="maf-step-media">
                  {step.mediaType === 'lottie' ? (
                    <DotLottieReact
                      src={step.media}
                      loop
                      autoplay
                      className="maf-lottie"
                    />
                  ) : step.mediaType === 'video' ? (
                    <video autoPlay muted loop playsInline>
                      <source src={step.media} type="video/mp4" />
                    </video>
                  ) : step.mediaType === 'image' ? (
                    <img src={step.media} alt={step.title} />
                  ) : (
                    <div className="maf-media-placeholder">
                      <IconComponent />
                      <span>Фото/Видео</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MafRodaProcess;
