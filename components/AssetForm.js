import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function AssetForm() {
    return (
        <Card color="transparent" shadow={true}>
            {/* <Typography variant="h4" color="indigo">
                Add New Asset
            </Typography> */}
            <Typography color="gray" className="mt-1 font-bold">
                Enter the details of the new asset.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <Typography variant="lead" color="indigo">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" placeholder="Property Title"/>
                        <Input size="lg" placeholder="Address" />
                        <Input size="lg" placeholder="Property Type" />
                        <Input size="lg" placeholder="Purchase Price" />
                        <Input size="lg" placeholder="Purchase Date" type="date"/>
                        <Input size="lg" placeholder="Market Value" />
                        <Input type="file" multiple="multiple" size="lg" placeholder="images" />
                    </div>

                </Typography>

                <Button className="mt-6 bg-indigo-700" fullWidth>
                    Add Asset
                </Button>
            </form>
        </Card>
    );
}