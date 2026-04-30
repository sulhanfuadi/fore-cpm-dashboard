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
      <section className="hero">
        <div>
          <span className="badge">Fore Coffee • Corporate Performance Management</span>
          <h1>Executive Dashboard for Net Profit Growth</h1>
          <p>
            Prototype dashboard untuk memonitor target utama <strong>Net Profit Growth &gt; 50% YoY</strong>
            {' '}beserta driver revenue, margin, cash flow, dan performa ekspansi outlet.
          </p>
        </div>
        <div className="hero-side card">
          <p className="eyebrow">2026 Strategic Goal</p>
          <h2>Grow profit faster, not just bigger.</h2>
          <ul>
            <li>Target outlet growth terkontrol</li>
            <li>Margin tetap sehat saat ekspansi</li>
            <li>Cash flow aman untuk scale-up</li>
          </ul>
        </div>
      </section>

      <section className="kpi-grid">
        {kpis.map((item) => (
          <KpiCard key={item.label} item={item} />
        ))}
      </section>

      <section className="content-grid">
        <TrendChart data={trends} />
        <DriversPanel data={drivers} />
      </section>

      <section className="content-grid bottom-grid">
        <OutletTable rows={outletPerformance} />
        <div className="stack">
          <AlertsPanel items={alerts} />
          <ScenarioPanel items={scenarios} />
        </div>
      </section>
    </main>
  );
}
