import Modal from "@/components/Modal";

export default function Topbar() {
    return (
        <nav className="fixed z-50 w-full h-12 bg-white shadow dark:bg-gray-800">
            <div className="container flex items-center p-4 justify-start sm:justify-center md:justify-end text-gray-600 capitalize dark:text-gray-300">
                <Modal className="place-self-end" />
            </div>
        </nav>
    )
}

