'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import {
  alerts,
  categoryMix,
  digitalMix,
  financialTrend,
  primaryKpis,
  supportingKpis,
} from '@/data/dashboard-data';

type Locale = 'id' | 'en';

type Dictionary = {
  brandEyebrow: string;
  brandSubtitle: string;
  strategyButton: string;
  strategyBanner: string;
  strategyTag: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  primaryRowTitle: string;
  supportingRowTitle: string;
  financialTitle: string;
  financialNote: string;
  digitalTitle: string;
  digitalNote: string;
  categoryTitle: string;
  categoryNote: string;
  alertsTitle: string;
  alertsNote: string;
  legendRevenue: string;
  legendProfit: string;
  labels: {
    profit: string;
    digital: string;
    category: string;
    revenue: string;
    margin: string;
    cashflow: string;
  };
  notes: {
    profit: string;
    digital: string;
    category: string;
    revenue: string;
    margin: string;
    cashflow: string;
  };
  financialSummary: Array<{ label: string; value: string }>;
  digitalSummary: Array<{ label: string; value: string }>;
  categorySummary: Array<{ label: string; value: string }>;
  alertText: Record<'promo' | 'surabaya' | 'digital', { title: string; body: string }>;
  status: Record<'On Track' | 'Watchlist' | 'Critical' | 'High' | 'Medium' | 'Low', string>;
};

const dictionary: Record<Locale, Dictionary> = {
  en: {
    brandEyebrow: 'Corporate Performance Management',
    brandSubtitle: 'Executive dashboard prototype for strategic KPI control',
    strategyButton: '2026 Strategy Focus',
    strategyBanner: 'Strategic focus: grow profit, strengthen digital channels, and scale non-coffee categories responsibly.',
    strategyTag: 'Final KPI-aligned view',
    heroEyebrow: 'Fore Coffee · Executive Overview',
    heroTitle: 'Three strategic KPIs, three supporting KPIs, one clear dashboard.',
    heroBody:
      'This CPM dashboard focuses on profit growth, digital transaction penetration, and new category contribution, supported by revenue, margin, and cash flow discipline.',
    primaryRowTitle: 'Primary KPIs',
    supportingRowTitle: 'Supporting KPIs',
    financialTitle: 'Financial Performance',
    financialNote: 'Profit, revenue, margin, and cash flow alignment',
    digitalTitle: 'Digital Performance',
    digitalNote: 'Digital transaction penetration and channel mix',
    categoryTitle: 'Category Expansion',
    categoryNote: 'Non-coffee contribution and growth diversification',
    alertsTitle: 'Alerts & Recommendations',
    alertsNote: 'Most important follow-up actions',
    legendRevenue: 'Revenue',
    legendProfit: 'Net Profit',
    labels: {
      profit: 'Net Profit Growth',
      digital: 'Digital Sales Penetration Rate',
      category: 'New Category Revenue Contribution',
      revenue: 'Revenue Growth',
      margin: 'Profitability Margin',
      cashflow: 'Cash Flow Health',
    },
    notes: {
      profit: 'Tracks whether expansion and efficiency translate into stronger bottom-line growth.',
      digital: 'Measures the dominance of app and digital channels in total transactions.',
      category: 'Measures the success of non-coffee and food diversification as a new growth engine.',
      revenue: 'Shows whether outlet expansion and category growth still drive top-line performance.',
      margin: 'Protects the quality of growth so rising sales still create healthy profitability.',
      cashflow: 'Ensures expansion and diversification remain supported by operating liquidity.',
    },
    financialSummary: [
      { label: 'Revenue corridor', value: '45%–55% YoY' },
      { label: 'Gross margin', value: '61.8%' },
      { label: 'Quarterly cash flow', value: 'Rp46.5B' },
    ],
    digitalSummary: [
      { label: 'Digital transactions', value: '61.7%' },
      { label: 'Fore App share', value: '38%' },
      { label: 'Offline dependency', value: '38%' },
    ],
    categorySummary: [
      { label: 'Non-coffee total', value: '22.3%' },
      { label: 'Food & donut', value: '17.1%' },
      { label: 'Coffee core', value: '77.7%' },
    ],
    alertText: {
      promo: {
        title: 'Protect margin during aggressive promo cycles',
        body: 'Reduce discount depth on new-store clusters and prioritize bundles with stronger unit economics.',
      },
      surabaya: {
        title: 'Raise productivity in Surabaya before next rollout wave',
        body: 'Tighten local campaign design and improve menu mix before expanding further in similar clusters.',
      },
      digital: {
        title: 'Sustain digital adoption after the 60% threshold',
        body: 'Maintain app-led incentives so digital penetration stays above target as outlet count increases.',
      },
    },
    status: {
      'On Track': 'On Track',
      Watchlist: 'Watchlist',
      Critical: 'Critical',
      High: 'High',
      Medium: 'Medium',
      Low: 'Low',
    },
  },
  id: {
    brandEyebrow: 'Corporate Performance Management',
    brandSubtitle: 'Prototype dashboard eksekutif untuk kontrol KPI strategis',
    strategyButton: 'Fokus Strategi 2026',
    strategyBanner: 'Fokus strategis: menumbuhkan laba, memperkuat kanal digital, dan memperbesar kategori non-kopi secara terukur.',
    strategyTag: 'Tampilan final sesuai KPI',
    heroEyebrow: 'Fore Coffee · Executive Overview',
    heroTitle: 'Tiga KPI utama, tiga KPI pendukung, satu dashboard yang jelas.',
    heroBody:
      'Dashboard CPM ini berfokus pada pertumbuhan laba, penetrasi transaksi digital, dan kontribusi kategori baru, yang didukung oleh disiplin revenue, margin, dan cash flow.',
    primaryRowTitle: 'KPI Utama',
    supportingRowTitle: 'KPI Pendukung',
    financialTitle: 'Financial Performance',
    financialNote: 'Hubungan profit, revenue, margin, dan cash flow',
    digitalTitle: 'Digital Performance',
    digitalNote: 'Penetrasi transaksi digital dan komposisi kanal',
    categoryTitle: 'Category Expansion',
    categoryNote: 'Kontribusi non-kopi dan diversifikasi pertumbuhan',
    alertsTitle: 'Alerts & Recommendations',
    alertsNote: 'Tindak lanjut paling penting',
    legendRevenue: 'Revenue',
    legendProfit: 'Net Profit',
    labels: {
      profit: 'Net Profit Growth',
      digital: 'Digital Sales Penetration Rate',
      category: 'New Category Revenue Contribution',
      revenue: 'Revenue Growth',
      margin: 'Profitability Margin',
      cashflow: 'Cash Flow Health',
    },
    notes: {
      profit: 'Mengukur apakah ekspansi dan efisiensi benar-benar menghasilkan pertumbuhan laba bersih.',
      digital: 'Mengukur dominasi aplikasi dan kanal digital dalam total transaksi.',
      category: 'Mengukur keberhasilan diversifikasi non-kopi dan makanan sebagai mesin pertumbuhan baru.',
      revenue: 'Menunjukkan apakah ekspansi outlet dan kategori baru tetap mendorong pertumbuhan pendapatan.',
      margin: 'Menjaga kualitas pertumbuhan agar kenaikan penjualan tetap menghasilkan profitabilitas sehat.',
      cashflow: 'Memastikan ekspansi dan diversifikasi tetap ditopang oleh likuiditas operasional.',
    },
    financialSummary: [
      { label: 'Koridor revenue', value: '45%–55% YoY' },
      { label: 'Gross margin', value: '61.8%' },
      { label: 'Cash flow kuartalan', value: 'Rp46.5B' },
    ],
    digitalSummary: [
      { label: 'Transaksi digital', value: '61.7%' },
      { label: 'Porsi Fore App', value: '38%' },
      { label: 'Ketergantungan offline', value: '38%' },
    ],
    categorySummary: [
      { label: 'Total non-kopi', value: '22.3%' },
      { label: 'Food & donut', value: '17.1%' },
      { label: 'Core coffee', value: '77.7%' },
    ],
    alertText: {
      promo: {
        title: 'Jaga margin saat siklus promo agresif',
        body: 'Kurangi kedalaman diskon pada cluster outlet baru dan prioritaskan bundling dengan unit economics yang lebih kuat.',
      },
      surabaya: {
        title: 'Naikkan produktivitas Surabaya sebelum gelombang ekspansi berikutnya',
        body: 'Perbaiki desain campaign lokal dan komposisi menu sebelum memperbesar ekspansi di cluster serupa.',
      },
      digital: {
        title: 'Jaga adopsi digital setelah melewati ambang 60%',
        body: 'Pertahankan insentif berbasis aplikasi agar penetrasi digital tetap di atas target saat jumlah outlet bertambah.',
      },
    },
    status: {
      'On Track': 'On Track',
      Watchlist: 'Watchlist',
      Critical: 'Critical',
      High: 'High',
      Medium: 'Medium',
      Low: 'Low',
    },
  },
};

function StatusPill({ label, tone }: { label: string; tone: string }) {
  return <span className={`status ${tone}`}>{label}</span>;
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>('id');
  const t = dictionary[locale];
  const maxRevenue = useMemo(() => Math.max(...financialTrend.map((point) => point.revenue)), []);
  const maxProfit = useMemo(() => Math.max(...financialTrend.map((point) => point.profit)), []);

  return (
    <main className="page-shell executive-shell">
      <section className="brand-bar">
        <div className="brand-lockup">
          <Image src="/fore-logo.png" alt="Fore Coffee" width={140} height={48} priority className="brand-logo" />
          <div>
            <span className="eyebrow">{t.brandEyebrow}</span>
            <p className="brand-subtitle">{t.brandSubtitle}</p>
          </div>
        </div>
        <div className="brand-actions">
          <div className="locale-toggle" role="tablist" aria-label="Language switcher">
            <button type="button" className={locale === 'id' ? 'locale-option active' : 'locale-option'} onClick={() => setLocale('id')}>
              ID
            </button>
            <button type="button" className={locale === 'en' ? 'locale-option active' : 'locale-option'} onClick={() => setLocale('en')}>
              EN
            </button>
          </div>
          <span className="download-chip">{t.strategyButton}</span>
        </div>
      </section>

      <section className="announcement-strip">
        <p>{t.strategyBanner}</p>
        <span>{t.strategyTag}</span>
      </section>

      <section className="hero-strip card clean-hero">
        <div className="hero-strip-copy">
          <span className="eyebrow">{t.heroEyebrow}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
        </div>
      </section>

      <section className="metric-section">
        <div className="row-head">
          <span className="eyebrow">{t.primaryRowTitle}</span>
        </div>
        <div className="primary-kpi-grid">
          {primaryKpis.map((item) => (
            <article key={item.id} className="card feature-kpi-card">
              <div className="card-topline">
                <h3>{t.labels[item.id]}</h3>
                <StatusPill label={t.status[item.status]} tone={item.status.toLowerCase().replace(' ', '')} />
              </div>
              <p className="feature-value">{item.value}</p>
              <div className="kpi-meta-row">
                <p className="kpi-target">{item.target}</p>
                <p className="kpi-change">{item.change}</p>
              </div>
              <p className="kpi-note">{t.notes[item.id]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="metric-section supporting-section">
        <div className="row-head">
          <span className="eyebrow">{t.supportingRowTitle}</span>
        </div>
        <div className="supporting-kpi-grid">
          {supportingKpis.map((item) => (
            <article key={item.id} className="card support-kpi-card">
              <div className="card-topline">
                <h3>{t.labels[item.id]}</h3>
                <StatusPill label={t.status[item.status]} tone={item.status.toLowerCase().replace(' ', '')} />
              </div>
              <p className="support-value">{item.value}</p>
              <div className="kpi-meta-row">
                <p className="kpi-target">{item.target}</p>
                <p className="kpi-change">{item.change}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="executive-grid">
        <article className="card executive-panel financial-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.financialTitle}</span>
              <h2>{t.financialNote}</h2>
            </div>
          </div>
          <div className="financial-chart">
            {financialTrend.map((point) => (
              <div key={point.month} className="financial-column">
                <div className="financial-bars">
                  <div className="mini-bar revenue" style={{ height: `${(point.revenue / maxRevenue) * 92}px` }} />
                  <div className="mini-bar profit" style={{ height: `${(point.profit / maxProfit) * 50}px` }} />
                </div>
                <strong>{point.month}</strong>
              </div>
            ))}
          </div>
          <div className="mini-legend">
            <span><i className="legend revenue" /> {t.legendRevenue}</span>
            <span><i className="legend profit" /> {t.legendProfit}</span>
          </div>
          <div className="summary-strip">
            {t.financialSummary.map((item) => (
              <div key={item.label} className="summary-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="card executive-panel digital-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.digitalTitle}</span>
              <h2>{t.digitalNote}</h2>
            </div>
          </div>
          <div className="stack-list">
            {digitalMix.map((item) => (
              <div key={item.channel} className="clean-list-item">
                <div>
                  <strong>{item.channel}</strong>
                </div>
                <span>{item.share}</span>
              </div>
            ))}
          </div>
          <div className="summary-strip vertical-summary">
            {t.digitalSummary.map((item) => (
              <div key={item.label} className="summary-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="card executive-panel category-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.categoryTitle}</span>
              <h2>{t.categoryNote}</h2>
            </div>
          </div>
          <div className="stack-list">
            {categoryMix.map((item) => (
              <div key={item.segment} className="clean-list-item">
                <div>
                  <strong>{item.segment}</strong>
                </div>
                <span>{item.contribution}</span>
              </div>
            ))}
          </div>
          <div className="summary-strip vertical-summary">
            {t.categorySummary.map((item) => (
              <div key={item.label} className="summary-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="card executive-panel alerts-panel-clean">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.alertsTitle}</span>
              <h2>{t.alertsNote}</h2>
            </div>
          </div>
          <div className="alert-stack-clean">
            {alerts.map((alert) => (
              <div key={alert.id} className="alert-clean-item">
                <div className="alert-clean-head">
                  <strong>{t.alertText[alert.id].title}</strong>
                  <StatusPill label={t.status[alert.level]} tone={alert.level.toLowerCase()} />
                </div>
                <p>{t.alertText[alert.id].body}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
