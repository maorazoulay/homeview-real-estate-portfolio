export default function MiniModal({ children }) {

    return (
        (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    {children}
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )

    )
}