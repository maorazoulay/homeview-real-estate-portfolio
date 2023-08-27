import { Card, Title, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    "Assets Value": 200000,
    "Equity Value": 50000,
  },
  {
    date: "Feb 22",
    "Assets Value": 220000,
    "Equity Value": 53000,
  },
  {
    date: "Mar 22",
    "Assets Value": 250000,
    "Equity Value": 57000,
  },
  {
    date: "Apr 22",
    "Assets Value": 255000,
    "Equity Value": 63000,
  },
  {
    date: "May 22",
    "Assets Value": 272000,
    "Equity Value": 79000,
  },
  {
    date: "Jun 22",
    "Assets Value": 279000,
    "Equity Value": 86000,
  },
];

const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export default function ValueChart() {
    return (
      <Card className="mt-6">
        <Title>Portfolio value over time (USD)</Title>
        <AreaChart
          className="h-96 mt-7"
          data={chartdata}
          index="date"
          categories={["Assets Value", "Equity Value"]}
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
        />
      </Card>
    );
} 