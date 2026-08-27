import React from 'react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { getDictionary, type Locale } from '@/i18n';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { Button } from '@/components/ui/Button/Button';
import styles from './BrandsPage.module.css';

export default async function BrandsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const brandKeys = [
    'turck',
    'patlite',
    'meltric',
    'banner',
    'woerner',
    'altech',
    'delta',
    'datalogic',
  ];

  // Official Brand Website URLs (Woerner omitted per user instruction)
  const officialUrls: Record<string, string> = {
    turck: 'https://www.turck.com.mx/es/',
    patlite: 'https://www.patlite.com/',
    meltric: 'https://meltric.com.mx/',
    banner: 'https://www.bannerengineering.com/us/',
    altech: 'https://altechmexico.com/index.php?',
    delta: 'https://www.deltaww.com/en-US/index',
    datalogic: 'https://www.datalogic.com/eng/index.html',
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Page Header Banner (Clean Header, No LightRays effect per user request) */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.headerContent}>
            <h1 className={styles.pageTitle}>{dict.brandsPage.title}</h1>
            <p className={styles.pageSubtitle}>{dict.brandsPage.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Quick Jump Navigation */}
      <div className={styles.quickNav}>
        <div className="container">
          <div className={styles.quickNavTrack}>
            {brandKeys.map((key) => {
              const brand = dict.brandsPage[key as keyof typeof dict.brandsPage] as { name: string };
              return (
                <a key={key} href={`#${key}`} className={styles.quickNavItem}>
                  {brand.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Brand Sections */}
      <section className="section">
        <div className="container">
          <div className={styles.brandsList}>
            {brandKeys.map((key) => {
              const brand = dict.brandsPage[key as keyof typeof dict.brandsPage] as {
                name: string;
                fullDesc: string;
                products: string[];
              };

              const officialUrl = officialUrls[key];

              return (
                <AnimatedSection
                  key={key}
                  id={key}
                  delay={100}
                  className={styles.brandBlock}
                >
                  <div className={styles.brandGrid}>
                    <div className={styles.brandInfoCol}>
                      <h2 className={styles.brandTitle}>{brand.name}</h2>
                      <p className={styles.brandFullDesc}>{brand.fullDesc}</p>
                      
                      {/* Action Box with Dual Solid Buttons */}
                      <div className={styles.contactPrompt}>
                        <span className={styles.promptLabel}>
                          {dict.brandsPage.promptText.replace('{name}', brand.name)}
                        </span>

                        <div className={styles.brandActionButtons}>
                          <Button href={`/${locale}/contacto`} variant="primary" size="sm">
                            <span>{dict.brandsPage.quoteBtn}</span>
                            <ArrowRight size={14} />
                          </Button>

                          {officialUrl && (
                            <a
                              href={officialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={styles.officialSiteBtn}
                            >
                              <span>{dict.brandsPage.officialSiteBtn}</span>
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={styles.brandProductsCol}>
                      <h4 className={styles.productsTitle}>
                        {dict.brandsPage.linesTitle}
                      </h4>
                      <ul className={styles.productList}>
                        {brand.products.map((prod, pIdx) => (
                          <li key={pIdx} className={styles.productItem}>
                            <CheckCircle2 size={18} className={styles.checkIcon} />
                            <span>{prod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className={styles.bottomCtaSection}>
        <div className="container">
          <AnimatedSection className={styles.bottomCtaCard}>
            <h2>{dict.brandsPage.bottomCta.title}</h2>
            <p>{dict.brandsPage.bottomCta.subtitle}</p>
            <div className={styles.bottomCtaButtons}>
              <Button href={`/${locale}/contacto`} variant="primary" size="lg">
                <span>{dict.brandsPage.bottomCta.cta}</span>
                <ArrowRight size={18} />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
