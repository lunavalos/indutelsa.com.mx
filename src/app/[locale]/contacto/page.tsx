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
      {/* Header Banner (Clean Header, No LightRays effect per user request) */}
      <section className={styles.pageHeader}>
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
