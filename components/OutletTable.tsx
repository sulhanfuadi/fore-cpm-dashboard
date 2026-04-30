import type { OutletPerformance } from '@/data/dashboard-data';

export function OutletTable({ rows }: { rows: OutletPerformance[] }) {
  return (
    <section className="card">
      <div className="section-head">
        <div>
          <span className="eyebrow">Expansion View</span>
          <h2>Outlet & City Performance</h2>
        </div>
        <p className="muted">Melihat kontribusi ekspansi terhadap pertumbuhan laba.</p>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Kota</th>
              <th>Outlet</th>
              <th>Revenue Growth</th>
              <th>Profit Contribution</th>
              <th>Margin</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.city}>
                <td>{row.city}</td>
                <td>{row.outletCount}</td>
                <td>{row.revenueGrowth}</td>
                <td>{row.netProfitContribution}</td>
                <td>{row.margin}</td>
                <td><span className={`pill ${row.status.toLowerCase()}`}>{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
