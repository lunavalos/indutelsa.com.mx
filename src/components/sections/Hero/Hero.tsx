'use client';

import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Dictionary, Locale } from '@/i18n';
import { Button } from '@/components/ui/Button/Button';
import styles from './Hero.module.css';

interface HeroProps {
  dict: Dictionary;
  locale: Locale;
}

export const Hero: React.FC<HeroProps> = ({ dict, locale }) => {
  return (
    <section className={styles.heroSection}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.videoBackground}
      >
        <source src="/videos/Indutelsa.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay Mask */}
      <div className={styles.heroOverlay} />

      <div className="container">
        <div className={styles.heroContent}>
          {/* Main Title */}
          <h1 className={`${styles.title} animate-appear delay-100`}>
            {dict.hero.title}
          </h1>

          {/* Description */}
          <p className={`${styles.description} animate-appear delay-200`}>
            {dict.hero.subtitle}
          </p>

          {/* Action Buttons */}
          <div className={`${styles.actions} animate-appear delay-300`}>
            <Button
              href={`/${locale}#soluciones`}
              variant="primary"
              size="lg"
              className={styles.primaryBtn}
            >
              <span>{dict.hero.cta1}</span>
              <ArrowRight size={18} />
            </Button>

            <Button
              href={`/${locale}/contacto`}
              variant="outline"
              size="lg"
              className={styles.videoOutlineBtn}
            >
              <span>{dict.hero.cta2}</span>
              <ChevronRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
