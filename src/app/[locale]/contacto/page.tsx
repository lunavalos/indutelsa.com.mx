import React from 'react';
import { getDictionary, type Locale } from '@/i18n';
import { Contact } from '@/components/sections/Contact/Contact';
import styles from './ContactoPage.module.css';

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className={styles.pageWrapper}>
      {/* Header Banner with Video Background */}
      <section className={styles.pageHeader}>
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
          <div className={styles.headerContent}>
            <h1 className={styles.pageTitle}>{dict.contactPage.title}</h1>
            <p className={styles.pageSubtitle}>{dict.contactPage.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Info */}
      <Contact dict={dict} />
    </div>
  );
}
