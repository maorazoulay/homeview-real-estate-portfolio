import DashboardLayout from "@/components/DashboardLayout";

export default function Settings(){
    return <h1>Settings here...</h1>
}

Settings.getLayout = function getLayout(page){
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}