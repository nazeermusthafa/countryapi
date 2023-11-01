import React, { useEffect, useState }  from 'react'
import { useParams } from 'react-router-dom'

export default function CountryDetails() {

    var [country, setCountry] = useState([])

    const {code} = useParams()
   
    const fetchData = () => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then(res => res.json())
            .then(data => {
                setCountry(data)
                console.log(data)
            })
    }
         useEffect(() => {
        fetchData()
    },[])

    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <h1>Names</h1>
                <table className='table'>
                    <tr>
                        <th>Common</th>
                        <td>{country[0]?.name.common}</td>
                    </tr>
                    <tr>
                        <th>Official</th>
                        <td>{country[0]?.name.common}</td>
                    </tr>
                    <tr>
                        <th>Common (Native)</th>
                        <td>{country[0]?.name.common}</td>
                    </tr>
                    <tr>
                        <th>Official (Native)</th>
                        <td>{country[0]?.name.common}</td>
                    </tr>
                    <tr>
                        <th>Alternative spellings</th>
                        <td>{country[0]?.name.common}</td>
                    </tr>
                    <tr>
                        <td>Transalation</td>
                    </tr>
                </table>
            </div>
            <div className='col-3'>

            </div>
            <div className='col-3'>
                <img src={country[0]?.flags.png} />
            </div>
        </div>
    </div>
  )
}
