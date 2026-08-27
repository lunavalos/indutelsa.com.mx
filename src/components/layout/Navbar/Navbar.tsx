'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';
import type { Dictionary, Locale } from '@/i18n';
import styles from './Navbar.module.css';

interface NavbarProps {
  dict: Dictionary;
  locale: Locale;
}

export const Navbar: React.FC<NavbarProps> = ({ dict, locale }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Replace current locale in path
  const getLocalePath = (targetLocale: Locale) => {
    if (!pathname) return `/${targetLocale}`;
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/');
  };

  const navLinks = [
    {
      href: `/${locale}`,
      label: dict.nav.home,
      exact: true,
    },
    {
      href: `/${locale}#soluciones`,
      label: dict.nav.solutions,
    },
    {
      href: `/${locale}/marcas`,
      label: dict.nav.brands,
    },
    {
      href: `/${locale}#isoft`,
      label: dict.nav.isoft,
    },
    {
      href: `/${locale}/contacto`,
      label: dict.nav.contact,
    },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <Link href={`/${locale}`} className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/indutelsa-logo.svg"
              alt="Indutelsa Logo"
              width={125}
              height={36}
              priority
              className={styles.logoImage}
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => {
            const isActive = link.exact
              ? pathname === link.href
              : pathname?.startsWith(link.href.replace(/#.*/, '')) && link.href.includes('#')
              ? false
              : pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    isActive ? styles.activeNavLink : ''
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          {/* Language Switcher Capsule Toggle */}
          <div className={styles.langCapsule}>
            <Globe className={styles.globeIcon} />
            <Link
              href={getLocalePath('es')}
              className={`${styles.langPillOption} ${
                locale === 'es' ? styles.activeLangPill : ''
              }`}
            >
              ES
            </Link>
            <Link
              href={getLocalePath('en')}
              className={`${styles.langPillOption} ${
                locale === 'en' ? styles.activeLangPill : ''
              }`}
            >
              EN
            </Link>
          </div>

          {/* Contact CTA */}
          <Link href={`/${locale}/contacto`} className={styles.ctaButton}>
            <span>{dict.nav.cta}</span>
            <ArrowRight className={styles.ctaIcon} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <div className={styles.mobileLangCapsule}>
              <Globe size={18} />
              <Link
                href={getLocalePath('es')}
                className={`${styles.mobileLangBtn} ${
                  locale === 'es' ? styles.activeMobileLang : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Español (ES)
              </Link>
              <Link
                href={getLocalePath('en')}
                className={`${styles.mobileLangBtn} ${
                  locale === 'en' ? styles.activeMobileLang : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                English (EN)
              </Link>
            </div>

            <Link
              href={`/${locale}/contacto`}
              className={styles.mobileCtaButton}
              onClick={() => setMobileMenuOpen(false)}
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
