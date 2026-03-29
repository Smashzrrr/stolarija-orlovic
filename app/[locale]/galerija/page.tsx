import { getDictionary, type Locale } from '@/lib/i18n';
import GalleryClient from './GalleryClient';

export default async function GalleryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return <GalleryClient locale={locale as Locale} dict={dict} />;
}
