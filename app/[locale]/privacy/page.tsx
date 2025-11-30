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
          <p className="text-gray-500 mb-2">{t('effectiveDate')}</p>
          <p className="text-gray-500 mb-8">{t('lastUpdated')}: December 1, 2025</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('intro.title')}</h2>
              <p className="text-gray-600 mb-4">{t('intro.content')}</p>
            </section>

            {/* Definitions */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('definitions.title')}</h2>
              <p className="text-gray-600 mb-4">{t('definitions.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('definitions.item1')}</li>
                <li>{t('definitions.item2')}</li>
                <li>{t('definitions.item3')}</li>
                <li>{t('definitions.item4')}</li>
              </ul>
            </section>

            {/* Legal Basis */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('legalBasis.title')}</h2>
              <p className="text-gray-600 mb-4">{t('legalBasis.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('legalBasis.item1')}</li>
                <li>{t('legalBasis.item2')}</li>
                <li>{t('legalBasis.item3')}</li>
                <li>{t('legalBasis.item4')}</li>
              </ul>
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
              <h3 className="text-xl font-medium text-gray-800 mb-2">{t('collect.financial.title')}</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>{t('collect.financial.item1')}</li>
                <li>{t('collect.financial.item2')}</li>
              </ul>
              <h3 className="text-xl font-medium text-gray-800 mb-2">{t('collect.usage.title')}</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>{t('collect.usage.item1')}</li>
                <li>{t('collect.usage.item2')}</li>
                <li>{t('collect.usage.item3')}</li>
              </ul>
            </section>

            {/* Purpose of Processing */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('purpose.title')}</h2>
              <p className="text-gray-600 mb-4">{t('purpose.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('purpose.item1')}</li>
                <li>{t('purpose.item2')}</li>
                <li>{t('purpose.item3')}</li>
                <li>{t('purpose.item4')}</li>
                <li>{t('purpose.item5')}</li>
                <li>{t('purpose.item6')}</li>
                <li>{t('purpose.item7')}</li>
                <li>{t('purpose.item8')}</li>
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
                <li>{t('sharing.item4')}</li>
                <li>{t('sharing.item5')}</li>
              </ul>
            </section>

            {/* Cross-Border Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('crossBorder.title')}</h2>
              <p className="text-gray-600 mb-4">{t('crossBorder.content')}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>{t('crossBorder.item1')}</li>
                <li>{t('crossBorder.item2')}</li>
                <li>{t('crossBorder.item3')}</li>
              </ul>
              <p className="text-gray-600 italic">{t('crossBorder.note')}</p>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('retention.title')}</h2>
              <p className="text-gray-600 mb-4">{t('retention.content')}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>{t('retention.item1')}</li>
                <li>{t('retention.item2')}</li>
                <li>{t('retention.item3')}</li>
                <li>{t('retention.item4')}</li>
              </ul>
              <p className="text-gray-600">{t('retention.deletion')}</p>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('security.title')}</h2>
              <p className="text-gray-600 mb-4">{t('security.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('security.item1')}</li>
                <li>{t('security.item2')}</li>
                <li>{t('security.item3')}</li>
                <li>{t('security.item4')}</li>
                <li>{t('security.item5')}</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-8 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('rights.title')}</h2>
              <p className="text-gray-600 mb-4">{t('rights.content')}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>{t('rights.item1')}</li>
                <li>{t('rights.item2')}</li>
                <li>{t('rights.item3')}</li>
                <li>{t('rights.item4')}</li>
                <li>{t('rights.item5')}</li>
                <li>{t('rights.item6')}</li>
                <li>{t('rights.item7')}</li>
                <li>{t('rights.item8')}</li>
              </ul>
              <p className="text-gray-700 font-medium">{t('rights.exercise')}</p>
            </section>

            {/* Third-Party Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('thirdParty.title')}</h2>
              <p className="text-gray-600 mb-4">{t('thirdParty.content')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('thirdParty.supabase')}</li>
                <li>{t('thirdParty.firebase')}</li>
                <li>{t('thirdParty.paymob')}</li>
                <li>{t('thirdParty.google')}</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('children.title')}</h2>
              <p className="text-gray-600">{t('children.content')}</p>
            </section>

            {/* Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('cookies.title')}</h2>
              <p className="text-gray-600">{t('cookies.content')}</p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('changes.title')}</h2>
              <p className="text-gray-600">{t('changes.content')}</p>
            </section>

            {/* Complaints */}
            <section className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('complaints.title')}</h2>
              <p className="text-gray-600 mb-4">{t('complaints.content')}</p>
              <p className="text-gray-700 font-medium">{t('complaints.sdaia')}</p>
              <a href={t('complaints.sdaiaWebsite')} target="_blank" rel="noopener noreferrer" className="text-brand-primary hover:underline">
                {t('complaints.sdaiaWebsite')}
              </a>
            </section>

            {/* Contact Us */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('contact.title')}</h2>
              <p className="text-gray-600 mb-4">{t('contact.content')}</p>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <p className="text-gray-600">
                  <strong>{t('contact.email')}:</strong> azimahtec@gmail.com<br />
                  <strong>{t('contact.phone')}:</strong> +966505371707<br />
                  <strong>{t('contact.address')}:</strong> Jeddah, Saudi Arabia<br />
                  <strong>CR:</strong> 7052259004
                </p>
              </div>
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
