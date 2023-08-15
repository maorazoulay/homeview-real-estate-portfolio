import { useEffect, useState } from "react"
import DashboardLayout from "@/components/layouts/DashboardLayout"
import { createAsset, getAllAssetsForUser } from "@/apiBridge"

export default function Accounting() {
    const [response, setResponse] = useState({})

    useEffect(() => {
        getAllAssetsForUser(1)
        // createAsset({
        //     userId: 1,
        //     title: "Mondrian",
        //     address: "1100 West Ave",
        //     propertyType: "Condo",
        //     images: ["1100_west.jpg"],
        //     purchasePrice: 600000,
        //     purchaseDate: Date.now(),
        //     marketValue: 720000
        // })
            .then(res => {
                console.log(res)
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