export type KPI = {
  label: string;
  value: string;
  target: string;
  status: 'On Track' | 'Watchlist' | 'Critical';
  change: string;
  note: string;
};

export type TrendPoint = {
  month: string;
  revenue: number;
  netProfit: number;
  margin: number;
};

export type OutletPerformance = {
  city: string;
  outletCount: number;
  revenueGrowth: string;
  netProfitContribution: string;
  margin: string;
  status: 'Strong' | 'Monitor' | 'Improve';
};

export type Driver = {
  title: string;
  impact: string;
  value: string;
  insight: string;
};

export type AlertItem = {
  title: string;
  level: 'High' | 'Medium' | 'Low';
  detail: string;
  action: string;
};

export type Scenario = {
  name: string;
  revenueLift: string;
  marginImpact: string;
  costEfficiency: string;
  projectedProfitGrowth: string;
};

export const kpis: KPI[] = [
  {
    label: 'Net Profit Growth',
    value: '52.4% YoY',
    target: 'Target > 50%',
    status: 'On Track',
    change: '+4.8 pts vs Q4',
    note: 'Outlet maturity and cost discipline remain the main growth levers.',
  },
  {
    label: 'Revenue Growth',
    value: '48.9% YoY',
    target: 'Range 45%–55%',
    status: 'On Track',
    change: '+6.1 pts vs LY',
    note: 'Food bundles continue to lift basket size and repeat transactions.',
  },
  {
    label: 'Net Profit Margin',
    value: '2.2%',
    target: 'Range 2.0%–2.5%',
    status: 'Watchlist',
    change: '-0.2 pts vs peak',
    note: 'Promotional pressure is manageable but still needs tighter control.',
  },
  {
    label: 'Operating Cash Flow',
    value: 'Rp46.5B',
    target: 'Target > Rp40B/qtr',
    status: 'On Track',
    change: '+Rp5.7B vs plan',
    note: 'Cash generation remains strong enough to support the next rollout wave.',
  },
];

export const trends: TrendPoint[] = [
  { month: 'Jan', revenue: 72, netProfit: 11, margin: 58 },
  { month: 'Feb', revenue: 75, netProfit: 12, margin: 59 },
  { month: 'Mar', revenue: 79, netProfit: 13, margin: 60 },
  { month: 'Apr', revenue: 84, netProfit: 14, margin: 61 },
  { month: 'May', revenue: 88, netProfit: 15, margin: 61 },
  { month: 'Jun', revenue: 93, netProfit: 17, margin: 62 },
];

export const drivers: Driver[] = [
  {
    title: 'Food Attachment Rate',
    impact: 'Revenue Growth',
    value: '+18%',
    insight: 'Bundles lift average ticket and improve mix quality.',
  },
  {
    title: 'Gross Margin Discipline',
    impact: 'Profitability Margin',
    value: '61.8%',
    insight: 'Premium mix and tighter COGS control keep margins resilient.',
  },
  {
    title: 'Store Operating Efficiency',
    impact: 'Net Profit Growth',
    value: '-6.4% OpEx/store',
    insight: 'Mature stores are scaling with lower operating cost per outlet.',
  },
  {
    title: 'Cash Conversion',
    impact: 'Cash Flow Health',
    value: '27 days',
    insight: 'Faster cash cycles preserve funding capacity for expansion.',
  },
];

export const outletPerformance: OutletPerformance[] = [
  {
    city: 'Jakarta',
    outletCount: 78,
    revenueGrowth: '51%',
    netProfitContribution: '34%',
    margin: '2.4%',
    status: 'Strong',
  },
  {
    city: 'Bandung',
    outletCount: 21,
    revenueGrowth: '46%',
    netProfitContribution: '11%',
    margin: '2.1%',
    status: 'Strong',
  },
  {
    city: 'Surabaya',
    outletCount: 19,
    revenueGrowth: '43%',
    netProfitContribution: '9%',
    margin: '1.9%',
    status: 'Monitor',
  },
  {
    city: 'Medan',
    outletCount: 12,
    revenueGrowth: '39%',
    netProfitContribution: '6%',
    margin: '1.7%',
    status: 'Improve',
  },
  {
    city: 'Makassar',
    outletCount: 9,
    revenueGrowth: '41%',
    netProfitContribution: '5%',
    margin: '1.8%',
    status: 'Monitor',
  },
];

export const alerts: AlertItem[] = [
  {
    title: 'Promo margin is slightly compressed',
    level: 'High',
    detail: 'New-store discounting is dragging margin 0.3 points below mature clusters.',
    action: 'Reduce promo depth and push higher-margin bundles.',
  },
  {
    title: 'Surabaya is below target productivity',
    level: 'Medium',
    detail: 'Revenue growth is still below the CPM corridor for tier-1 expansion cities.',
    action: 'Review daypart mix, menu fit, and local campaign design.',
  },
  {
    title: 'Cash position remains expansion-ready',
    level: 'Low',
    detail: 'Operating cash flow still sits above the minimum quarterly threshold.',
    action: 'Keep capex prioritization disciplined for the next opening wave.',
  },
];

export const scenarios: Scenario[] = [
  {
    name: 'Base Case',
    revenueLift: '+48%',
    marginImpact: '2.2%',
    costEfficiency: '-5%',
    projectedProfitGrowth: '52%',
  },
  {
    name: 'Aggressive Expansion',
    revenueLift: '+55%',
    marginImpact: '2.0%',
    costEfficiency: '-3%',
    projectedProfitGrowth: '49%',
  },
  {
    name: 'Margin Optimization',
    revenueLift: '+47%',
    marginImpact: '2.5%',
    costEfficiency: '-7%',
    projectedProfitGrowth: '58%',
  },
];
