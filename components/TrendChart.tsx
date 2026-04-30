import type { TrendPoint } from '@/data/dashboard-data';

export function TrendChart({ data }: { data: TrendPoint[] }) {
  const maxRevenue = Math.max(...data.map((point) => point.revenue));

  return (
    <section className="card">
      <div className="section-head">
        <div>
          <span className="eyebrow">Trend Analysis</span>
          <h2>Revenue & Net Profit Momentum</h2>
        </div>
        <p className="muted">Dummy data semester 1 untuk memetakan progres YoY.</p>
      </div>

      <div className="chart-grid">
        {data.map((point) => (
          <div key={point.month} className="bar-col">
            <div className="bar-stack">
              <div
                className="bar revenue"
                style={{ height: `${(point.revenue / maxRevenue) * 180}px` }}
                title={`Revenue ${point.revenue}`}
              />
              <div
                className="bar profit"
                style={{ height: `${(point.netProfit / maxRevenue) * 180}px` }}
                title={`Net Profit ${point.netProfit}`}
              />
            </div>
            <div className="bar-label">{point.month}</div>
            <div className="bar-meta">GM {point.margin}%</div>
          </div>
        ))}
      </div>
      <div className="legend-row">
        <span><i className="legend revenue" /> Revenue Index</span>
        <span><i className="legend profit" /> Net Profit Index</span>
      </div>
    </section>
  );
}
