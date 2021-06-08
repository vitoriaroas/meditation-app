import React, { useState, useContext } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import firebase from 'firebase'
import { useHistory, Link } from 'react-router-dom'
import { UserContext } from '../App'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, setUser } = useContext(UserContext)
  let history = useHistory()
  console.log(user)


  const handleSubmit = (event) => {
    event.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const json = JSON.stringify(res.user.uid)
        localStorage.setItem('user', json)
        console.log('user in login', res.user)
        setUser(res.user.uid)
        history.push('/')
      })
      .catch((err) => console.error(err))
  }

  return (
    <Container className="login-container">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group as={Row} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            rules={[
              {
                required: true,
                message: 'Please input your email',
              },
            ]}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group
          as={Row}
          controlId="formBasicPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
          ]}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={(e) => handleSubmit(e)}>
          Login
        </Button>
        <Link to="/Signup">
          <Button className='btn' variant="dark" type="submit">
            Sign-up
          </Button>
        </Link>
      </Form>
    </Container>
  )
}
export default Login
