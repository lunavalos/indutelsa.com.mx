import React from 'react';
import { Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import type { Dictionary } from '@/i18n';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './About.module.css';

interface AboutProps {
  dict: Dictionary;
}

export const About: React.FC<AboutProps> = ({ dict }) => {
  return (
    <section className="section section-alt" id="nosotros">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">{dict.about.title1}</h2>
          <p className="section-subtitle">{dict.about.desc1}</p>
        </AnimatedSection>

        <div className={styles.grid}>
          {/* Main Statement Card */}
          <AnimatedSection delay={100} className={styles.mainCard}>
            <div className={styles.badgeChip}>
              <Cpu size={14} />
              <span>{dict.about.badge1}</span>
            </div>
            <h3 className={styles.cardTitle}>{dict.about.title1}</h3>
            <p className={styles.highlightText}>{dict.about.desc1}</p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>{dict.about.feature1}</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>{dict.about.feature2}</span>
              </div>
              <div className={styles.featureItem}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <span>{dict.about.feature3}</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Priority Card */}
          <AnimatedSection delay={200} className={styles.priorityCard}>
            <div className={styles.badgeChip}>
              <ShieldCheck size={14} />
              <span>{dict.about.badge2}</span>
            </div>
            <h3 className={styles.cardTitle}>{dict.about.title2}</h3>
            <p className={styles.priorityText}>{dict.about.desc2}</p>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{dict.about.stat1Value}</span>
                <span className={styles.statLabel}>{dict.about.stat1Label}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{dict.about.stat2Value}</span>
                <span className={styles.statLabel}>{dict.about.stat2Label}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
