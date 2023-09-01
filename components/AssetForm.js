import { useState } from "react";

import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function AssetForm() {
    const [formData, setFormData] = useState({})

    function updateForm(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(values => ({ ...values, [name]: value }))
    }

    async function addNewAsset() {
        const response = await fetch('/api/assets', {
            method: 'POST',
            body: JSON.stringify(formData),
        })

        console.log('New asset inserted', await response.json().data);
    }

    return (
        <Card color="transparent" shadow={true}>
            {/* <Typography variant="h4" color="indigo">
                Add New Asset
            </Typography> */}
            <Typography color="gray" className="mt-1 font-bold">
                Enter the details of the new asset.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <Typography color="indigo">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input type="text" name="title" value={formData.title || ""} onChange={updateForm} size="lg" placeholder="Property Title" />
                        <Input type="text" name="address" value={formData.address || ""} onChange={updateForm} size="lg" placeholder="Address" />
                        <Input type="text" name="propertyType" value={formData.propertyType || ""} onChange={updateForm} size="lg" placeholder="Property Type" />
                        <Input type="number" name="purchasePrice" value={formData.purchasePrice} onChange={updateForm} size="lg" placeholder="Purchase Price" />
                        <Input type="date" name="purchaseDate" value={formData.purchaseDate || Date.now} onChange={updateForm} size="lg" placeholder="Purchase Date" />
                        <Input type="number" name="marketValue" value={formData.marketValue} onChange={updateForm} size="lg" placeholder="Market Value" />
                        <Input type="file" name="images" value={formData.images || []} onChange={updateForm} multiple="multiple" size="lg" placeholder="images" />
                    </div>

                </Typography>

                <Button onClick={addNewAsset} className="mt-6 bg-indigo-700" fullWidth>
                    Add Asset
                </Button>
            </form>
        </Card>
    );
}