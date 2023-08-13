import { useEffect, useState } from "react"
import DashboardLayout from "@/components/layouts/DashboardLayout"


export default function Accounting(){
    const [response, setResponse] = useState({})

    useEffect(() => {
        fetch('/api/hello')
        .then(response => response.json())
        .then(data => setResponse(data))
    }, [])

    return (
        <h1>{response.name}</h1>
    )
}

Accounting.getLayout = function getLayout(page){
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}