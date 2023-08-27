import React from 'react'
import Sidebar from './Sidebar'

function DashboardLayout({ children }){
    return (
        <div className="flex">
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout