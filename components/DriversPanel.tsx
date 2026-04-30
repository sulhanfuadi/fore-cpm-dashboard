import type { Driver } from '@/data/dashboard-data';

export function DriversPanel({ data }: { data: Driver[] }) {
  return (
    <section className="card">
      <div className="section-head">
        <div>
          <span className="eyebrow">Profit Bridge</span>
          <h2>Financial Drivers</h2>
        </div>
        <p className="muted">Fokus CPM pada driver yang memengaruhi laba bersih.</p>
      </div>

      <div className="driver-list">
        {data.map((driver) => (
          <article key={driver.title} className="driver-item">
            <div>
              <p className="driver-title">{driver.title}</p>
              <p className="driver-impact">Impact: {driver.impact}</p>
            </div>
            <div className="driver-value">{driver.value}</div>
            <p className="muted">{driver.insight}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
