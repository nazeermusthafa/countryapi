import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cards({ cap, con, time, lang, name, code }) {

    const navigate = useNavigate()
    return (
        <div className="card mb-3 border border-primary" style={{width: "18rem"}} onClick={()=> navigate(`/country/${code}`)}>
            <ul className="list-group list-group-flush">
            <li className="list-group-item fw-bold">name : {name}</li>
                <li className="list-group-item">capital : {cap}</li>
                <li className="list-group-item">continents : {con}</li>
                <li className="list-group-item">Time : {time}</li>
                <li className="list-group-item">language : {Object.values(lang).join(",")}</li>
            </ul>
        </div>
    )
}
