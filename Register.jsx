// import React, { useState } from 'react'
// import{Form,Button} from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// function Register() {
//     const [values,setValues]=useState({
//         name:"",
//         email:"",
//         password:""
//     })
// const navigate=useNavigate()
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         axios.post('http://localhost:3000/reg',values)
//         .then(res=>{
//             if(res.data.status==="Success"){
//                navigate('/login')
//             }else{
//                 alert("error")
//             }
//         })
//         .then(err=>console.log(err));
//     }
//   return (
//     <div>
//    <h2>Sign up</h2>
//    <Form onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicsName">
//         <Form.Label>name</Form.Label>
//         <Form.Control type="text" placeholder="Enter name" />
//         <Form.Text className="text-muted" onChange={e=>setValues({...values,name:e.target.value})}>
          
          
//         </Form.Text>
        
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>email</Form.Label>
//         <Form.Control type="email" placeholder="email" />
//         <Form.Text className="text-muted" onChange={e=>setValues({...values,email:e.target.value})}>
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>
      
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//         <Form.Text className="text-muted" onChange={e=>setValues({...values,password:e.target.value})}>
//           We'll never share your password with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Sign up
//       </Button>
//       <Link to='/login'>login</Link>
//     </Form>

//     </div>
//   )
// }

// export default Register


import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  // const navigate = useNavigate();

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios.post('http://localhost:4000/reg', values)
  //     .then(res => {
  //       if (res.data.status === "Success") {
  //         navigate('/login');
  //       } else {
  //         alert("Error");
  //       }
  //     })
  //     .catch(err => console.log(err));
  // };

  const navigate= useNavigate()
  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:4000/reg',values)
    .then(res=>{
      if(res.data.status==='success'){
        navigate('/login')
      }
      else{
        alert('error')
      }
    })
    .then (err=>console.log(err))
  }

  return (
    <div>
    <h2>Sign up</h2>
       <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicsName">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            <Form.Text className="text-muted" onChange={e=>setValues({...values,name:e.target.value})}>
              
              
            </Form.Text>
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>email</Form.Label>
            <Form.Control type="email" placeholder="email" />
            <Form.Text className="text-muted" onChange={e=>setValues({...values,email:e.target.value})}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-muted" onChange={e=>setValues({...values,password:e.target.value})}>
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign up
          </Button>
          <Link to='/login'>login</Link>
        </Form>
    
        </div>
      )
    }

export default Register;
