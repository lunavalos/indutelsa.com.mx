'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './BrandsQuickNav.module.css';

interface BrandItem {
  key: string;
  name: string;
}

interface BrandsQuickNavProps {
  brands: BrandItem[];
}

export const BrandsQuickNav: React.FC<BrandsQuickNavProps> = ({ brands }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeKey, setActiveKey] = useState<string>('');

  const checkScrollability = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  }, []);

  useEffect(() => {
    checkScrollability();
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', checkScrollability);

    return () => {
      track.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [checkScrollability]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = direction === 'left' ? -220 : 220;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleItemClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className={styles.stickyWrapper}>
      <div className="container">
        <div className={styles.carouselContainer}>
          {/* Left Navigation Chevron */}
          <button
            type="button"
            className={`${styles.navChevron} ${styles.leftChevron} ${
              canScrollLeft ? styles.chevronVisible : ''
            }`}
            onClick={() => handleScroll('left')}
            aria-label="Scroll anterior"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Scrolling Track */}
          <div ref={trackRef} className={styles.quickNavTrack}>
            {brands.map((brand) => (
              <a
                key={brand.key}
                href={`#${brand.key}`}
                className={`${styles.quickNavItem} ${
                  activeKey === brand.key ? styles.activeItem : ''
                }`}
                onClick={() => handleItemClick(brand.key)}
              >
                {brand.name}
              </a>
            ))}
          </div>

          {/* Right Navigation Chevron */}
          <button
            type="button"
            className={`${styles.navChevron} ${styles.rightChevron} ${
              canScrollRight ? styles.chevronVisible : ''
            }`}
            onClick={() => handleScroll('right')}
            aria-label="Scroll siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
