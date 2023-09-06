import { useState } from "react";
import { useS3Upload } from "next-s3-upload";

export default function AssetForm() {
    const [formData, setFormData] = useState({
        title: "",
        address: "",
        propertyType: "",
        purchaseDate: "",
        purchasePrice: "",
        marketValue: "",
        images: ""
    })
    // const [uploadedImages, setUploadedImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const { uploadToS3 } = useS3Upload();

    function handleChange({ target }) {
        const { name, value } = target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    async function handleImageChange({ target }) {
        // you get an empty array when user cancels their choice
        const files = Array.from(target.files);
        const newImages = files.length > 0 ? files : ""
        setFormData((prevFormData) => ({ ...prevFormData, images: newImages }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setLoading(true)

        // Upload images to S3 and get the URLs
        let imageUrls = []
        for (let index = 0; index < formData.images.length; index++) {
            const image = formData.images[index];
            const { url } = await uploadToS3(image);

            imageUrls.push(url)
        }
        setFormData((prevFormData) => ({ ...prevFormData, images: imageUrls }))

        const response = await fetch('/api/assets', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        // disable button, Reset the form and give feedback to user that an asset was added

        console.log('New asset inserted', await response.json().data);
    }

    function getClassesForSubmitButton() {
        const baseClasses = 'text-white w-full mt-2 rounded-md px-2 py-1 '
        return disabledSubmit ? baseClasses.concat('bg-indigo-300')
            : baseClasses.concat('bg-indigo-500 hvr-grow')
    }

    // enable submit button when all values are provided
    const shouldDisable = !Object.values(formData).every(item => item)
    if(shouldDisable !== disabledSubmit){
        setDisabledSubmit(shouldDisable)
    }

    return (
        <div className="relative min-h-screen bg-transparent py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Add New Asset</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input type="text" id="title" autoComplete="off" name="title" value={formData.title} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Title" maxLength={25} />
                                        <label htmlFor="title" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Property Title</label>
                                    </div>
                                    <div className="relative">
                                        <input type="text" id="address" autoComplete="off" name="address" value={formData.address} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Address" maxLength={60}/>
                                        <label htmlFor="address" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Address</label>
                                    </div>
                                    <div className="relative">
                                        <label>
                                            <select id="propertyType" autoComplete="off" name="propertyType" value={formData.propertyType} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600">
                                                <option value={""}>Select Property Type:</option>
                                                <option value={"Option 1"}>Option 1</option>
                                                <option value={"Option 2"}>Option 2</option>
                                                <option value={"Option 3"}>Option 3</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="date" id="purchaseDate" autoComplete="off" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label htmlFor="purchaseDate" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Purchase Date</label>
                                    </div>
                                    <div className="relative">
                                        <input type="number" id="purchasePrice" autoComplete="off" name="purchasePrice" value={formData.purchasePrice} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Purchase Price" maxLength={8}/>
                                        <label htmlFor="purchasePrice" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Purchase Price in $</label>
                                    </div>
                                    <div className="relative">
                                        <input type="number" id="marketValue" autoComplete="off" name="marketValue" value={formData.marketValue} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Market Value" maxLength={8}/>
                                        <label htmlFor="marketValue" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Market Value in $</label>
                                    </div>
                                    <div className="relative">
                                        <input type="file" multiple accept="image/*" id="images" autoComplete="off" name="images" onChange={handleImageChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label htmlFor="images" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Images</label>
                                    </div>
                                    <div className="relative">
                                        <button type="submit" className={getClassesForSubmitButton()} disabled={disabledSubmit}>{loading ? "Adding Asset..." : "Submit"}</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}