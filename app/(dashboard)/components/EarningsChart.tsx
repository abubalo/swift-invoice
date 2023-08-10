"use client";

import React from "react";
import {
  Bar,
  XAxis,
  YAxis,
  Legend,
  BarChart,
  ResponsiveContainer,
} from "recharts";

const EarningsChart = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const minEarnings = 1500;
  const maxEarnings = 10000;

  // Generate data for all months
  const monthlyEarningsData = months.map((month) => ({
    month,
    earnings: Math.floor(Math.random() * (maxEarnings - minEarnings)) + minEarnings,
  }));

  return (
    <ResponsiveContainer width="100%" height={400} className="py-2 border border-gray-700 rounded-md">
      <BarChart data={monthlyEarningsData}>
        <XAxis
          dataKey="month"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Legend />
        <Bar
          dataKey="earnings"
          fill="#8884d8"
          className="bg-transparent hover:bg-transparent"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default EarningsChart;
