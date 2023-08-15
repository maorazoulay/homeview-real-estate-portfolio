import { useEffect, useState } from "react"
import DashboardLayout from "@/components/layouts/DashboardLayout"
import { insertAsset, getAllAssetsForUser } from "@/apiBridge"

export default function Accounting() {
    const [response, setResponse] = useState({})

    useEffect(() => {

        getAllAssetsForUser(1).then(assets => {
            assets.forEach(asset => {
                insertAsset(asset)
                    .then(res => {
                        console.log(res)
                    })
            })
        })
    }, [])

    // console.log(response);

    return (
        <h1>response</h1>
    )
}

Accounting.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}