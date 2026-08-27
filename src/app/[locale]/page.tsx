import React from 'react';
import { getDictionary, type Locale } from '@/i18n';
import { Hero } from '@/components/sections/Hero/Hero';
import { About } from '@/components/sections/About/About';
import { Solutions } from '@/components/sections/Solutions/Solutions';
import { Brands } from '@/components/sections/Brands/Brands';
import { Platform } from '@/components/sections/Platform/Platform';
import { Contact } from '@/components/sections/Contact/Contact';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      <Hero dict={dict} locale={locale as Locale} />
      <About dict={dict} />
      <Solutions dict={dict} />
      <Brands dict={dict} locale={locale as Locale} />
      <Platform dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
