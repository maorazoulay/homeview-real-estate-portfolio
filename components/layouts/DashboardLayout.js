import React from 'react'
import Link from 'next/link'

function DashboardLayout({ children }){
    const options = ["Overview", "Assets", "Accounting", "Settings"]
    const optionElements = options.map(option => {
      return (<Link href={`/dashboard/${option.toLowerCase()}`} key={option} 
                  className={`hvr-underline-from-right p-4 text-3xl text-white font-sans flex 
                    hover:cursor-pointer
                   font-bold sidebar-option`}>
                  {option}
              </Link>)
    })

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                {optionElements}
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout