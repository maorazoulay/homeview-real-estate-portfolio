import { BsHouseAddFill } from "react-icons/bs";
import Link from "next/link";
import Modal from "@/components/Modal";

export default function Topbar() {
    return (
        <nav class="fixed z-50 w-full h-12 bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center p-4 justify-end text-gray-600 capitalize dark:text-gray-300">
                <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">filter 1</a>
                <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">filter 2</a>
                <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">filter 3</a>
                <Link href={'/'} className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    <BsHouseAddFill />
                </Link>
                <Modal className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"/>

            </div>
        </nav>
    )
}

