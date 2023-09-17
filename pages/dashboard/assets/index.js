import { React } from "react"
import Image from "next/image"
import Link from "next/link"
import DashboardLayout from "@/components/DashboardLayout"
import { readUserAssets } from "@/db/dbOperations"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import Topbar from "@/components/Topbar"
import DisplayMessage from "@/components/DisplayMessage"

export default function Assets({ assets }) {
    const assetElements = assets.map(asset => {
        return (
            <Link href={`/dashboard/assets/${asset._id}`}
                className="asset-link hvr-grow" key={asset._id}>
                <div className="relative w-full h-2/3">
                    <Image
                        src={asset.images[0]}
                        alt="property image"
                        fill
                        priority
                        className="rounded-xl border-b-indigo-950 border-b-2"
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
            {!assets.length ?
                (<DisplayMessage message={'No Assets, Please Add Some...'}/>) :
                (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-7 sm:pl-16 sm:pr-8 pt-20 gap-x-8 gap-y-11">
                    {assetElements}
                </div>)
            }
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    const session = await getServerSession(req, res, authOptions)

    if (!session) {
        return { redirect: { destination: "/auth/signin" } };
    }

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