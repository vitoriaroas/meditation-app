import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import firebase from 'firebase'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const user = {
    email: email,
    password: password,
  }

  const createUser = () => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }

  //   fetch('http://localhost:5000/users')
  //     .then((response) => response.json())
  //     .then((data) => (data))
  //     .catch((err) => console.log(err))
  // }


  return (
    <Container className="login-container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={() => createUser()}>
          Sign up
        </Button>
      </Form>
    </Container>
  )
}

export default Signup
