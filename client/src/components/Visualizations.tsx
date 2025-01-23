import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";

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

const Visualizations = ({ data }: { data: LiveUpdate[] }) => {
  // Prepare data for bar chart
  const aggregateData = data.reduce(
    (acc, update) => {
      acc.controlConversions += update.control.conversions;
      acc.controlRevenue += update.control.revenue;
      acc.variantBConversions += update.variantB.conversions;
      acc.variantBRevenue += update.variantB.revenue;
      return acc;
    },
    {
      controlConversions: 0,
      controlRevenue: 0,
      variantBConversions: 0,
      variantBRevenue: 0,
    }
  );

  const barChartData = [
    {
      name: "Control",
      Conversions: aggregateData.controlConversions,
      Revenue: aggregateData.controlRevenue,
    },
    {
      name: "Variant B",
      Conversions: aggregateData.variantBConversions,
      Revenue: aggregateData.variantBRevenue,
    },
  ];

  // Prepare data for line chart
  const lineChartData = data.map((update) => ({
    timestamp: new Date(update.timestamp).toLocaleTimeString(),
    "Control Conversions": update.control.conversions,
    "Variant B Conversions": update.variantB.conversions,
    "Control Revenue": update.control.revenue,
    "Variant B Revenue": update.variantB.revenue,
  }));

  return (
    <div className="min-h-screen space-y-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Visualizations</h3>

      {/* Bar Chart */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Bar Chart: Variant Performance
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={barChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Conversions" fill="#8884d8" />
            <Bar dataKey="Revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Line Chart: Trends Over Time
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={lineChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Control Conversions"
              stroke="#8884d8"
            />
            <Line
              type="monotone"
              dataKey="Variant B Conversions"
              stroke="#82ca9d"
            />
            <Line type="monotone" dataKey="Control Revenue" stroke="#ffc658" />
            <Line
              type="monotone"
              dataKey="Variant B Revenue"
              stroke="#ff7300"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Visualizations;
