import DashboardLayout from "@/components/DashboardLayout";

export default function Settings() {
    return (
        <div>
            <h1>Settings here...</h1>
        </div>

    )
}

Settings.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}