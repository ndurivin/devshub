// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile';


function DevCard({devName, devId, devPic}) {

    return (
      <div className='container'>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col">
        <div className="card h-100">
          <img src={devPic} className="card-img-top" alt={devName}/>
          <div className="card-body">
            <h5 className="card-title">{devId}</h5>
            <h5 className="card-title">{devName}</h5>
            <Link to="/profile" element={<Profile/>} className="btn btn-info" >View Full Profile</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
export default DevCard;