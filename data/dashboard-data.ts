
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

export type Scenario = {
  name: string;
  revenueLift: string;
  marginImpact: string;
  costEfficiency: string;
  projectedProfitGrowth: string;
};

export type PrimaryKPI = {
  id: 'profit' | 'digital' | 'category';
  value: string;
  target: string;
  status: 'On Track' | 'Watchlist' | 'Critical';
  change: string;
};

export type SupportingKPI = {
  id: 'revenue' | 'margin' | 'cashflow';
  value: string;
  target: string;
  status: 'On Track' | 'Watchlist' | 'Critical';
  change: string;
};

export type FinancialPoint = {
  month: string;
  revenue: number;
  profit: number;
};

export type DigitalPoint = {
  channel: string;
  share: string;
};

export type CategoryPoint = {
  segment: string;
  contribution: string;
};

export type AlertItem = {
  id: 'promo' | 'surabaya' | 'digital';
  level: 'High' | 'Medium' | 'Low';
  title?: string;
  detail?: string;
  action?: string;
};

export const primaryKpis: PrimaryKPI[] = [
  {
    id: 'profit',
    value: '52.4% YoY',
    target: '> 50% YoY',
    status: 'On Track',
    change: '+4.8 pts vs Q4',
  },
  {
    id: 'digital',
    value: '61.7%',
    target: '> 60% transactions',
    status: 'On Track',
    change: '+5.2 pts vs FY25',
  },
  {
    id: 'category',
    value: '22.3%',
    target: '> 20% total revenue',
    status: 'On Track',
    change: '+3.1 pts vs plan',
  },
];

export const supportingKpis: SupportingKPI[] = [
  {
    id: 'revenue',
    value: '48.9% YoY',
    target: '45%–55% YoY',
    status: 'On Track',
    change: '+6.1 pts vs LY',
  },
  {
    id: 'margin',
    value: '2.2% / 61.8%',
    target: 'NPM 2.0%–2.5%, GM >60%',
    status: 'Watchlist',
    change: '-0.2 pts vs peak',
  },
  {
    id: 'cashflow',
    value: 'Rp46.5B',
    target: '> Rp40B / quarter',
    status: 'On Track',
    change: '+Rp5.7B vs plan',
  },
];

export const financialTrend: FinancialPoint[] = [
  { month: 'Jan', revenue: 72, profit: 11 },
  { month: 'Feb', revenue: 75, profit: 12 },
  { month: 'Mar', revenue: 79, profit: 13 },
  { month: 'Apr', revenue: 84, profit: 14 },
  { month: 'May', revenue: 88, profit: 15 },
  { month: 'Jun', revenue: 93, profit: 17 },
];

export const digitalMix: DigitalPoint[] = [
  { channel: 'Fore App', share: '38%' },
  { channel: 'Marketplace', share: '24%' },
  { channel: 'Offline POS', share: '38%' },
];

export const categoryMix: CategoryPoint[] = [
  { segment: 'Coffee', contribution: '77.7%' },
  { segment: 'Food & Donut', contribution: '17.1%' },
  { segment: 'Other Non-Coffee', contribution: '5.2%' },
];

export const alerts: AlertItem[] = [
  {
    id: 'promo',
    level: 'High',
    title: 'Protect margin during promo cycles',
    detail: 'Promotional pressure needs tighter control in selected clusters.',
    action: 'Reduce discount depth and push bundles with stronger margin.',
  },
  {
    id: 'surabaya',
    level: 'Medium',
    title: 'Surabaya productivity needs attention',
    detail: 'Productivity is still below expectation ahead of the next rollout phase.',
    action: 'Review local campaign design and improve menu mix execution.',
  },
  {
    id: 'digital',
    level: 'Low',
    title: 'Digital adoption must stay above target',
    detail: 'Digital mix is on track but must stay resilient as outlet count expands.',
    action: 'Maintain app-led incentives and channel conversion programs.',
  },
];


export const kpis: KPI[] = [
  {
    label: 'Net Profit Growth',
    value: '52.4% YoY',
    target: '> 50% YoY',
    status: 'On Track',
    change: '+4.8 pts vs Q4',
    note: 'Primary profit growth KPI.',
  },
  {
    label: 'Digital Sales Penetration Rate',
    value: '61.7%',
    target: '> 60% transactions',
    status: 'On Track',
    change: '+5.2 pts vs FY25',
    note: 'Primary digital KPI.',
  },
  {
    label: 'New Category Revenue Contribution',
    value: '22.3%',
    target: '> 20% total revenue',
    status: 'On Track',
    change: '+3.1 pts vs plan',
    note: 'Primary diversification KPI.',
  },
  {
    label: 'Cash Flow Health',
    value: 'Rp46.5B',
    target: '> Rp40B / quarter',
    status: 'On Track',
    change: '+Rp5.7B vs plan',
    note: 'Supporting liquidity KPI.',
  },
];

export const trends: TrendPoint[] = financialTrend.map((point) => ({
  month: point.month,
  revenue: point.revenue,
  netProfit: point.profit,
  margin: 60,
}));

export const drivers: Driver[] = [
  {
    title: 'App-led Transactions',
    impact: 'Digital Sales Penetration Rate',
    value: '61.7%',
    insight: 'Digital transaction share remains above target.',
  },
  {
    title: 'Food and Donut Mix',
    impact: 'New Category Revenue Contribution',
    value: '22.3%',
    insight: 'Non-coffee contribution now exceeds the strategic threshold.',
  },
  {
    title: 'Margin Discipline',
    impact: 'Net Profit Growth',
    value: '61.8%',
    insight: 'Healthy gross margin supports profit expansion.',
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
