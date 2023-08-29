import DashboardLayout from "@/components/DashboardLayout";

export default function Search(){
    return <h1>Search here...</h1>
}

Search.getLayout = function getLayout(page){
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}