import Link from "next/link"
import { useState } from 'react'
import { navbar } from "@/styles/navbarData";

export default function SidebarNew() {
    const [selectedOption, setSelectedOption] = useState('overview');

    function isSelectedOption(option) {
        return option === selectedOption
    }

    const navbarElements = navbar.map(option =>
        <Link
            key={option.displayName.toLowerCase()}
            href={option.link.href}
            onClick={() => setSelectedOption(option.refName)}
            className={isSelectedOption(option.displayName.toLowerCase()) ?
                option.classesFunc(option.link.class) : option.link.class}
        >
            <svg
                className={option.svg.class}
                xmlns={option.svg.class}
                viewBox={option.svg.viewBox}
                fill={option.svg.fill}
                stroke={option.svg.stroke}>
                <path
                    d={option.path.d}
                    strokeLinecap={option.path.strokeLinecap}
                    strokeLinejoin={option.path.strokeLinejoin}
                    strokeWidth={option.path.strokeWidth}></path>
            </svg>
            <span className={option.span.class}>{option.displayName}</span>
        </Link >
    )

    const logoElement = navbarElements.shift()
    const bottomElement = navbarElements.pop()

    return (
        <div className="sticky top-0 left-0 flex flex-col items-center w-40 md:w-48 h-screen overflow-hidden text-indigo-300 bg-indigo-900 rounded">
            {logoElement}
            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                    {navbarElements}
                </div>
            </div>
            {bottomElement}
        </div>
    )
}