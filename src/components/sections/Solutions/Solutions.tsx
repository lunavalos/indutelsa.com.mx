import React from 'react';
import {
  Cpu,
  Radio,
  Eye,
  Scan,
  ShieldCheck,
  Code2,
} from 'lucide-react';
import type { Dictionary } from '@/i18n';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './Solutions.module.css';

interface SolutionsProps {
  dict: Dictionary;
}

export const Solutions: React.FC<SolutionsProps> = ({ dict }) => {
  // 6 Core Featured Disciplines
  const items = [
    {
      key: 'automation',
      icon: <Cpu size={22} />,
      title: dict.solutions.items.automation.title,
      desc: dict.solutions.items.automation.desc,
    },
    {
      key: 'sensors',
      icon: <Radio size={22} />,
      title: dict.solutions.items.sensors.title,
      desc: dict.solutions.items.sensors.desc,
    },
    {
      key: 'vision',
      icon: <Eye size={22} />,
      title: dict.solutions.items.vision.title,
      desc: dict.solutions.items.vision.desc,
    },
    {
      key: 'traceability',
      icon: <Scan size={22} />,
      title: dict.solutions.items.traceability.title,
      desc: dict.solutions.items.traceability.desc,
    },
    {
      key: 'safety',
      icon: <ShieldCheck size={22} />,
      title: dict.solutions.items.safety.title,
      desc: dict.solutions.items.safety.desc,
    },
    {
      key: 'isoft',
      icon: <Code2 size={22} />,
      title: dict.solutions.items.isoft.title,
      desc: dict.solutions.items.isoft.desc,
    },
  ];

  return (
    <section className="section" id="soluciones">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">{dict.solutions.title}</h2>
          <p className="section-subtitle">{dict.solutions.subtitle}</p>
        </AnimatedSection>

        {/* 6 Core Solutions Bento Grid (Title side-by-side with Icon) */}
        <div className={styles.bentoGrid}>
          {items.map((item, index) => (
            <AnimatedSection
              key={item.key}
              delay={index * 60}
              className={styles.bentoCard}
            >
              {/* Header Row: Yellow Icon Box + Title Side by Side */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>

              <p className={styles.cardDesc}>{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
