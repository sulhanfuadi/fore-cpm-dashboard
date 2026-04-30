import Image from 'next/image';
import { AlertsPanel } from '@/components/AlertsPanel';
import { DriversPanel } from '@/components/DriversPanel';
import { KpiCard } from '@/components/KpiCard';
import { OutletTable } from '@/components/OutletTable';
import { ScenarioPanel } from '@/components/ScenarioPanel';
import { TrendChart } from '@/components/TrendChart';
import { alerts, drivers, kpis, outletPerformance, scenarios, trends } from '@/data/dashboard-data';

export default function Home() {
  return (
    <main className="page-shell">
      <section className="brand-bar">
        <div className="brand-lockup">
          <Image src="/fore-logo.png" alt="Fore Coffee" width={140} height={48} priority className="brand-logo" />
          <div>
            <span className="eyebrow">Corporate Performance Management</span>
            <p className="brand-subtitle">Executive dashboard prototype for strategic KPI control</p>
          </div>
        </div>
        <div className="brand-actions">
          <span className="locale-pill">ID / EN</span>
          <button type="button" className="download-chip">2026 Strategy Focus</button>
        </div>
      </section>

      <section className="announcement-strip">
        <p>Growth thesis: profitable expansion, stronger digital mix, and disciplined margin protection.</p>
        <span>CPM planning baseline</span>
      </section>

      <section className="topbar">
        <div className="topbar-copy">
          <span className="eyebrow">Fore Coffee · Net Profit Growth Target</span>
          <h1>Compact view of the metrics that matter most.</h1>
          <p>
            Track <strong>Net Profit Growth &gt; 50% YoY</strong> with supporting visibility into revenue,
            margin, cash flow, outlet contribution, and decision scenarios.
          </p>
        </div>
        <div className="strategy-strip card compact-card">
          <span className="eyebrow">2026 Focus</span>
          <div className="strategy-grid">
            <div>
              <strong>217</strong>
              <span>Existing outlets baseline</span>
            </div>
            <div>
              <strong>140+</strong>
              <span>Planned new outlets</span>
            </div>
            <div>
              <strong>&gt;50%</strong>
              <span>Profit growth ambition</span>
            </div>
          </div>
        </div>
      </section>

      <section className="kpi-grid dense-kpi-grid">
        {kpis.map((item) => (
          <KpiCard key={item.label} item={item} />
        ))}
      </section>

      <section className="dashboard-grid">
        <div className="primary-panel">
          <TrendChart data={trends} />
        </div>
        <div className="secondary-stack">
          <DriversPanel data={drivers} />
          <AlertsPanel items={alerts} />
        </div>
        <div className="compact-panel">
          <OutletTable rows={outletPerformance.slice(0, 4)} />
        </div>
        <div className="compact-panel">
          <ScenarioPanel items={scenarios} />
        </div>
      </section>
    </main>
  );
}
