import { React } from "react"
import Image from "next/image"
import Link from "next/link"
import DashboardLayout from "@/components/DashboardLayout"
import { readUserAssets } from "@/db/dbOperations"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"
import Topbar from "@/components/Topbar"

export default function Assets({ assets }) {
    const { data: session } = useSession()

    if (!session) {
        return <h1>Please sign in!</h1>
    }

    if (!assets.length) {
        return <h1>No assets, please create one...</h1>
    }

    const assetElements = assets.map(asset => {
        return (
            <Link href={`/dashboard/assets/${asset._id}`}
                className="asset-link hvr-grow sm:max-w-sm max-w-md" key={asset._id}>
                <div className="relative w-full h-2/3">
                    <Image
                        src={asset.images[0]}
                        alt="property image"
                        fill
                        priority
                        className="rounded-xl"
                    />
                </div>
                <div className="w-full h-1/3 asset-info flex flex-col justify-center items-center gap-2 pt-8 pb-8 font-bold">
                    <p>{asset.title}</p>
                    <p>{asset.address}</p>
                    <p>{asset.propertyType}</p>
                </div>
            </Link>
        )
    })

    return (
        <>
            <Topbar />
            <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:pl-8 sm:pr-8 pt-20 gap-x-14 gap-y-10 p-7">
                {assetElements}
            </div>
        </>
    )
}

export async function getServerSideProps({ req, res }) {
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

Assets.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}