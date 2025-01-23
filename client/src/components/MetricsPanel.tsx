import { LiveUpdate } from "../types/experimentDataType";
import { calculateMetrics } from "../utils/helpers";

const MetricsPanel = ({ data }: { data: LiveUpdate[] }) => {
  const metrics = calculateMetrics(data);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Metrics Panel</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Visitors */}
        <div className="p-4 bg-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-600">
            Total Visitors
          </h3>
          <p className="text-2xl font-bold text-gray-800">
            {metrics.totalVisitors}
          </p>
        </div>

        {/* Control Conversion Rate */}
        <div className="p-4 bg-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-600">
            Control Conversion Rate
          </h3>
          <p className="text-2xl font-bold text-green-600">
            {metrics.controlConversionRate}%
          </p>
        </div>

        {/* Variant B Conversion Rate */}
        <div className="p-4 bg-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-600">
            Variant B Conversion Rate
          </h3>
          <p className="text-2xl font-bold text-green-600">
            {metrics.variantBConversionRate}%
          </p>
        </div>

        {/* Control Revenue/Visitor */}
        <div className="p-4 bg-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-600">
            Control Revenue/Visitor
          </h3>
          <p className="text-2xl font-bold text-blue-600">
            ${metrics.controlRevenuePerVisitor}
          </p>
        </div>

        {/* Variant B Revenue/Visitor */}
        <div className="p-4 bg-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-600">
            Variant B Revenue/Visitor
          </h3>
          <p className="text-2xl font-bold text-blue-600">
            ${metrics.variantBRevenuePerVisitor}
          </p>
        </div>

        {/* Average Session Duration */}
        <div className="p-4 bg-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-gray-600">
            Average Session Duration
          </h3>
          <p className="text-2xl font-bold text-purple-600">
            {metrics.averageSessionDuration} min
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;
