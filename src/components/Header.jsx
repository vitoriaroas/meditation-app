import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

import { UserContext } from '../App'

function Header() {
  const { user, SignOut } = useContext(UserContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Mindful Space
        </a>
        <Dropdown >
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            {!user ? 'Guest' : user.email || 'Welcome'}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
            {!user ? (
              <Dropdown.Item>
                <Link to="/Login">Login</Link>
              </Dropdown.Item>
            ) : (
              <Dropdown.Item>
                <Link to="/" onClick={() => SignOut()}>
                  Logout
                </Link>
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Header
