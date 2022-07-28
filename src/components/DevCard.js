// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile';


function DevCard({devName, devId, devPic}) {

    return (
      <div className='py-4 container'>
      <div className="row cols-3 justify-content-center">
        <div className="col-11 col md-6 col-lg-3 mx-0 mb-4">
        <div className="card h-100 shadow">
          <img src={devPic} className="card-img-top img-fluid" alt={devName}/>
          <div className="card-body justify-content-center">
            <h4 className="card-title">{devId}</h4>
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

// row-cols-1 row-cols-md-4 g-4 