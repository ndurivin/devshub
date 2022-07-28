import React from 'react'

function Profile() {
  return (

    <div className='py-4 container'>
      <div className='py-4 container'>
      <div className="row cols-3 justify-content-center">
        <div className="col-11 col md-6 col-lg-3 mx-0 mb-4">
        <div className="card h-100 shadow">
        <img src={dev1.image} className="card-img-top img-fluid" alt={dev1.name}/>
          <div className="card-body justify-content-center">
            <h4 className="card-title">ID: {dev1.id}</h4>
            <h5 className="card-title">Name: {dev1.name}</h5>
            <h5 className="card-title">Tech Stack: {dev1.language_id}</h5>
            <h5 className="card-title">Experience: {dev1.experience}</h5>
            <h5 className="card-title">Github Followers: {dev1.followers}</h5>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
