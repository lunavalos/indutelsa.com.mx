'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import type { Dictionary } from '@/i18n';
import { AnimatedSection } from '@/components/ui/AnimatedSection/AnimatedSection';
import { Button } from '@/components/ui/Button/Button';
import styles from './Contact.module.css';

interface ContactProps {
  dict: Dictionary;
}

export const Contact: React.FC<ContactProps> = ({ dict }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    solution: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section className="section section-alt" id="contacto">
      <div className="container">
        <AnimatedSection className="section-header">
          <span className={styles.eyebrowTag}>{dict.contact.eyebrow}</span>
          <h2 className="section-title">{dict.contact.title}</h2>
          <p className="section-subtitle">{dict.contact.subtitle}</p>
        </AnimatedSection>

        {/* 2-Column Contact Container */}
        <div className={styles.contactGrid}>
          {/* Left Card: Direct Contact Info */}
          <AnimatedSection delay={100} className={styles.infoCard}>
            <span className={styles.cardEyebrow}>{dict.contact.directEyebrow}</span>
            <h3 className={styles.cardHeaderTitle}>{dict.contact.directTitle}</h3>
            <p className={styles.cardDesc}>
              {dict.contact.directDesc}
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoRow}>
                <div className={styles.iconCircle}>
                  <Phone size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>{dict.contact.phoneLabel}</span>
                  <strong className={styles.infoVal}>
                    <a href="tel:+528444277186">+52 (844) 427-7186</a>
                  </strong>
                </div>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.iconCircle}>
                  <Mail size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>{dict.contact.emailLabel}</span>
                  <strong className={styles.infoVal}>
                    <a href="mailto:contacto@indutelsa.com.mx">contacto@indutelsa.com.mx</a>
                  </strong>
                </div>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.iconCircle}>
                  <MapPin size={18} />
                </div>
                <div>
                  <span className={styles.infoLabel}>{dict.contact.addressLabel}</span>
                  <strong className={styles.infoVal}>
                    Torre Eiffel No. 352, Parque Ind. Las Torres, Saltillo, Coahuila, México
                  </strong>
                </div>
              </div>
            </div>

            <p className={styles.footerNote}>
              {dict.contact.companyNote}
            </p>
          </AnimatedSection>

          {/* Right Card: Form */}
          <AnimatedSection delay={200} className={styles.formCard}>
            {submitted ? (
              <div className={styles.successState}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3>{dict.contact.form.successTitle}</h3>
                <p>{dict.contact.form.successDesc}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                >
                  {dict.contact.form.successAgain}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* 2-Column Row 1 */}
                <div className={styles.formRow2}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="name" className={styles.label}>
                      {dict.contact.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder={dict.contact.form.namePlaceholder}
                      className={styles.input}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="company" className={styles.label}>
                      {dict.contact.form.companyLabel}
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder={dict.contact.form.companyPlaceholder}
                      className={styles.input}
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* 2-Column Row 2 */}
                <div className={styles.formRow2}>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="email" className={styles.label}>
                      {dict.contact.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder={dict.contact.form.emailPlaceholder}
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="phone" className={styles.label}>
                      {dict.contact.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder={dict.contact.form.phonePlaceholder}
                      className={styles.input}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Full Width Dropdown */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="solution" className={styles.label}>
                    {dict.contact.form.solutionLabel}
                  </label>
                  <select
                    id="solution"
                    className={styles.select}
                    value={formData.solution}
                    onChange={(e) =>
                      setFormData({ ...formData, solution: e.target.value })
                    }
                  >
                    <option value="">{dict.contact.form.solutionSelect}</option>
                    <option value="automatizacion">Control & Automatización (PLC)</option>
                    <option value="sensores">Sensórica & Detección Industrial</option>
                    <option value="vision">Visión Artificial e Inspección</option>
                    <option value="trazabilidad">Trazabilidad & RFID</option>
                    <option value="seguridad">Seguridad Industrial & Normativa</option>
                    <option value="isoft">Plataforma iSoft / Software a Medida</option>
                  </select>
                </div>

                {/* Full Width Textarea */}
                <div className={styles.fieldGroup}>
                  <label htmlFor="message" className={styles.label}>
                    {dict.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder={dict.contact.form.messagePlaceholder}
                    className={styles.textarea}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Full Width Action Button */}
                <Button type="submit" variant="primary" size="lg" className={styles.submitBtn}>
                  <span>{dict.contact.form.submit}</span>
                  <Send size={16} />
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
