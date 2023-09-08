import Modal from "@/components/Modal";

export default function Topbar() {
    return (
        <nav className="fixed z-50 w-full h-12 bg-white shadow dark:bg-gray-800">
            <div className="container flex items-center p-4 justify-start sm:justify-center md:justify-end text-gray-600 capitalize dark:text-gray-300">
                <a href="#" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">filter 1</a>
                <a href="#" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">filter 2</a>
                <Modal className="place-self-end" />
            </div>
        </nav>
    )
}

