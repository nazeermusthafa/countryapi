import React, { useEffect, useState } from 'react'
import Cards from './Cards'

export default function Api() {

    var [country, setCountry] = useState([])
    var [useData, setUsedata] = useState("")
    var [fdata, setFData] = useState([])

    const fetchData = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCountry(data)
            })
    }
     
     const filterArr = country.filter((prod) =>{
        return prod.name.official.toLowerCase().includes(useData)
       })

    useEffect(() => {
        fetchData()
    },[fdata])
    return (
        <div>
            <div>
                <label className="form-label mt-4 ms-5 fs-2" >Search for the country</label>
                <input className="form-control w-75 ms-5 mt-1" onChange={(e) => setUsedata(e.target.value)} 
                placeholder="Entry the Country name" />
                <div className='m-5 d-flex justify-content-around flex-wrap'>
                    {
                       (filterArr.length) ? filterArr.map((val)=>{
                            return(
                                <Cards
                                name = {val.name.official}
                                    cap = {val.capital}
                                    con = {val.continents}
                                    time = {val.timezones}
                                    lang = {(val.languages) ? val.languages : "no languages"}
                                    code = {val.cca3}
                                />
                            )
                        }) : <h1>Data is not found</h1>
                    }
                </div>
            </div>
        </div>

)
}
