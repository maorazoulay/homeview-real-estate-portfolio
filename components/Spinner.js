import { Spinner as MaterialSpinner } from "@material-tailwind/react";

export default function Spinner(){
    return (
        <div className="flex flex-col justify-center items-center fixed inset-0 z-50">
            <MaterialSpinner className="h-14 w-14 text-white" color="indigo" />
        </div>
    )
}