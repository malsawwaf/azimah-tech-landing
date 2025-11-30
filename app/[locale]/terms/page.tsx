'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function TermsOfService() {
  const t = useTranslations('terms');

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
            {/* Agreement */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('agreement.title')}</h2>
              <p className="text-gray-600">{t('agreement.content')}</p>
            </section>

            {/* Eligibility */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('eligibility.title')}</h2>
              <p className="text-gray-600">{t('eligibility.content')}</p>
            </section>

            {/* User Accounts */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('accounts.title')}</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('accounts.item1')}</li>
                <li>{t('accounts.item2')}</li>
                <li>{t('accounts.item3')}</li>
                <li>{t('accounts.item4')}</li>
              </ul>
            </section>

            {/* Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('services.title')}</h2>
              <p className="text-gray-600 mb-4">{t('services.content')}</p>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{t('services.customers.title')}</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>{t('services.customers.item1')}</li>
                <li>{t('services.customers.item2')}</li>
                <li>{t('services.customers.item3')}</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{t('services.providers.title')}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('services.providers.item1')}</li>
                <li>{t('services.providers.item2')}</li>
                <li>{t('services.providers.item3')}</li>
              </ul>
            </section>

            {/* Payments */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('payments.title')}</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('payments.item1')}</li>
                <li>{t('payments.item2')}</li>
                <li>{t('payments.item3')}</li>
                <li>{t('payments.item4')}</li>
              </ul>
            </section>

            {/* Cancellations & Refunds */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('cancellations.title')}</h2>
              <p className="text-gray-600 mb-4">{t('cancellations.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('cancellations.item1')}</li>
                <li>{t('cancellations.item2')}</li>
                <li>{t('cancellations.item3')}</li>
              </ul>
            </section>

            {/* Prohibited Activities */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('prohibited.title')}</h2>
              <p className="text-gray-600 mb-4">{t('prohibited.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('prohibited.item1')}</li>
                <li>{t('prohibited.item2')}</li>
                <li>{t('prohibited.item3')}</li>
                <li>{t('prohibited.item4')}</li>
                <li>{t('prohibited.item5')}</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('intellectual.title')}</h2>
              <p className="text-gray-600">{t('intellectual.content')}</p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('liability.title')}</h2>
              <p className="text-gray-600">{t('liability.content')}</p>
            </section>

            {/* Indemnification */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('indemnification.title')}</h2>
              <p className="text-gray-600">{t('indemnification.content')}</p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('governing.title')}</h2>
              <p className="text-gray-600">{t('governing.content')}</p>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('termination.title')}</h2>
              <p className="text-gray-600">{t('termination.content')}</p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('changes.title')}</h2>
              <p className="text-gray-600">{t('changes.content')}</p>
            </section>

            {/* Contact */}
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
