'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Get the current path without the locale prefix
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            locale === loc
              ? 'bg-brand-primary text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-label={`Switch to ${loc === 'en' ? 'English' : 'Arabic'}`}
        >
          {loc === 'en' ? 'EN' : 'عربي'}
        </button>
      ))}
    </div>
  );
}
