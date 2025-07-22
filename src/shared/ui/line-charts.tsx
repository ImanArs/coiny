import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface DataPoint {
  label: string;
  value: number;
}

interface SavingsChartProps {
  data: DataPoint[];
}

export const SavingsChart: React.FC<SavingsChartProps> = ({ data }) => {
  return (
    <div className="p-3 rounded-[10px] bg-[#4e4e4e5d]">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
        >
          {/* сетка */}
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          {/* оси */}
          <XAxis
            dataKey="label"
            stroke="#bbb"
            tick={{ fontSize: 14 }}
            padding={{ left: 10, right: 10 }}
          />
          <YAxis
            stroke="#bbb"
            tickFormatter={(val) => `${Math.round(val / 1000)} к`}
            tick={{ fontSize: 14 }}
            width={40}
          />
          {/* тултип */}
          <Tooltip
            formatter={(val: number) => `${val.toLocaleString("ru-RU")} ₽`}
            labelFormatter={() => ""}
            contentStyle={{ backgroundColor: "#333", border: "none" }}
            itemStyle={{ color: "#ff5e11" }}
          />
          {/* линия */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#ff5e11"
            strokeWidth={2}
            dot={{ r: 4, fill: "#ff5e11", strokeWidth: 0 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
