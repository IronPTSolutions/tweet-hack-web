import React from 'react'
import { WithAuthConsumer } from '../../contexts/AuthContext'

const Navbar = ({ currentUser, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-5 border-bottom border-light">
      <div className="container d-flex align-items-center">
        <div>
          <a className="navbar-brand" href="/">
            <i className="fa fa-twitter"/>
            <strong>teeet</strong>hack
          </a>
        </div>

        {currentUser && (
          <div>
            <button className="btn btn-danger btn-sm" onClick={logout}>
              <i className="fa fa-power-off"/>
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default WithAuthConsumer(Navbar)
