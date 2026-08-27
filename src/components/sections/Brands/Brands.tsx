import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Dictionary, Locale } from '@/i18n';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { Button } from '@/components/ui/Button/Button';
import styles from './Brands.module.css';

interface BrandsProps {
  dict: Dictionary;
  locale: Locale;
}

export const Brands: React.FC<BrandsProps> = ({ dict, locale }) => {
  // 3 Large Feature Cards with centered full-size brand logos & left-aligned text
  const cards = [
    {
      badge: '01',
      key: 'turck',
      title: 'Turck',
      desc:
        locale === 'es'
          ? 'Sensores inductivos, optoelectrónicos, sistemas de conectividad industrial IP67/IP69K y tecnología RFID para ambientes exigentes.'
          : 'Inductive and photoelectric sensors, IP67/IP69K industrial connectivity systems, and RFID technology for demanding environments.',
      logo: '/images/brands/turck-inc-logo-vector.png',
    },
    {
      badge: '02',
      key: 'patlite',
      title: 'Patlite',
      desc:
        locale === 'es'
          ? 'Torres de señalización LED, avisadores acústicos y sistemas de comunicación visual e inalámbrica para control de estado de línea.'
          : 'LED signal towers, acoustic sounders, and visual and wireless communication systems for line status monitoring.',
      logo: '/images/brands/patlite-logo-png_seeklogo-526800.png',
    },
    {
      badge: '03',
      key: 'banner',
      title: 'Banner Engineering',
      desc:
        locale === 'es'
          ? 'Sensores fotoeléctricos, ultrasónicos, sistemas de iluminación industrial LED, redes inalámbricas y sensores de visión para control de calidad.'
          : 'Photoelectric and ultrasonic sensors, industrial LED lighting, wireless networks, and machine vision sensors for quality inspection.',
      logo: '/images/brands/partner_banner.png',
    },
  ];

  return (
    <section className="section section-alt" id="marcas">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">{dict.brands.title}</h2>
          <p className="section-subtitle">{dict.brands.subtitle}</p>
        </AnimatedSection>

        {/* 3 Large Cards Grid (Centered image, left-aligned text, smaller title) */}
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <AnimatedSection
              key={card.key}
              delay={index * 100}
              className={styles.featureCard}
            >
              {/* 1. TOP: Centered Large Logo Area */}
              <div className={styles.logoVisualArea}>
                <Image
                  src={card.logo}
                  alt={`${card.title} logo`}
                  width={320}
                  height={130}
                  className={styles.brandLogoImg}
                />
              </div>

              {/* 2. MIDDLE ROW: Number Badge + Title (Left Aligned, Slightly Smaller Title) */}
              <div className={styles.titleRow}>
                <span className={styles.numBadge}>{card.badge}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>

              {/* 3. BOTTOM: Description text (Left Aligned) */}
              <p className={styles.cardDesc}>{card.desc}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA to Full Brands Catalog */}
        <AnimatedSection delay={350} className={styles.ctaWrapper}>
          <Button href={`/${locale}/marcas`} variant="primary" size="lg">
            <span>{dict.brands.viewAll}</span>
            <ArrowRight size={18} />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
