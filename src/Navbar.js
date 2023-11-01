import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='d-flex justify-content-between bg-secondary-subtle'>
            <div className='ms-5 mt-3 mb-3 fs-5'>
                    <Link to="/">Countries of the World</Link>
                </div>
            <div className='me-5 mt-3 mb-3 fs-5'>
                    <Link to="/About">About</Link>
            </div>
        </nav>
    )
}
