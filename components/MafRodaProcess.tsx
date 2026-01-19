'use client';

import { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FaCogs, FaBalanceScale, FaEye, FaTruck, FaBoxOpen } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import './mafRoda.css';

interface MafStep {
  icon: React.ComponentType;
  media: string;
  mediaType: 'image' | 'video' | 'lottie';
}

const stepConfig: MafStep[] = [
  {
    icon: FaCogs,
    media: '/lottie/robotics.lottie',
    mediaType: 'lottie',
  },
  {
    icon: FaBalanceScale,
    media: '/lottie/calibration.lottie',
    mediaType: 'lottie',
  },
  {
    icon: FaEye,
    media: '/lottie/click.lottie',
    mediaType: 'lottie',
  },
  {
    icon: FaBoxOpen,
    media: '/lottie/packaging.lottie',
    mediaType: 'lottie',
  },
  {
    icon: FaTruck,
    media: '/lottie/truck.lottie',
    mediaType: 'lottie',
  },
];

const MafRodaProcess: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = t.export.process.steps;

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
          <span className="section-label">{t.export.title}</span>
          <h2 className="section-title">{t.export.subtitle}</h2>
          <p className="section-subtitle">
            {t.export.description}
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
            const config = stepConfig[index];
            const IconComponent = config.icon;
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
                </div>
                
                <div className="maf-step-media">
                  {config.mediaType === 'lottie' ? (
                    <DotLottieReact
                      src={config.media}
                      loop
                      autoplay
                      className="maf-lottie"
                    />
                  ) : config.mediaType === 'video' ? (
                    <video autoPlay muted loop playsInline>
                      <source src={config.media} type="video/mp4" />
                    </video>
                  ) : config.mediaType === 'image' ? (
                    <img src={config.media} alt={step.title} />
                  ) : (
                    <div className="maf-media-placeholder">
                      <IconComponent />
                      <span>{t.export.title}</span>
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
