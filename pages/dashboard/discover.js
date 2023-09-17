import DashboardLayout from "@/components/DashboardLayout";
import DisplayMessage from "@/components/DisplayMessage";

export default function Discover(){
    return <DisplayMessage message={'Coming Soon...'} />
}

Discover.getLayout = function getLayout(page){
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}