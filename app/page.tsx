'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { alerts, drivers, kpis, outletPerformance, scenarios, trends } from '@/data/dashboard-data';

type Locale = 'id' | 'en';

const copy = {
  en: {
    eyebrow: 'Corporate Performance Management',
    subtitle: 'Executive dashboard prototype for strategic KPI control',
    strategyButton: '2026 Strategy Focus',
    strategyBanner: 'Growth thesis: profitable expansion, stronger digital mix, and disciplined margin protection.',
    strategyTag: 'CPM planning baseline',
    heroEyebrow: 'Fore Coffee · Net Profit Growth Target',
    heroTitle: 'Metrics-first dashboard built to fit one executive screen.',
    heroBody:
      'Track Net Profit Growth > 50% YoY with supporting visibility into revenue, margin, cash flow, outlet contribution, and decision scenarios.',
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
    driverEyebrow: 'Profit Bridge',
    driverTitle: 'Top Value Drivers',
    driverNote: 'Core CPM levers',
    outletEyebrow: 'Expansion View',
    outletTitle: 'Top Cities',
    outletNote: 'Highest contribution',
    scenarioEyebrow: 'Decision Support',
    scenarioTitle: 'Quick Scenarios',
    scenarioNote: 'Planning-ready options',
    alertEyebrow: 'Action Center',
    alertTitle: 'Key Alerts',
    alertNote: 'Immediate attention',
    revenueLegend: 'Revenue',
    profitLegend: 'Net Profit',
    impact: 'Impact',
    action: 'Action',
    outletHeaders: ['City', 'Growth', 'Contribution', 'Status'],
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
    heroTitle: 'Dashboard ringkas yang dirancang muat dalam satu layar eksekutif.',
    heroBody:
      'Pantau Net Profit Growth > 50% YoY dengan visibilitas ringkas atas revenue, margin, cash flow, kontribusi outlet, dan skenario keputusan.',
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
    driverEyebrow: 'Profit Bridge',
    driverTitle: 'Driver Nilai Utama',
    driverNote: 'Levers CPM inti',
    outletEyebrow: 'Pandangan Ekspansi',
    outletTitle: 'Kota Teratas',
    outletNote: 'Kontribusi tertinggi',
    scenarioEyebrow: 'Dukungan Keputusan',
    scenarioTitle: 'Skenario Cepat',
    scenarioNote: 'Opsional siap planning',
    alertEyebrow: 'Pusat Aksi',
    alertTitle: 'Alert Kunci',
    alertNote: 'Perlu perhatian segera',
    revenueLegend: 'Revenue',
    profitLegend: 'Net Profit',
    impact: 'Dampak',
    action: 'Aksi',
    outletHeaders: ['Kota', 'Growth', 'Kontribusi', 'Status'],
    status: {
      onTrack: 'On Track',
      watchlist: 'Watchlist',
      critical: 'Critical',
      strong: 'Strong',
      monitor: 'Monitor',
      improve: 'Improve',
    },
  },
} as const;

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

      <section className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">{t.heroEyebrow}</span>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroBody}</p>
        </div>
        <div className="focus-card card">
          <div className="section-head compact-head">
            <div>
              <span className="eyebrow">{t.focusTitle}</span>
            </div>
          </div>
          <div className="strategy-grid compact-focus-grid">
            {t.focusItems.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kpi-grid dense-kpi-grid">
        {kpis.map((item) => (
          <article key={item.label} className="card kpi-card">
            <div className="card-topline">
              <span className="eyebrow">{t.kpiLabel}</span>
              <span className={`status ${statusMap[item.status].toLowerCase()}`}>{t.status[statusMap[item.status]]}</span>
            </div>
            <h3>{item.label}</h3>
            <p className="kpi-value">{item.value}</p>
            <div className="kpi-meta-row">
              <p className="kpi-target">{item.target}</p>
              <p className="kpi-change">{item.change}</p>
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
            {trends.map((point) => (
              <div key={point.month} className="mini-bar-col">
                <div className="mini-bar-stack">
                  <div className="mini-bar revenue" style={{ height: `${(point.revenue / maxRevenue) * 82}px` }} />
                  <div className="mini-bar profit" style={{ height: `${(point.netProfit / maxRevenue) * 82}px` }} />
                </div>
                <strong>{point.month}</strong>
                <span>GM {point.margin}%</span>
              </div>
            ))}
          </div>
          <div className="mini-legend">
            <span><i className="legend revenue" /> {t.revenueLegend}</span>
            <span><i className="legend profit" /> {t.profitLegend}</span>
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
            {drivers.slice(0, 3).map((driver) => (
              <article key={driver.title} className="mini-item">
                <div className="mini-item-top">
                  <strong>{driver.title}</strong>
                  <span>{driver.value}</span>
                </div>
                <p>{t.impact}: {driver.impact}</p>
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
            {scenarios.map((scenario) => (
              <article key={scenario.name} className="scenario-chip">
                <strong>{scenario.name}</strong>
                <span>{scenario.projectedProfitGrowth}</span>
              </article>
            ))}
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
          <div className="mini-list">
            {alerts.slice(0, 2).map((alert) => (
              <article key={alert.title} className="mini-item alert-mini-item">
                <div className="mini-item-top">
                  <strong>{alert.title}</strong>
                  <span className={`pill ${alert.level.toLowerCase()}`}>{alert.level}</span>
                </div>
                <p>{t.action}: {alert.action}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
