import { priceFormatter } from "@/utils/formUtils";
import { Card, Title, AreaChart } from "@tremor/react";

const dummyChartData = [
  {
    date: "Jan 22",
    "Assets Value": 4750000,
    "Equity Value": 830000,
  },
  {
    date: "Feb 22",
    "Assets Value": 4960000,
    "Equity Value": 845000,
  },
  {
    date: "Mar 22",
    "Assets Value": 5230000,
    "Equity Value": 870000,
  },
  {
    date: "Apr 22",
    "Assets Value": 5300000,
    "Equity Value": 995000,
  },
  {
    date: "May 22",
    "Assets Value": 5420000,
    "Equity Value": 1020000,
  },
  {
    date: "Jun 22",
    "Assets Value": 5585000,
    "Equity Value": 1156000,
  },
];


export default function ValueChart({ data }) {
  const chartData = !data.length ? data : dummyChartData

  return (
    <Card className="mt-6">
      <Title>Portfolio value over time (USD)</Title>
      <AreaChart
        className="h-96 mt-7"
        data={chartData}
        index="date"
        categories={["Assets Value", "Equity Value"]}
        colors={["indigo", "cyan"]}
        valueFormatter={priceFormatter}
      />
    </Card>
  );
} 