import { getDictionary, type Locale, locales } from '@/i18n';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { Footer } from '@/components/layout/Footer/Footer';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div lang={locale}>
      <Navbar dict={dict} locale={locale as Locale} />
      <main>{children}</main>
      <Footer dict={dict} locale={locale as Locale} />
    </div>
  );
}
