import { React } from "react"
import Image from "next/image"
import Link from "next/link"
import DashboardLayout from "@/components/layouts/DashboardLayout"
import { readUserAssets } from "@/db/dbOperations"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"

export default function Assets({ assets }) {
  const { data: session } = useSession()
  console.log(session);
  if(!session){
    return <h1>Please sign in!</h1>
  }

  if(!assets.length){
    return <h1>No assets, please create one...</h1>
  }

  const assetElements = assets.map(asset => {
    return (
      <Link href={`/dashboard/assets/${asset._id}`} 
      className="cursor-pointer hvr-grow asset-item gap-2" key={asset._id}>
        <Image
          src={asset.images[0]}
          alt="property image"
          // fill
          width={410}
          height={400}
          priority
        />
        <div className="asset-info">
          <p>{asset.title}</p>
          <p>{asset.address}</p>
          <p>{asset.propertyType}</p>
        </div>
      </Link>
    )
  })

  return (
    <div className="assets">
      {assetElements}
    </div>
  )
}

export async function getServerSideProps({req, res}){
  const session = await getServerSession(req, res, authOptions)

  const userId = session?.user.id || ""
  const assets = await readUserAssets(userId)

  return {
    props: {
      assets: assets,
      session: session
    }
  }
}

Assets.getLayout = function getLayout(page){
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}