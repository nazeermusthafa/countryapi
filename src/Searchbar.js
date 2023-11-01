import React from 'react'

export default function Searchbar() {
    return (
        <div>
            <label className="form-label mt-4 ms-5 fs-2">Search for the country</label>
            <input className="form-control w-75 ms-5 mt-1"  placeholder="Entry the Country name" />
        </div>
    )
}
