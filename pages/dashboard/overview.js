import DashboardLayout from "@/components/DashboardLayout";


import {
  Grid, Col, Card, Text, Metric,
  Flex, BadgeDelta, Title, DonutChart, Legend
} from "@tremor/react";
import ValueChart from "@/components/ValueChart";

export default function Overview() {
  const assets = [
    {
      name: "Single-Family",
      units: 5,
      value: 500000
    },
    {
      name: "Condo",
      units: 2,
      value: 300000
    },
    {
      name: "Multi-Family",
      units: 1,
      value: 250000
    },
    {
      name: "lot",
      units: 3,
      value: 300000
    },
  ];
  const colors = ["slate", "violet", "indigo", "rose", "cyan", "amber"]
  const legendCategories = assets.map(asset => asset.name)

  const breakdownFormatter = (number) => `${number.toString()} Assets`;
  const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

  return (
    <div>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="w-auto gap-2 p-6">
        <Col>
          <Card className="w-full">
            <Title>Assets Type Breakdown</Title>
            <DonutChart
              className="mt-6"
              data={assets}
              category="units"
              index="name"
              valueFormatter={breakdownFormatter}
              colors={colors}
              variant='donut' />
            <Legend
              className="mt-3 flex justify-center"
              categories={legendCategories}
              colors={colors} />
          </Card>
        </Col>
        <Col>
          <Card className="h-full">
            <Flex justifyContent="between" alignItems="center">
              <Text className="total font-bold">Portfolio value</Text>
              <BadgeDelta deltaType="moderateIncrease" isIncreasePositive={true} size="xs">
                +12.3%
              </BadgeDelta>
            </Flex>
            <Metric className="value text-center text-6xl mt-32">
              $ 1,350,000
            </Metric>
          </Card>
        </Col>
        <Col>
          <Card className="w-full">
            <Title>Assets Value Breakdown</Title>
            <DonutChart
              className="mt-6"
              data={assets}
              category="value"
              index="name"
              valueFormatter={valueFormatter}
              colors={colors}
              variant='pie' />
            <Legend
              className="mt-3 flex justify-center"
              categories={legendCategories}
              colors={colors} />
          </Card>
        </Col>
      </Grid>
      <div className="px-6">
        <ValueChart className='' />
      </div>
    </div>
  );
}

Overview.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}