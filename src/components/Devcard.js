import React from 'react'
import { Link } from 'react-router-dom'

function Devcard() {
  return (
      <div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="developer-pic"/>
              <div className="card-body">
                <h5 className="card-title">Developer Name</h5>
                <p className="card-text">This is a longer card.</p>
                <Link to="/dev" className="btn btn-primary">View Profile</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="developer-pic"/>
              <div className="card-body">
                <h5 className="card-title">Developer Name</h5>
                <p className="card-text">This is a short card.</p>
                <Link to="/dev" className="btn btn-primary">View Profile</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="developer-pic"/>
              <div className="card-body">
                <h5 className="card-title">Developer Name</h5>
                <p className="card-text">This is a longer card.</p>
                <Link to="/dev" className="btn btn-primary">View Profile</Link>
              </div>
            </div>
          </div>
          <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="developer-pic"/>
            <div className="card-body">
              <h5 className="card-title">Developer Name</h5>
              <p className="card-text">This is a longer card.</p>
              <Link to="/dev" className="btn btn-primary">View Profile</Link>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Devcard;
