// import React, { useContext, useState } from 'react'
// import { Form, Button, Container, Row } from 'react-bootstrap'
// import firebase from 'firebase'

// // import { UserContext } from '../App'

// // const Login = () => {
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const { setUser } = useContext(UserContext)

// //   const handleSubmit = () => {
// //     firebase.auth
// //       .sighInWithEmailAndPassword(email, password)
// //       .then((res) => {
// //         const json = JSON.stringify(res.user)
// //         localStorage.setItem('user', json)
// //         setUser(res.user)
// //       })
// //       .catch((err) => console.error(err))
// //   }

//   return (
//     <Container className="login-container">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group as={Row} controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             rules={[
//               {
//                 required: true,
//                 message: 'Please input your email',
//               },
//             ]}
//           />
//           <Form.Text className="text-muted"></Form.Text>
//         </Form.Group>

//         <Form.Group
//           as={Row}
//           controlId="formBasicPassword"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           rules={[
//             {
//               required: true,
//               message: 'Please input your password',
//             },
//           ]}
//         >
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Remember me" />
//         </Form.Group>
//         <Button variant="dark" type="submit" onClick={() => handleSubmit}>
//           Login
//         </Button>
//       </Form>
//     </Container>
//   )
// }
// export default Login
