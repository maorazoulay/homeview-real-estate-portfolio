export default function ConfirmationDialog({ message, actionButtonText, actionFunction, closeFunction }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-center min-h-screen overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                <div className="w-3/5 sm:w-2/5 md:1/5 xl:w-1/6 mx-auto">
                    <div className="flex flex-col p-5 rounded-lg shadow-lg bg-white">
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-block p-4 bg-red-50 rounded-full">
                                <svg className="w-12 h-12 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" /></svg>
                            </div>
                            <h2 className="mt-2 font-semibold text-gray-800">{message}</h2>
                        </div>
                        <div className="flex items-center mt-3">
                            <button onClick={closeFunction} className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                                Cancel
                            </button>
                            <button onClick={actionFunction} className="flex-1 px-4 py-2 ml-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md">
                                {actionButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}