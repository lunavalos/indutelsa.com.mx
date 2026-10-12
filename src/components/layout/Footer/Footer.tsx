import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Home, Info, Layers, Tag } from 'lucide-react';
import type { Dictionary, Locale } from '@/i18n';
import styles from './Footer.module.css';

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ dict, locale }) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Larger Brand Logo */}
          <div className={styles.brandCol}>
            <Image
              src="/images/indutelsa-logo.svg"
              alt="Indutelsa Logo"
              width={210}
              height={60}
              className={styles.logoImage}
            />
            <p className={styles.brandDesc}>
              {dict.footer.description}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className={styles.colTitle}>{dict.footer.navTitle}</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href={`/${locale}`} className={styles.linkItem}>
                  <Home size={15} />
                  <span>{dict.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#nosotros`} className={styles.linkItem}>
                  <Info size={15} />
                  <span>{dict.footer.about}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}#soluciones`} className={styles.linkItem}>
                  <Layers size={15} />
                  <span>{dict.nav.solutions}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/marcas`} className={styles.linkItem}>
                  <Tag size={15} />
                  <span>{dict.nav.brands}</span>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className={styles.linkItem}>
                  <Mail size={15} />
                  <span>{dict.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Marcas Links with Number Badges */}
          <div>
            <h4 className={styles.colTitle}>{dict.footer.brandsTitle}</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href={`/${locale}/marcas#turck`} className={styles.linkItem}>
                  <span className={styles.numBadge}>01</span>
                  <span>Turck</span>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/marcas#patlite`} className={styles.linkItem}>
                  <span className={styles.numBadge}>02</span>
                  <span>Patlite</span>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/marcas#meltric`} className={styles.linkItem}>
                  <span className={styles.numBadge}>03</span>
                  <span>Meltric</span>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/marcas#banner`} className={styles.linkItem}>
                  <span className={styles.numBadge}>04</span>
                  <span>Banner Engineering</span>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/marcas#datalogic`} className={styles.linkItem}>
                  <span className={styles.numBadge}>05</span>
                  <span>Datalogic</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h4 className={styles.colTitle}>{dict.footer.contactTitle}</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>
                  Torre Eiffel No. 352, Parque Ind. Las Torres, Saltillo, Coahuila, México
                </span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <div>
                  <a href="tel:+528444277186">+52 (844) 427-7186</a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <a href="mailto:contacto@indutelsa.com.mx">
                  contacto@indutelsa.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with Lunavalos Developer Logo */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightText}>
            <span>© {new Date().getFullYear()} Indutelsa S.A. de C.V. {dict.footer.rights}</span>
          </div>

          {/* Lunavalos Developer Logo Badge */}
          <div className={styles.developerCredit}>
            <span className={styles.creditLabel}>{dict.footer.developedBy}</span>
            <a
              href="https://lunavalos.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.creditLink}
              title="LunAvalos"
            >
              <Image
                src="/images/credits-logo.png"
                alt="Lunavalos Logo"
                width={100}
                height={30}
                className={styles.creditLogoImg}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
