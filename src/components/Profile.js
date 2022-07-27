import React from 'react'
import Devs from './Devs';

function Profile({devName, devId, devPic}) {
  return (
    
    <div className='container'>
        <div className="card mb-3" style={{maxWidth: 540 + 'px'}}>
            <div className="row g-0">
                <div className="col-md-4">
              <img src="" className="img-fluid rounded-start" alt=""/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">""</h5>
                    <h5 className="card-title">""</h5>
                    <p className="card-text">{}</p>
                    <p className="card-text"><small className="text-muted">""</small></p>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Profile;
