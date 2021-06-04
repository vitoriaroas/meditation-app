import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

// import { UserContext } from '../App'

function Header() {
  const logOut = () => {
   localStorage.clear()
  }
  // const { user } = useContext(UserContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Mindful Space
        </a>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            {/* {user ? user.uid : 'not logged in'} */}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/">Home</Link>
            </Dropdown.Item>
      
              <Dropdown.Item>
                <Link to="/Login">Login</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="" onClick={logOut}>Logout</Link>
              </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  )
}

export default Header
