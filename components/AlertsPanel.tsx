import type { AlertItem } from '@/data/dashboard-data';

export function AlertsPanel({ items }: { items: AlertItem[] }) {
  return (
    <section className="card">
      <div className="section-head">
        <div>
          <span className="eyebrow">Action Center</span>
          <h2>Alerts & Recommendations</h2>
        </div>
        <p className="muted">Deteksi dini untuk menjaga target KPI tetap on track.</p>
      </div>

      <div className="alert-list">
        {items.map((item) => (
          <article key={item.title} className="alert-item">
            <div className="alert-head">
              <h3>{item.title}</h3>
              <span className={`pill ${item.level.toLowerCase()}`}>{item.level}</span>
            </div>
            <p>{item.detail}</p>
            <p className="muted">Recommended action: {item.action}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
