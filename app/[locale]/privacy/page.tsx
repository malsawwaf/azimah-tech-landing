'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const t = useTranslations('privacy');

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Azimah Tech Logo" className="h-10 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-brand-primary">Azimah Tech</h1>
                <p className="text-xs text-brand-secondary">عزيمة - Gathering</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{t('title')}</h1>
          <p className="text-gray-500 mb-8">{t('lastUpdated')}: December 1, 2025</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('intro.title')}</h2>
              <p className="text-gray-600 mb-4">{t('intro.content')}</p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('collect.title')}</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{t('collect.personal.title')}</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>{t('collect.personal.item1')}</li>
                <li>{t('collect.personal.item2')}</li>
                <li>{t('collect.personal.item3')}</li>
                <li>{t('collect.personal.item4')}</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{t('collect.usage.title')}</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>{t('collect.usage.item1')}</li>
                <li>{t('collect.usage.item2')}</li>
                <li>{t('collect.usage.item3')}</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('use.title')}</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('use.item1')}</li>
                <li>{t('use.item2')}</li>
                <li>{t('use.item3')}</li>
                <li>{t('use.item4')}</li>
                <li>{t('use.item5')}</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('sharing.title')}</h2>
              <p className="text-gray-600 mb-4">{t('sharing.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('sharing.item1')}</li>
                <li>{t('sharing.item2')}</li>
                <li>{t('sharing.item3')}</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('security.title')}</h2>
              <p className="text-gray-600">{t('security.content')}</p>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('rights.title')}</h2>
              <p className="text-gray-600 mb-4">{t('rights.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('rights.item1')}</li>
                <li>{t('rights.item2')}</li>
                <li>{t('rights.item3')}</li>
                <li>{t('rights.item4')}</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('thirdParty.title')}</h2>
              <p className="text-gray-600 mb-4">{t('thirdParty.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Supabase - {t('thirdParty.supabase')}</li>
                <li>Firebase - {t('thirdParty.firebase')}</li>
                <li>Paymob - {t('thirdParty.paymob')}</li>
                <li>Google Maps - {t('thirdParty.google')}</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('children.title')}</h2>
              <p className="text-gray-600">{t('children.content')}</p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('changes.title')}</h2>
              <p className="text-gray-600">{t('changes.content')}</p>
            </section>

            {/* Contact Us */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('contact.title')}</h2>
              <p className="text-gray-600 mb-4">{t('contact.content')}</p>
              <p className="text-gray-600">
                <strong>{t('contact.email')}:</strong> support@azimahtech.com<br />
                <strong>{t('contact.address')}:</strong> Jeddah, Saudi Arabia
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-brand-primary hover:text-brand-secondary transition-colors">
              ← {t('backToHome')}
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Azimah Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
