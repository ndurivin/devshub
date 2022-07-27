import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const url = '';

function DevCard({devName, devId, devPicture}) {
  
const [devs, setDevs] = useState([])

const devFetch = () =>{
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    setDevs (data.devs)
  })
}

useEffect(
  devFetch, []
)


  return (
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
          <div className="card h-100">
            <img src={devPicture} className="card-img-top" alt={devName}/>
            <div className="card-body">
              <h5 className="card-title">{devName}</h5>
              <Link to={`/dev/` +{devId}} className="btn btn-info">View Full Profile</Link>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default DevCard;
