import { limitNumberCharacters, getClassesForSubmitButton, priceFormatter, dateFormatterShort } from "@/utils/formUtils"

export default function EditAssetForm({ title, formData, handleChange, handleSubmit, disabledSubmit, onClose }) {
    console.log('short date', dateFormatterShort(formData.purchaseDate));
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center min-h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                    <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-gray-400">
                        <button
                            className="absolute top-7 right-7 hvr-grow w-10 h-10 grow-0 shrink-0 text-indigo-700 border-2 border-indigo-700 rounded-full outline-none"
                            onClick={onClose}> X
                        </button>
                        <div>
                            <h1 className="text-2xl font-semibold">{title}</h1>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input type="text" id="title" autoComplete="off" name="title" value={formData.title} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Title" maxLength={25} />
                                        <label htmlFor="title" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Property Title</label>
                                    </div>
                                    <div className="relative">
                                        <input type="text" id="address" autoComplete="off" name="address" value={formData.address} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Address" maxLength={60} />
                                        <label htmlFor="address" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Address</label>
                                    </div>
                                    <div className="relative">
                                        <label>
                                            <select id="propertyType" autoComplete="off" name="propertyType" value={formData.propertyType} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600">
                                                <option value={""}>Select Property Type:</option>
                                                <option value={"Single-Family"}>Single-Family</option>
                                                <option value={"Condominium"}>Condominium</option>
                                                <option value={"Townhouse"}>Townhouse</option>
                                                <option value={"Multi-Family"}>Multi-Family</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="date" id="purchaseDate" autoComplete="off" name="purchaseDate" value={dateFormatterShort(formData.purchaseDate)} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" />
                                        <label htmlFor="purchaseDate" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Purchase Date</label>
                                    </div>
                                    <div className="relative">
                                        <input type="text" id="purchasePrice" autoComplete="off" name="purchasePrice" value={priceFormatter(formData.purchasePrice)} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Purchase Price" onInput={limitNumberCharacters} />
                                        <label htmlFor="purchasePrice" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Purchase Price</label>
                                    </div>
                                    <div className="relative">
                                        <input type="text" id="marketValue" autoComplete="off" name="marketValue" value={priceFormatter(formData.marketValue)} onChange={handleChange} className="peer placeholder-transparent h-10 w-full border-b-2 border-indigo-500 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Market Value" onInput={limitNumberCharacters} />
                                        <label htmlFor="marketValue" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm required">Market Value</label>
                                    </div>
                                    <div className="relative">
                                        <button type="submit" className={getClassesForSubmitButton(disabledSubmit)} disabled={disabledSubmit}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}