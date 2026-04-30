'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { alerts, drivers, kpis, outletPerformance, scenarios, trends } from '@/data/dashboard-data';

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
  trendEyebrow: string;
  trendTitle: string;
  trendNote: string;
  trendSummaryTitle: string;
  trendSummaryItems: Array<{ value: string; label: string }>;
  trendInsightTitle: string;
  trendInsightBody: string;  driverEyebrow: string;
  driverTitle: string;
  driverNote: string;  outletEyebrow: string;
  outletTitle: string;
  outletNote: string;
  outletInsightTitle: string;
  outletInsightBody: string;
  scenarioEyebrow: string;
  scenarioTitle: string;
  scenarioNote: string;
  scenarioAssumptionTitle: string;
  scenarioAssumptions: string[];
  alertEyebrow: string;
  alertTitle: string;
  alertNote: string;  revenueLegend: string;
  profitLegend: string;
  impact: string;
  action: string;
  scenarioResult: string;
  outletHeaders: [string, string, string, string];
  months: string[];
  kpis: Array<{ label: string; target: string; change: string }>;
  drivers: Array<{ title: string; impact: string }>;
  alerts: Array<{ title: string; action: string }>;
  scenarios: Array<{ name: string; resultLabel: string }>;
  status: {
    onTrack: string;
    watchlist: string;
    critical: string;
    strong: string;
    monitor: string;
    improve: string;
  };
};

const copy: Record<Locale, Copy> = {
  en: {
    eyebrow: 'Corporate Performance Management',
    subtitle: 'Executive dashboard prototype for strategic KPI control',
    strategyButton: '2026 Strategy Focus',
    strategyBanner: 'Growth thesis: profitable expansion, stronger digital mix, and disciplined margin protection.',
    strategyTag: 'CPM planning baseline',
    heroEyebrow: 'Fore Coffee · Net Profit Growth Target',
    heroTitle: 'One-screen dashboard for the metrics that matter most.',
    heroBody:
      'Monitor profit growth, revenue, margin, cash flow, outlet contribution, and decision scenarios in one compact executive view.',
    focusTitle: '2026 Focus',
    focusItems: [
      { value: '217', label: 'Existing outlets baseline' },
      { value: '140+', label: 'Planned new outlets' },
      { value: '>50%', label: 'Profit growth ambition' },
    ],
    kpiLabel: 'KPI Snapshot',
    trendEyebrow: 'Trend Analysis',
    trendTitle: 'Revenue vs Profit Momentum',
    trendNote: 'Semester 1 trend',
    trendSummaryTitle: 'Trend Summary',
    trendSummaryItems: [
      { value: '+21 pts', label: 'Revenue index growth' },
      { value: '+6 pts', label: 'Gross margin uplift' },
      { value: '+54%', label: 'Profit index expansion' },
    ],
    trendInsightTitle: 'Momentum Insight',
    trendInsightBody: 'Revenue and net profit continue to rise together, indicating the current expansion phase is still accretive and operational leverage is improving.',    driverEyebrow: 'Profit Bridge',
    driverTitle: 'Top Value Drivers',
    driverNote: 'Core CPM levers',    outletEyebrow: 'Expansion View',
    outletTitle: 'Top Cities',
    outletNote: 'Highest contribution',
    outletInsightTitle: 'Cluster takeaway',
    outletInsightBody: 'Jakarta and Bandung remain the strongest contribution clusters, Surabaya still needs productivity acceleration.',
    scenarioEyebrow: 'Decision Support',
    scenarioTitle: 'Quick Scenarios',
    scenarioNote: 'Planning-ready options',
    scenarioAssumptionTitle: 'Shared assumptions',
    scenarioAssumptions: ['Same-store demand remains resilient', 'No major commodity cost shock', 'New outlet ramp stays within plan'],
    alertEyebrow: 'Action Center',
    alertTitle: 'Key Alerts',
    alertNote: 'Immediate attention',    revenueLegend: 'Revenue',
    profitLegend: 'Net Profit',
    impact: 'Impact',
    action: 'Action',
    scenarioResult: 'Projected profit growth',
    outletHeaders: ['City', 'Growth', 'Contribution', 'Status'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    kpis: [
      { label: 'Net Profit Growth', target: 'Target > 50%', change: '+4.8 pts vs Q4' },
      { label: 'Revenue Growth', target: 'Range 45%–55%', change: '+6.1 pts vs LY' },
      { label: 'Net Profit Margin', target: 'Range 2.0%–2.5%', change: '-0.2 pts vs peak' },
      { label: 'Operating Cash Flow', target: 'Target > Rp40B/qtr', change: '+Rp5.7B vs plan' },
    ],
    drivers: [
      { title: 'Food Attachment Rate', impact: 'Revenue Growth' },
      { title: 'Gross Margin Discipline', impact: 'Profitability Margin' },
      { title: 'Store Operating Efficiency', impact: 'Net Profit Growth' },
    ],
    alerts: [
      { title: 'Promo margin is slightly compressed', action: 'Reduce promo depth and push higher-margin bundles.' },
      { title: 'Surabaya is below target productivity', action: 'Review daypart mix, menu fit, and local campaign design.' },
    ],
    scenarios: [
      { name: 'Base Case', resultLabel: 'Projected profit growth' },
      { name: 'Aggressive Expansion', resultLabel: 'Projected profit growth' },
      { name: 'Margin Optimization', resultLabel: 'Projected profit growth' },
    ],
    status: {
      onTrack: 'On Track',
      watchlist: 'Watchlist',
      critical: 'Critical',
      strong: 'Strong',
      monitor: 'Monitor',
      improve: 'Improve',
    },
  },
  id: {
    eyebrow: 'Corporate Performance Management',
    subtitle: 'Prototype dashboard eksekutif untuk kontrol KPI strategis',
    strategyButton: 'Fokus Strategi 2026',
    strategyBanner: 'Tesis pertumbuhan: ekspansi yang profitable, bauran digital yang lebih kuat, dan perlindungan margin yang disiplin.',
    strategyTag: 'Baseline perencanaan CPM',
    heroEyebrow: 'Fore Coffee · Target Net Profit Growth',
    heroTitle: 'Dashboard satu layar untuk metrik yang paling penting.',
    heroBody:
      'Pantau pertumbuhan laba, revenue, margin, cash flow, kontribusi outlet, dan skenario keputusan dalam satu tampilan eksekutif yang ringkas.',
    focusTitle: 'Fokus 2026',
    focusItems: [
      { value: '217', label: 'Baseline outlet aktif' },
      { value: '140+', label: 'Rencana outlet baru' },
      { value: '>50%', label: 'Ambisi pertumbuhan laba' },
    ],
    kpiLabel: 'Ringkasan KPI',
    trendEyebrow: 'Analisis Tren',
    trendTitle: 'Momentum Revenue vs Profit',
    trendNote: 'Tren semester 1',
    trendSummaryTitle: 'Ringkasan Tren',
    trendSummaryItems: [
      { value: '+21 poin', label: 'Pertumbuhan indeks revenue' },
      { value: '+6 poin', label: 'Peningkatan gross margin' },
      { value: '+54%', label: 'Ekspansi indeks profit' },
    ],
    trendInsightTitle: 'Insight Momentum',
    trendInsightBody: 'Revenue dan net profit terus naik bersama, menunjukkan fase ekspansi saat ini masih accretive dan operational leverage terus membaik.',    driverEyebrow: 'Profit Bridge',
    driverTitle: 'Driver Nilai Utama',
    driverNote: 'Levers CPM inti',    outletEyebrow: 'Pandangan Ekspansi',
    outletTitle: 'Kota Teratas',
    outletNote: 'Kontribusi tertinggi',
    outletInsightTitle: 'Insight cluster',
    outletInsightBody: 'Jakarta dan Bandung tetap menjadi cluster kontribusi terkuat, sementara Surabaya masih perlu akselerasi produktivitas.',
    scenarioEyebrow: 'Dukungan Keputusan',
    scenarioTitle: 'Skenario Cepat',
    scenarioNote: 'Opsi siap planning',
    scenarioAssumptionTitle: 'Asumsi bersama',
    scenarioAssumptions: ['Permintaan same-store tetap resilien', 'Tidak ada shock besar biaya komoditas', 'Ramp outlet baru tetap sesuai rencana'],
    alertEyebrow: 'Pusat Aksi',
    alertTitle: 'Alert Kunci',
    alertNote: 'Perlu perhatian segera',    revenueLegend: 'Revenue',
    profitLegend: 'Net Profit',
    impact: 'Dampak',
    action: 'Aksi',
    scenarioResult: 'Proyeksi pertumbuhan laba',
    outletHeaders: ['Kota', 'Growth', 'Kontribusi', 'Status'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    kpis: [
      { label: 'Pertumbuhan Laba Bersih', target: 'Target > 50%', change: '+4,8 poin vs Q4' },
      { label: 'Pertumbuhan Pendapatan', target: 'Rentang 45%–55%', change: '+6,1 poin vs LY' },
      { label: 'Margin Laba Bersih', target: 'Rentang 2,0%–2,5%', change: '-0,2 poin vs puncak' },
      { label: 'Arus Kas Operasi', target: 'Target > Rp40M/qtr', change: '+Rp5,7M vs rencana' },
    ],
    drivers: [
      { title: 'Attachment Rate Makanan', impact: 'Pertumbuhan Pendapatan' },
      { title: 'Disiplin Gross Margin', impact: 'Margin Laba' },
      { title: 'Efisiensi Operasional Toko', impact: 'Pertumbuhan Laba Bersih' },
    ],
    alerts: [
      { title: 'Margin promo sedikit tertekan', action: 'Kurangi kedalaman promo dan dorong bundling bermargin tinggi.' },
      { title: 'Surabaya masih di bawah produktivitas target', action: 'Review daypart mix, kecocokan menu, dan desain campaign lokal.' },
    ],
    scenarios: [
      { name: 'Skenario Dasar', resultLabel: 'Proyeksi pertumbuhan laba' },
      { name: 'Ekspansi Agresif', resultLabel: 'Proyeksi pertumbuhan laba' },
      { name: 'Optimasi Margin', resultLabel: 'Proyeksi pertumbuhan laba' },
    ],
    status: {
      onTrack: 'On Track',
      watchlist: 'Watchlist',
      critical: 'Critical',
      strong: 'Strong',
      monitor: 'Monitor',
      improve: 'Improve',
    },
  },
};

const statusMap = {
  'On Track': 'onTrack',
  Watchlist: 'watchlist',
  Critical: 'critical',
  Strong: 'strong',
  Monitor: 'monitor',
  Improve: 'improve',
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const t = copy[locale];
  const maxRevenue = useMemo(() => Math.max(...trends.map((point) => point.revenue)), []);

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

      <section className="kpi-grid dense-kpi-grid">
        {kpis.map((item, index) => (
          <article key={item.label} className="card kpi-card">
            <div className="card-topline">
              <span className="eyebrow">{t.kpiLabel}</span>
              <span className={`status ${statusMap[item.status].toLowerCase()}`}>{t.status[statusMap[item.status]]}</span>
            </div>
            <h3>{t.kpis[index].label}</h3>
            <p className="kpi-value">{item.value}</p>
            <div className="kpi-meta-row">
              <p className="kpi-target">{t.kpis[index].target}</p>
              <p className="kpi-change">{t.kpis[index].change}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="viewport-grid">
        <section className="card panel trend-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.trendEyebrow}</span>
              <h2>{t.trendTitle}</h2>
            </div>
            <p>{t.trendNote}</p>
          </div>
          <div className="mini-chart-grid">
            {trends.map((point, index) => (
              <div key={point.month} className="mini-bar-col">
                <div className="mini-bar-stack">
                  <div className="mini-bar revenue" style={{ height: `${(point.revenue / maxRevenue) * 76}px` }} />
                  <div className="mini-bar profit" style={{ height: `${(point.netProfit / maxRevenue) * 76}px` }} />
                </div>
                <strong>{t.months[index]}</strong>
                <span>GM {point.margin}%</span>
              </div>
            ))}
          </div>
          <div className="mini-legend">
            <span><i className="legend revenue" /> {t.revenueLegend}</span>
            <span><i className="legend profit" /> {t.profitLegend}</span>
          </div>
          <div className="trend-bottom-grid">
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
        </section>

        <section className="card panel drivers-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.driverEyebrow}</span>
              <h2>{t.driverTitle}</h2>
            </div>
            <p>{t.driverNote}</p>
          </div>
          <div className="mini-list">
            {drivers.slice(0, 3).map((driver, index) => (
              <article key={driver.title} className="mini-item">
                <div className="mini-item-top">
                  <strong>{t.drivers[index].title}</strong>
                  <span>{driver.value}</span>
                </div>
                <p>{t.impact}: {t.drivers[index].impact}</p>
              </article>
            ))}
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
          <div className="mini-table">
            <div className="mini-row mini-head">
              {t.outletHeaders.map((header) => (
                <span key={header}>{header}</span>
              ))}
            </div>
            {outletPerformance.slice(0, 3).map((row) => (
              <div key={row.city} className="mini-row">
                <span>{row.city}</span>
                <span>{row.revenueGrowth}</span>
                <span>{row.netProfitContribution}</span>
                <span className={`pill ${row.status.toLowerCase()}`}>{t.status[statusMap[row.status]]}</span>
              </div>
            ))}
          </div>
          <section className="panel-footer-block">
            <span className="eyebrow">{t.outletInsightTitle}</span>
            <div className="footer-copy-card">
              <p>{t.outletInsightBody}</p>
            </div>
          </section>
        </section>

        <section className="card panel scenario-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.scenarioEyebrow}</span>
              <h2>{t.scenarioTitle}</h2>
            </div>
            <p>{t.scenarioNote}</p>
          </div>
          <div className="scenario-mini-grid">
            {scenarios.map((scenario, index) => (
              <article key={scenario.name} className="scenario-chip">
                <strong>{t.scenarios[index].name}</strong>
                <span>{scenario.projectedProfitGrowth}</span>
                <small>{t.scenarios[index].resultLabel}</small>
              </article>
            ))}
          </div>
          <section className="panel-footer-block">
            <span className="eyebrow">{t.scenarioAssumptionTitle}</span>
            <div className="assumption-list">
              {t.scenarioAssumptions.map((item) => (
                <div key={item} className="assumption-item">{item}</div>
              ))}
            </div>
          </section>
        </section>

        <section className="card panel alerts-panel">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.alertEyebrow}</span>
              <h2>{t.alertTitle}</h2>
            </div>
            <p>{t.alertNote}</p>
          </div>
          <div className="mini-list">
            {alerts.slice(0, 2).map((alert, index) => (
              <article key={alert.title} className="mini-item alert-mini-item">
                <div className="mini-item-top">
                  <strong>{t.alerts[index].title}</strong>
                  <span className={`pill ${alert.level.toLowerCase()}`}>{alert.level}</span>
                </div>
                <p>{t.action}: {t.alerts[index].action}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
