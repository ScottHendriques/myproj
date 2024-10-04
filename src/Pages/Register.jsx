import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    try {
      const res = await fetch('http://localhost:8000/api/users/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password
        })
      });
      
      const data = await res.json();
      console.log(data);
      
      if (data.success) {
        alert('Registration successful!');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  }

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center' style={{ backgroundImage: 'url(https://c8.alamy.com/comp/2G3W1H8/green-hand-written-text-quote-sign-seamless-pattern-illustration-nature-care-lettering-label-background-for-environment-protection-or-eco-friendly-ca-2G3W1H8.jpg)' }}>
      <MDBCard className='m-5' style={{ maxWidth: '600px', backgroundColor: 'rgba(255, 255, 255, 0.92)' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='Name' type='text' name='name' value={user.name} onChange={handleInput} />
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='Email' type='email' name='email' value={user.email} onChange={handleInput} />
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='Password' type='password' name='password' value={user.password} onChange={handleInput} />
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' />

          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>

          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
