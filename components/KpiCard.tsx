import type { KPI } from '@/data/dashboard-data';

const statusClass: Record<KPI['status'], string> = {
  'On Track': 'status good',
  Watchlist: 'status warn',
  Critical: 'status danger',
};

export function KpiCard({ item }: { item: KPI }) {
  return (
    <article className="card kpi-card">
      <div className="card-topline">
        <span className="eyebrow">KPI</span>
        <span className={statusClass[item.status]}>{item.status}</span>
      </div>
      <h3>{item.label}</h3>
      <p className="kpi-value">{item.value}</p>
      <p className="kpi-target">Target: {item.target}</p>
      <p className="kpi-change">{item.change}</p>
      <p className="muted">{item.note}</p>
    </article>
  );
}
