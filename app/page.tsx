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

type Copy = {
  eyebrow: string;
  subtitle: string;
  strategyButton: string;
  strategyBanner: string;
  strategyTag: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  focusTitle: string;
  focusItems: Array<{ value: string; label: string }>;
  kpiLabel: string;
  supportLabel: string;
  trendEyebrow: string;
  trendTitle: string;
  trendNote: string;
  trendSummaryTitle: string;
  trendSummaryItems: Array<{ value: string; label: string }>;
  trendInsightTitle: string;
  trendInsightBody: string;
  trendExtraTitle: string;
  trendExtraItems: Array<{ label: string; value: string }>;
  driverEyebrow: string;
  driverTitle: string;
  driverNote: string;
  outletEyebrow: string;
  outletTitle: string;
  outletNote: string;
  outletInsightTitle: string;
  outletInsightBody: string;
  scenarioEyebrow: string;
  scenarioTitle: string;
  scenarioNote: string;
  scenarioItems: Array<{ name: string; result: string; note: string }>;
  scenarioExtraTitle: string;
  scenarioExtraBody: string;
  alertEyebrow: string;
  alertTitle: string;
  alertNote: string;
  revenueLegend: string;
  profitLegend: string;
  impact: string;
  action: string;
  labels: Record<'profit'|'digital'|'category'|'revenue'|'margin'|'cashflow', string>;
  notes: Record<'profit'|'digital'|'category'|'revenue'|'margin'|'cashflow', string>;
  digitalItems: Array<{ label: string; share: string }>;
  categoryItems: Array<{ label: string; share: string }>;
  alertText: Record<'promo' | 'surabaya' | 'digital', { title: string; action: string }>;
  status: Record<'On Track' | 'Watchlist' | 'Critical' | 'High' | 'Medium' | 'Low', string>;
};

const copy: Record<Locale, Copy> = {
  en: {
    eyebrow: 'Corporate Performance Management',
    subtitle: 'Executive dashboard prototype for strategic KPI control',
    strategyButton: '2026 Strategy Focus',
    strategyBanner: 'Growth thesis: profit growth, digital channel strength, and non-coffee expansion must move together.',
    strategyTag: 'One-page executive view',
    heroEyebrow: 'Fore Coffee · Final KPI Alignment',
    heroTitle: 'One-page dashboard for the metrics that matter most.',
    heroBody: 'This view focuses on the final agreed KPI set: profit growth, digital sales penetration, and new category contribution, supported by revenue, margin, and cash flow.',
    focusTitle: '2026 Focus',
    focusItems: [
      { value: '217', label: 'Existing outlets baseline' },
      { value: '140+', label: 'Planned new outlets' },
      { value: '30', label: 'Donut outlet expansion plan' },
    ],
    kpiLabel: 'Primary KPI',
    supportLabel: 'Supporting KPI',
    trendEyebrow: 'Financial Performance',
    trendTitle: 'Revenue vs Profit Momentum',
    trendNote: 'Semester 1 trend',
    trendSummaryTitle: 'Supporting KPI Summary',
    trendSummaryItems: [
      { value: '48.9% YoY', label: 'Revenue Growth' },
      { value: '61.8%', label: 'Gross Margin' },
      { value: 'Rp46.5B', label: 'Cash Flow' },
    ],
    trendInsightTitle: 'Financial takeaway',
    trendInsightBody: 'The growth profile remains healthy because revenue is rising while margin discipline and operating cash flow are still above the strategic floor.',
    trendExtraTitle: 'Short read',
    trendExtraItems: [
      { label: 'Best support KPI', value: 'Gross Margin' },
      { label: 'Most stable signal', value: 'Cash Flow' },
      { label: 'Main growth base', value: 'Revenue' },
    ],
    driverEyebrow: 'Digital Performance',
    driverTitle: 'Channel Penetration Mix',
    driverNote: 'Main KPI: digital sales penetration',
    outletEyebrow: 'Category Expansion',
    outletTitle: 'New Category Contribution',
    outletNote: 'Main KPI: non-coffee growth',
    outletInsightTitle: 'Category takeaway',
    outletInsightBody: 'Food and donut expansion now acts as a real secondary growth engine, reducing dependence on coffee-only revenue.',
    scenarioEyebrow: 'Decision Support',
    scenarioTitle: 'Quick Scenarios',
    scenarioNote: 'Simple executive view',
    scenarioItems: [
      { name: 'Base Case', result: '52%', note: 'Profit growth' },
      { name: 'Digital Push', result: '64%', note: 'Digital penetration' },
      { name: 'Category Push', result: '24%', note: 'New category share' },
    ],
    scenarioExtraTitle: 'Scenario note',
    scenarioExtraBody: 'These scenarios are directional views to help management compare which lever should be prioritized first.',
    alertEyebrow: 'Action Center',
    alertTitle: 'Key Alerts',
    alertNote: 'Immediate attention',
    revenueLegend: 'Revenue',
    profitLegend: 'Net Profit',
    impact: 'Impact',
    action: 'Action',
    labels: {
      profit: 'Net Profit Growth',
      digital: 'Digital Sales Penetration Rate',
      category: 'New Category Revenue Contribution',
      revenue: 'Revenue Growth',
      margin: 'Profitability Margin',
      cashflow: 'Cash Flow Health',
    },
    notes: {
      profit: 'Shows whether expansion and efficiency truly translate into bottom-line growth.',
      digital: 'Measures how dominant app and digital channels are in total transactions.',
      category: 'Measures whether non-coffee categories become a real new growth engine.',
      revenue: 'Top-line growth support from outlet expansion and food-led demand.',
      margin: 'Profit quality guardrail through NPM and gross margin discipline.',
      cashflow: 'Operating liquidity support for expansion and diversification.',
    },
    digitalItems: [
      { label: 'Fore App', share: '38%' },
      { label: 'Marketplace', share: '24%' },
      { label: 'Offline POS', share: '38%' },
    ],
    categoryItems: [
      { label: 'Coffee', share: '77.7%' },
      { label: 'Food & Donut', share: '17.1%' },
      { label: 'Other Non-Coffee', share: '5.2%' },
    ],
    alertText: {
      promo: { title: 'Promo margin needs discipline', action: 'Reduce discount depth and prioritize healthier bundles.' },
      surabaya: { title: 'Surabaya productivity still trails target', action: 'Improve local menu mix and campaign precision.' },
      digital: { title: 'Digital penetration must stay above 60%', action: 'Maintain app-led conversion incentives.' },
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
    eyebrow: 'Corporate Performance Management',
    subtitle: 'Prototype dashboard eksekutif untuk kontrol KPI strategis',
    strategyButton: 'Fokus Strategi 2026',
    strategyBanner: 'Tesis pertumbuhan: laba, penguatan kanal digital, dan ekspansi non-kopi harus bergerak bersama.',
    strategyTag: 'One-page executive view',
    heroEyebrow: 'Fore Coffee · Final KPI Alignment',
    heroTitle: 'Dashboard satu halaman untuk metrik yang paling penting.',
    heroBody: 'Tampilan ini berfokus pada KPI final yang disepakati: pertumbuhan laba, penetrasi penjualan digital, dan kontribusi kategori baru, yang didukung oleh revenue, margin, dan cash flow.',
    focusTitle: 'Fokus 2026',
    focusItems: [
      { value: '217', label: 'Baseline outlet aktif' },
      { value: '140+', label: 'Rencana outlet baru' },
      { value: '30', label: 'Rencana outlet donat' },
    ],
    kpiLabel: 'KPI Utama',
    supportLabel: 'KPI Pendukung',
    trendEyebrow: 'Financial Performance',
    trendTitle: 'Momentum Revenue vs Profit',
    trendNote: 'Tren semester 1',
    trendSummaryTitle: 'Ringkasan KPI Pendukung',
    trendSummaryItems: [
      { value: '48.9% YoY', label: 'Revenue Growth' },
      { value: '61.8%', label: 'Gross Margin' },
      { value: 'Rp46.5B', label: 'Cash Flow' },
    ],
    trendInsightTitle: 'Financial takeaway',
    trendInsightBody: 'Profil pertumbuhan masih sehat karena revenue naik, sementara disiplin margin dan arus kas operasi tetap berada di atas batas strategis.',
    trendExtraTitle: 'Catatan singkat',
    trendExtraItems: [
      { label: 'KPI pendukung terbaik', value: 'Gross Margin' },
      { label: 'Sinyal paling stabil', value: 'Cash Flow' },
      { label: 'Basis pertumbuhan utama', value: 'Revenue' },
    ],
    driverEyebrow: 'Digital Performance',
    driverTitle: 'Komposisi Penetrasi Kanal',
    driverNote: 'KPI utama: penetrasi penjualan digital',
    outletEyebrow: 'Category Expansion',
    outletTitle: 'Kontribusi Kategori Baru',
    outletNote: 'KPI utama: pertumbuhan non-kopi',
    outletInsightTitle: 'Category takeaway',
    outletInsightBody: 'Ekspansi makanan dan donat mulai menjadi mesin pertumbuhan kedua yang nyata, sehingga ketergantungan pada kopi saja berkurang.',
    scenarioEyebrow: 'Decision Support',
    scenarioTitle: 'Skenario Cepat',
    scenarioNote: 'Tampilan eksekutif sederhana',
    scenarioItems: [
      { name: 'Skenario Dasar', result: '52%', note: 'Pertumbuhan laba' },
      { name: 'Dorong Digital', result: '64%', note: 'Penetrasi digital' },
      { name: 'Dorong Kategori', result: '24%', note: 'Porsi kategori baru' },
    ],
    scenarioExtraTitle: 'Catatan skenario',
    scenarioExtraBody: 'Skenario ini bersifat directional untuk membantu manajemen membandingkan leverage mana yang perlu diprioritaskan lebih dulu.',
    alertEyebrow: 'Action Center',
    alertTitle: 'Key Alerts',
    alertNote: 'Perlu perhatian segera',
    revenueLegend: 'Revenue',
    profitLegend: 'Net Profit',
    impact: 'Dampak',
    action: 'Aksi',
    labels: {
      profit: 'Net Profit Growth',
      digital: 'Digital Sales Penetration Rate',
      category: 'New Category Revenue Contribution',
      revenue: 'Revenue Growth',
      margin: 'Profitability Margin',
      cashflow: 'Cash Flow Health',
    },
    notes: {
      profit: 'Menunjukkan apakah ekspansi dan efisiensi benar-benar menghasilkan pertumbuhan laba bersih.',
      digital: 'Mengukur seberapa dominan aplikasi dan kanal digital dalam total transaksi.',
      category: 'Mengukur apakah kategori non-kopi menjadi mesin pertumbuhan baru yang nyata.',
      revenue: 'Dukungan pertumbuhan top-line dari ekspansi outlet dan permintaan berbasis food.',
      margin: 'Penjaga kualitas profit melalui disiplin NPM dan gross margin.',
      cashflow: 'Dukungan likuiditas operasional untuk ekspansi dan diversifikasi.',
    },
    digitalItems: [
      { label: 'Fore App', share: '38%' },
      { label: 'Marketplace', share: '24%' },
      { label: 'Offline POS', share: '38%' },
    ],
    categoryItems: [
      { label: 'Coffee', share: '77.7%' },
      { label: 'Food & Donut', share: '17.1%' },
      { label: 'Other Non-Coffee', share: '5.2%' },
    ],
    alertText: {
      promo: { title: 'Margin promo perlu dijaga', action: 'Kurangi kedalaman diskon dan prioritaskan bundling yang lebih sehat.' },
      surabaya: { title: 'Produktivitas Surabaya masih di bawah target', action: 'Perbaiki menu mix lokal dan presisi campaign.' },
      digital: { title: 'Penetrasi digital harus tetap di atas 60%', action: 'Pertahankan insentif konversi berbasis aplikasi.' },
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
  const t = copy[locale];
  const maxRevenue = useMemo(() => Math.max(...financialTrend.map((point) => point.revenue)), []);
  const maxProfit = useMemo(() => Math.max(...financialTrend.map((point) => point.profit)), []);

  return (
    <main className="page-shell">
      <section className="brand-bar">
        <div className="brand-lockup">
          <Image src="/fore-logo.png" alt="Fore Coffee" width={140} height={48} priority className="brand-logo" />
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <p className="brand-subtitle">{t.subtitle}</p>
          </div>
        </div>
        <div className="brand-actions">
          <div className="locale-toggle" role="tablist" aria-label="Language switcher">
            <button type="button" className={locale === 'id' ? 'locale-option active' : 'locale-option'} onClick={() => setLocale('id')}>ID</button>
            <button type="button" className={locale === 'en' ? 'locale-option active' : 'locale-option'} onClick={() => setLocale('en')}>EN</button>
          </div>
          <span className="download-chip">{t.strategyButton}</span>
        </div>
      </section>

      <section className="announcement-strip">
        <p>{t.strategyBanner}</p>
        <span>{t.strategyTag}</span>
      </section>

      <section className="hero-strip card">
        <div className="hero-strip-copy">
          <span className="eyebrow">{t.heroEyebrow}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
        </div>
        <div className="hero-focus-inline">
          <span className="eyebrow">{t.focusTitle}</span>
          <div className="hero-focus-stats">
            {t.focusItems.map((item) => (
              <div key={item.label} className="focus-stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dense-kpi-grid primary-three-grid">
        {primaryKpis.map((item) => (
          <article key={item.id} className="card kpi-card primary-card">
            <div className="card-topline">
              <span className="eyebrow">{t.kpiLabel}</span>
              <StatusPill label={t.status[item.status]} tone={item.status.toLowerCase().replace(' ', '')} />
            </div>
            <h3>{t.labels[item.id]}</h3>
            <p className="kpi-value">{item.value}</p>
            <div className="kpi-meta-row">
              <p className="kpi-target">{item.target}</p>
              <p className="kpi-change">{item.change}</p>
            </div>
            <p className="kpi-note">{t.notes[item.id]}</p>
          </article>
        ))}
      </section>

      <section className="viewport-grid refined-grid">
        <section className="card panel trend-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.trendEyebrow}</span>
              <h2>{t.trendTitle}</h2>
            </div>
            <p>{t.trendNote}</p>
          </div>
          <div className="mini-chart-grid">
            {financialTrend.map((point) => (
              <div key={point.month} className="mini-bar-col">
                <div className="mini-bar-stack">
                  <div className="mini-bar revenue" style={{ height: `${(point.revenue / maxRevenue) * 76}px` }} />
                  <div className="mini-bar profit" style={{ height: `${(point.profit / maxProfit) * 76}px` }} />
                </div>
                <strong>{point.month}</strong>
              </div>
            ))}
          </div>
          <div className="mini-legend">
            <span><i className="legend revenue" /> {t.revenueLegend}</span>
            <span><i className="legend profit" /> {t.profitLegend}</span>
          </div>
          <div className="trend-bottom-grid compact-trend-bottom">
            <section className="trend-summary-card">
              <span className="eyebrow">{t.trendSummaryTitle}</span>
              <div className="trend-summary-stats">
                {t.trendSummaryItems.map((item) => (
                  <div key={item.label} className="trend-summary-item">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </section>
            <section className="trend-insight-card">
              <span className="eyebrow">{t.trendInsightTitle}</span>
              <p>{t.trendInsightBody}</p>
            </section>
          </div>
          <section className="trend-extra-strip">
            <span className="eyebrow">{t.trendExtraTitle}</span>
            <div className="trend-extra-grid">
              {t.trendExtraItems.map((item) => (
                <div key={item.label} className="trend-extra-item">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="card panel drivers-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.driverEyebrow}</span>
              <h2>{t.driverTitle}</h2>
            </div>
            <p>{t.driverNote}</p>
          </div>
          <div className="mini-list compact-list">
            {digitalMix.map((item) => (
              <article key={item.channel} className="mini-item">
                <div className="mini-item-top">
                  <strong>{item.channel}</strong>
                  <span>{item.share}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="mini-support-row">
            <div className="mini-support-chip">
              <strong>{supportingKpis[1].value}</strong>
              <span>{t.labels.margin}</span>
            </div>
            <div className="mini-support-chip">
              <strong>{supportingKpis[2].value}</strong>
              <span>{t.labels.cashflow}</span>
            </div>
          </div>
        </section>

        <section className="card panel outlet-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.outletEyebrow}</span>
              <h2>{t.outletTitle}</h2>
            </div>
            <p>{t.outletNote}</p>
          </div>
          <div className="mini-list compact-list">
            {categoryMix.map((item) => (
              <article key={item.segment} className="mini-item">
                <div className="mini-item-top">
                  <strong>{item.segment}</strong>
                  <span>{item.contribution}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="footer-copy-card single-copy">
            <p>{t.outletInsightBody}</p>
          </div>
        </section>

        <section className="card panel alerts-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.alertEyebrow}</span>
              <h2>{t.alertTitle}</h2>
            </div>
            <p>{t.alertNote}</p>
          </div>
          <div className="mini-list compact-list">
            {alerts.map((alert) => (
              <article key={alert.id} className="mini-item alert-mini-item">
                <div className="mini-item-top">
                  <strong>{t.alertText[alert.id].title}</strong>
                  <span className={`pill ${alert.level.toLowerCase()}`}>{t.status[alert.level]}</span>
                </div>
                <p>{t.action}: {t.alertText[alert.id].action}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card panel scenario-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.scenarioEyebrow}</span>
              <h2>{t.scenarioTitle}</h2>
            </div>
            <p>{t.scenarioNote}</p>
          </div>
          <div className="scenario-mini-grid compact-scenario-grid">
            {t.scenarioItems.map((item) => (
              <article key={item.name} className="scenario-chip">
                <strong>{item.name}</strong>
                <span>{item.result}</span>
                <small>{item.note}</small>
              </article>
            ))}
          </div>
          <div className="scenario-note-card">
            <span className="eyebrow">{t.scenarioExtraTitle}</span>
            <p>{t.scenarioExtraBody}</p>
          </div>
        </section>
      </section>
    </main>
  );
}
