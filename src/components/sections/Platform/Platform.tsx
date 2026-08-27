import React from 'react';
import { Database, Network, Activity, BarChart3, ShieldCheck } from 'lucide-react';
import type { Dictionary } from '@/i18n';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './Platform.module.css';

interface PlatformProps {
  dict: Dictionary;
}

export const Platform: React.FC<PlatformProps> = ({ dict }) => {
  const features = [
    {
      num: '01',
      title: dict.platform.features.databases.title,
      desc: dict.platform.features.databases.desc,
    },
    {
      num: '02',
      title: dict.platform.features.maps.title,
      desc: dict.platform.features.maps.desc,
    },
    {
      num: '03',
      title: dict.platform.features.monitoring.title,
      desc: dict.platform.features.monitoring.desc,
    },
    {
      num: '04',
      title: dict.platform.features.reports.title,
      desc: dict.platform.features.reports.desc,
    },
  ];

  const capabilities = [
    {
      icon: <Network size={22} />,
      name: 'Conectividad Multi-Protocolo',
      detail: 'Integración PLC Siemens, Rockwell, Omron & Modbus OPC-UA.',
    },
    {
      icon: <BarChart3 size={22} />,
      name: 'Métricas de OEE en Tiempo Real',
      detail: 'Monitoreo dinámico de disponibilidad, velocidad y calidad.',
    },
    {
      icon: <Activity size={22} />,
      name: 'Mantenimiento Predictivo',
      detail: 'Detección temprana de anomalías de temperatura y vibración.',
    },
    {
      icon: <Database size={22} />,
      name: 'Almacenamiento SQL Seguro',
      detail: 'Históricos centralizados con integración SCADA y ERP.',
    },
  ];

  return (
    <section className="section" id="isoft">
      <div className="container">
        <AnimatedSection className="section-header">
          <h2 className="section-title">{dict.platform.title}</h2>
          <p className="section-subtitle">{dict.platform.subtitle}</p>
        </AnimatedSection>

        <div className={styles.contentGrid}>
          {/* Left Column: Numbered Features */}
          <div className={styles.featuresCol}>
            {features.map((feat, index) => (
              <AnimatedSection
                key={feat.num}
                delay={index * 80}
                className={styles.featureItem}
              >
                <div className={styles.featureNum}>{feat.num}</div>
                <div className={styles.featureBody}>
                  <h3 className={styles.featureTitle}>{feat.title}</h3>
                  <p className={styles.featureDesc}>{feat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right Column: Clean Showcase Module */}
          <AnimatedSection delay={200} className={styles.rightShowcaseCol}>
            <div className={styles.showcaseHeader}>
              <h3 className={styles.showcaseTitle}>Capacidades de la Plataforma</h3>
            </div>

            <div className={styles.showcaseGrid}>
              {capabilities.map((item, idx) => (
                <div key={idx} className={styles.capabilityCard}>
                  <div className={styles.capabilityIcon}>{item.icon}</div>
                  <h4 className={styles.capabilityName}>{item.name}</h4>
                  <p className={styles.capabilityDetail}>{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Solid Intense Yellow Note Box */}
            <div className={styles.integrationNote}>
              <ShieldCheck size={18} />
              <span>Desarrollado 100% a la medida para los procesos de su planta</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
