interface VariantData {
  name: string;
  visitors: number;
  conversions: number;
  revenue: number;
}

interface LiveUpdate {
  timestamp: string;
  control: {
    visitors: number;
    conversions: number;
    revenue: number;
  };
  variantB: {
    visitors: number;
    conversions: number;
    revenue: number;
  };
}

interface ExperimentData {
  experimentId: string;
  variants: VariantData[];
  liveUpdates: LiveUpdate[];
}

export type { ExperimentData, LiveUpdate };
