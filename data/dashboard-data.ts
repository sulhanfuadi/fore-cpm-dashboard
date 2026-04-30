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
    target: '> 50% YoY',
    status: 'On Track',
    change: '+4.8 pts vs Q4',
    note: 'Didorong ekspansi outlet matang dan efisiensi biaya operasional.',
  },
  {
    label: 'Revenue Growth',
    value: '48.9% YoY',
    target: '45%–55% YoY',
    status: 'On Track',
    change: '+6.1 pts vs last year',
    note: 'Segmen makanan dan bundling meningkatkan basket size.',
  },
  {
    label: 'Net Profit Margin',
    value: '2.2%',
    target: '2.0%–2.5%',
    status: 'Watchlist',
    change: '-0.2 pts vs target peak',
    note: 'Masih sehat, tetapi tekanan promosi perlu dipantau.',
  },
  {
    label: 'Operating Cash Flow',
    value: 'Rp46.5B',
    target: '> Rp40B / quarter',
    status: 'On Track',
    change: '+Rp5.7B vs quarter plan',
    note: 'Likuiditas cukup kuat untuk mendukung pembukaan outlet baru.',
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
    insight: 'Bundling minuman dan makanan memperbesar nilai transaksi rata-rata.',
  },
  {
    title: 'Gross Margin Discipline',
    impact: 'Profitability Margin',
    value: '61.8%',
    insight: 'Kontrol COGS dan mix produk premium menjaga margin tetap kuat.',
  },
  {
    title: 'Store Operating Efficiency',
    impact: 'Net Profit Growth',
    value: '-6.4% OpEx/store',
    insight: 'Skala ekonomi dari outlet mature menurunkan biaya operasional per outlet.',
  },
  {
    title: 'Cash Conversion',
    impact: 'Cash Flow Health',
    value: '27 days',
    insight: 'Perputaran kas lebih cepat menjaga pendanaan ekspansi tetap sehat.',
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
    title: 'Margin promo kuartal ini mulai tertekan',
    level: 'High',
    detail: 'Diskon pada cluster outlet baru menekan margin 0.3 poin di bawah area matang.',
    action: 'Review promo depth dan perkuat bundling high-margin.',
  },
  {
    title: 'Surabaya belum menyamai produktivitas outlet target',
    level: 'Medium',
    detail: 'Revenue growth masih di bawah koridor target CPM untuk wilayah ekspansi tier-1.',
    action: 'Audit jam ramai, mix menu, dan strategi local campaign.',
  },
  {
    title: 'Cash flow tetap aman untuk fase ekspansi berikutnya',
    level: 'Low',
    detail: 'Arus kas operasi masih di atas threshold minimum kuartalan.',
    action: 'Pertahankan disiplin capex dan pembukaan outlet berbasis prioritas kota.',
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
