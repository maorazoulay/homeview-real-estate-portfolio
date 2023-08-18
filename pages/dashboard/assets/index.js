import { React } from "react"
import Image from "next/image"
import Link from "next/link"
import DashboardLayout from "@/components/layouts/DashboardLayout"
import { readUserAssets } from "@/db/dbOperations"

export default function Assets({ assets }) {
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

export async function getServerSideProps(){
  // Hardcode userId for now
  const assets = await readUserAssets(1)

  return {
    props: {
      assets: assets
    }
  }
}

Assets.getLayout = function getLayout(page){
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}