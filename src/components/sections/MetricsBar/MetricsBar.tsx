import React from 'react';
import type { Dictionary, Locale } from '@/i18n';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './MetricsBar.module.css';

interface MetricsBarProps {
  dict: Dictionary;
  locale: Locale;
}

export const MetricsBar: React.FC<MetricsBarProps> = ({ locale }) => {
  const metrics = [
    {
      value: '12+',
      label: locale === 'es' ? 'Disciplinas Industriales' : 'Industrial Disciplines',
    },
    {
      value: '7',
      label: locale === 'es' ? 'Marcas Globales Integradas' : 'Integrated Global Brands',
    },
    {
      value: '100%',
      label: locale === 'es' ? 'Soluciones a Medida' : 'Custom Solutions',
    },
    {
      value: '24/7',
      label: locale === 'es' ? 'Soporte e Ingeniería' : 'Support & Engineering',
    },
  ];

  return (
    <section className={styles.metricsSection}>
      <div className="container">
        <AnimatedSection className={styles.metricsGrid}>
          {metrics.map((item, index) => (
            <div key={index} className={styles.metricCard}>
              <span className={styles.metricValue}>{item.value}</span>
              <span className={styles.metricLabel}>{item.label}</span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
