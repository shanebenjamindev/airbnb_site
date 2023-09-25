import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PageContent() {
    return (
        <div>
            <Outlet />
        </div>
    )
}
