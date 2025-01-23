import React, { useState } from "react";
import { LiveUpdate } from "../types/experimentDataType";

interface Log {
  timestamp: string;
  type: "Visitor" | "Conversion" | "Revenue";
  message: string;
}

const EventLogPanel = ({ data }: { data: LiveUpdate[] }) => {
  const [filter, setFilter] = useState<string>("All");

  // Transform raw data into log messages
  const mockLogs: Log[] =
    data?.length > 0
      ? data.flatMap((entry) => [
          {
            timestamp: entry.timestamp,
            type: "Visitor",
            message: `Control received ${entry.control.visitors} visitors.`,
          },
          {
            timestamp: entry.timestamp,
            type: "Visitor",
            message: `Variant B received ${entry.variantB.visitors} visitors.`,
          },
          {
            timestamp: entry.timestamp,
            type: "Conversion",
            message: `Control had ${entry.control.conversions} conversions.`,
          },
          {
            timestamp: entry.timestamp,
            type: "Conversion",
            message: `Variant B had ${entry.variantB.conversions} conversions.`,
          },
          {
            timestamp: entry.timestamp,
            type: "Revenue",
            message: `Control earned $${entry.control.revenue} revenue.`,
          },
          {
            timestamp: entry.timestamp,
            type: "Revenue",
            message: `Variant B earned $${entry.variantB.revenue} revenue.`,
          },
        ])
      : [];

  const filteredLogs =
    filter === "All" ? mockLogs : mockLogs.filter((log) => log.type === filter);

  return (
    <div className="h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Section Header */}
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Event Log Panel
        </h3>

        {/* Filter Options */}
        <div className="flex items-center space-x-4 mb-6">
          <label className="text-gray-700 font-semibold">Filter By:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All</option>
            <option value="Visitor">Visitor</option>
            <option value="Conversion">Conversion</option>
            <option value="Revenue">Revenue</option>
          </select>
        </div>

        {/* Event Logs */}
        <div className="space-y-4 overflow-y-auto h-screen">
          {filteredLogs.length > 0 ? (
            filteredLogs.map((log, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {new Date(log.timestamp).toLocaleString()}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                      log.type === "Visitor"
                        ? "bg-blue-100 text-blue-700"
                        : log.type === "Conversion"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {log.type}
                  </span>
                </div>
                <p className="mt-2 text-gray-800">{log.message}</p>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              No logs available for the selected filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventLogPanel;
