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
      <section className="topbar">
        <div className="topbar-copy">
          <span className="eyebrow">Fore Coffee · CPM Executive Dashboard</span>
          <h1>Single-screen performance view for profit-led growth</h1>
          <p>
            Monitor <strong>Net Profit Growth &gt; 50% YoY</strong> with compact visibility into revenue,
            margin, cash flow, outlet performance, and scenario readiness.
          </p>
        </div>
        <div className="strategy-strip card compact-card">
          <span className="eyebrow">2026 Focus</span>
          <ul>
            <li>Scale profitable outlets</li>
            <li>Protect margin quality</li>
            <li>Keep expansion cash-positive</li>
          </ul>
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
