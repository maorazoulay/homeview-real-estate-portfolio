import DashboardLayout from "@/components/DashboardLayout";
import AssetForm from "@/components/AssetForm";

export default function Settings() {
    return (
        <div className="ml-20">
            <AssetForm />
        </div>

    )
}

Settings.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>{page}</DashboardLayout>
    )
}