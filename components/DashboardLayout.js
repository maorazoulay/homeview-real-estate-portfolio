import React from 'react'
import Sidebar from './Sidebar'

function DashboardLayout({ children }){
    return (
        <div className="flex">
            <Sidebar />
            <main className='w-full'>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout