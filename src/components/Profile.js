import React from 'react'
import Devs from './Devs';
import DevCard from './DevCard';
import { Link } from 'react-router-dom';

function Profile({devName, devId, devPic, devStack, devExpertise, devFollows, devFollowing}) {
  return (
    
    <div className='py-4 container'>
      <div className="row cols-3 justify-content-center">
        <div className="col-11 col md-6 col-lg-3 mx-0 mb-4">
        <div className="card h-100 shadow">
          <img src={devPic} className="card-img-top img-fluid" alt={devName}/>
          <div className="card-body justify-content-center">
            <h4 className="card-title">{devId}</h4>
            <h5 className="card-title">{devName}</h5>
            <h5 className="card-title">{devStack}</h5>
            <h5 className="card-title">{devExpertise}</h5>
            <h5 className="card-title">{devFollows}</h5>
            <h5 className="card-title">{devFollowing}</h5>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
