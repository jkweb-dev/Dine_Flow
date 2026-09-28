"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { BarChart3 } from "lucide-react";

const OrderActivity = ({ data }) => {
  const chartData = (data || []).map((item) => ({
    date: new Date(`${item._id}T00:00:00`)
      .toLocaleDateString("en-PK", {
        weekday: "short",
      }),
    orders: item.orders,
  }));

  return (
    <section className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-[0_14px_40px_rgba(88,47,27,0.05)] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
            <BarChart3
              size={20}
              className="text-[#f97316]"
            />
          </div>

          <div>
            <h2 className="text-base font-black text-[#3d2922]">
              Order Activity
            </h2>

            <p className="mt-1 text-xs font-medium text-[#9b867b]">
              Order volume over the last 7 days
            </p>
          </div>
        </div>

        <span className="rounded-full bg-[#fff8f1] px-3 py-1.5 text-[10px] font-black text-[#f97316]">
          7 DAYS
        </span>
      </div>

      <div className="mt-6 h-[280px] w-full">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 10,
                right: 5,
                left: -20,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient
                  id="ordersGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#f97316"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="100%"
                    stopColor="#f97316"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                stroke="#f5e9df"
                strokeDasharray="4 4"
                vertical={false}
              />

              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 11,
                  fill: "#9b867b",
                  fontWeight: 600,
                }}
              />

              <YAxis
                allowDecimals={false}
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 11,
                  fill: "#9b867b",
                  fontWeight: 600,
                }}
              />

              <Tooltip
                cursor={{
                  stroke: "#fed7aa",
                  strokeWidth: 1,
                }}
                contentStyle={{
                  borderRadius: "14px",
                  border: "1px solid #ffedd5",
                  boxShadow:
                    "0 10px 30px rgba(88,47,27,0.08)",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              />

              <Area
                type="monotone"
                dataKey="orders"
                stroke="#f97316"
                strokeWidth={3}
                fill="url(#ordersGradient)"
                activeDot={{
                  r: 5,
                  strokeWidth: 3,
                  stroke: "#fff",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center rounded-2xl bg-[#fffaf6]">
            <p className="text-sm font-semibold text-[#9b867b]">
              No order activity available yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderActivity;