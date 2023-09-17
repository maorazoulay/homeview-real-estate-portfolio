import DashboardLayout from "@/components/DashboardLayout";
import DisplayMessage from "@/components/DisplayMessage";
export default function Settings() {
    return <DisplayMessage message={'Coming Soon...'} />

}

Settings.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}