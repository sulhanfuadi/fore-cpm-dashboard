import type { Scenario } from '@/data/dashboard-data';

export function ScenarioPanel({ items }: { items: Scenario[] }) {
  return (
    <section className="card">
      <div className="section-head">
        <div>
          <span className="eyebrow">Decision Support</span>
          <h2>Scenario Simulation</h2>
        </div>
        <p className="muted">Simulasi statis untuk melihat efek strategi terhadap profit growth.</p>
      </div>

      <div className="scenario-grid">
        {items.map((item) => (
          <article key={item.name} className="scenario-item">
            <h3>{item.name}</h3>
            <ul>
              <li>Revenue Lift: {item.revenueLift}</li>
              <li>Margin: {item.marginImpact}</li>
              <li>Cost Efficiency: {item.costEfficiency}</li>
              <li>Projected Profit Growth: {item.projectedProfitGrowth}</li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
