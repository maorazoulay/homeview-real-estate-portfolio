import { React, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { getAllAssetsForUser } from "@/apiBridge"
import DashboardLayout from "@/components/layouts/DashboardLayout"

export default function Assets() {
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadAssets(userId){
      setLoading(true)
      try{
        const { data } = await getAllAssetsForUser(userId)
        setAssets(data)
      } catch(error){
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    // Hardcode userId for now
    loadAssets(1)
  }, [])

  // get assets from miragejs server
  // map and display them here
  const assetElements = assets.map(asset => {
    return (
      <Link href={`/dashboard/assets/${asset._id}`} 
      className="cursor-pointer hvr-grow asset-item gap-2" key={asset._id}>
        <Image
          src={asset.images[0]}
          alt="property image"
          // fill
          width={400}
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

Assets.getLayout = function getLayout(page){
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}