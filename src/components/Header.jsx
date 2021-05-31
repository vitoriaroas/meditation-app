import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Mindful Space
        </a>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
            <>
              <Dropdown.Item>
                <Link to="/Login">Login</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/Signup">Sign Up</Link>
              </Dropdown.Item>
            </>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Header
