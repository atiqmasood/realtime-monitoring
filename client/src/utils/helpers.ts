import { LiveUpdate } from "../types/experimentDataType";

export const calculateMetrics = (liveUpdates: LiveUpdate[]) => {
  if (!liveUpdates || liveUpdates.length === 0) {
    return {
      totalVisitors: 0,
      controlConversionRate: "0.00",
      variantBConversionRate: "0.00",
      controlRevenuePerVisitor: "0.00",
      variantBRevenuePerVisitor: "0.00",
      averageSessionDuration: "0.00",
    };
  }

  // Aggregate values from the liveUpdates array
  let totalControlVisitors = 0;
  let totalVariantBVisitors = 0;
  let totalControlConversions = 0;
  let totalVariantBConversions = 0;
  let totalControlRevenue = 0;
  let totalVariantBRevenue = 0;

  liveUpdates.forEach((update) => {
    totalControlVisitors += update.control.visitors;
    totalVariantBVisitors += update.variantB.visitors;
    totalControlConversions += update.control.conversions;
    totalVariantBConversions += update.variantB.conversions;
    totalControlRevenue += update.control.revenue;
    totalVariantBRevenue += update.variantB.revenue;
  });

  // Total visitors
  const totalVisitors = totalControlVisitors + totalVariantBVisitors;

  // Conversion rate for each variant
  const controlConversionRate =
    (totalControlConversions / totalControlVisitors) * 100;
  const variantBConversionRate =
    (totalVariantBConversions / totalVariantBVisitors) * 100;

  // Revenue per visitor
  const controlRevenuePerVisitor = totalControlRevenue / totalControlVisitors;
  const variantBRevenuePerVisitor =
    totalVariantBRevenue / totalVariantBVisitors;

  // Mock average session duration
  const averageSessionDuration = Math.random() * 5 + 2; // Random value between 2 and 7 minutes

  return {
    totalVisitors,
    controlConversionRate: controlConversionRate.toFixed(2),
    variantBConversionRate: variantBConversionRate.toFixed(2),
    controlRevenuePerVisitor: controlRevenuePerVisitor.toFixed(2),
    variantBRevenuePerVisitor: variantBRevenuePerVisitor.toFixed(2),
    averageSessionDuration: averageSessionDuration.toFixed(2),
  };
};
