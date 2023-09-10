import DashboardLayout from "@/components/DashboardLayout";
import { readUserAssets } from "@/db/dbOperations"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"

import {
  Grid, Col, Card, Text, Metric,
  Flex, BadgeDelta, Title, DonutChart, Legend
} from "@tremor/react";
import ValueChart from "@/components/ValueChart";

export default function Overview({ data }) {
  console.log(data);
  const { data: session } = useSession()

  if (!session) {
    return <h1>Please sign in!</h1>
  }

  // if (!data.length) {
  //     return <h1>No assets, please create one...</h1>
  // }


  const colors = ["slate", "violet", "indigo", "rose", "cyan", "amber"]
  const legendCategories = data.map(asset => asset.name)

  const breakdownFormatter = (number) => `${number.toString()} Assets`;
  const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;
  const totalPortfolioValue = data.reduce((accumulator, propertyType) => accumulator + propertyType.value, 0)


  return (
    <div>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="w-auto gap-2 p-6">
        <Col>
          <Card className="w-full">
            <Title>Assets Type Breakdown</Title>
            <DonutChart
              className="mt-6"
              data={data}
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
              {valueFormatter(totalPortfolioValue)}
            </Metric>
          </Card>
        </Col>
        <Col>
          <Card className="w-full">
            <Title>Assets Value Breakdown</Title>
            <DonutChart
              className="mt-6"
              data={data}
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
        <ValueChart/>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions)

  const userId = session?.user.id || ""
  const assets = await readUserAssets(userId)
  // Aggregate the data
  const propertyTypes = assets.reduce((accumulator, currentValue) => {
    (accumulator[currentValue.propertyType] =
      accumulator[currentValue.propertyType] || []).push(currentValue)
    return accumulator
  }, {})

  const data = Object.keys(propertyTypes).map(propertyType => {
    const array = propertyTypes[propertyType]
    const totalValue = array.reduce((accumulator, currentValue) =>
      accumulator + currentValue.marketValue, 0)

    return {
      name: propertyType,
      units: array.length,
      value: totalValue
    }
  })

  return {
    props: {
      data: data,
      session: session
    }
  }
}
Overview.getLayout = function getLayout(page) {
  return (
    <DashboardLayout>{page}</DashboardLayout>
  )
}