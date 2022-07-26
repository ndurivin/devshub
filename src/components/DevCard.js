import React from 'react'
import { Link } from 'react-router-dom'

function DevCard({devName, devId, devPicture}) {
  return (
      <div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
          <div className="card h-100">
            <img src={devPicture} className="card-img-top" alt={devName}/>
            <div className="card-body">
              <h5 className="card-title">{devName}</h5>
              <Link to={`/dev/` +{devId}} className="btn btn-secondary">View Full Profile</Link>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default DevCard;
