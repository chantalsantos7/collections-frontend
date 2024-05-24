import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const EmailAndPassword = () => {

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isInvalidEmail, setInvalidEmail] = useState(false);
  // const [isInvalidPassword, setInvalidPassword] = useState(false);
  
  // //On login page, don't bother with the email checking
  // const handleEmailChange = (e) => {
  //   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   const invalidEmail = !emailRegex.test(e.target.value);
  //       setInvalidEmail(invalidEmail);
  //       if (!isInvalidEmail) setEmail(e.target.value);
  // }

  // const handlePasswordChange = (e) => {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,20}$/;
  //   const isInvalidPassword = !passwordRegex.test(e.target.value);
  //   setInvalidPassword(isInvalidPassword);
  //   if (!isInvalidPassword) setPassword(e.target.value);
  // }

  return (
    <>
      <label htmlFor="" id="email" className='auth-input'>*Email address</label>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder='email@example.com'
          aria-label='Email'
          // onChange={handleEmailChange}
        />
      </InputGroup>

      <label htmlFor="" id="password" className='auth-input'>*Password</label>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder='Password must be 8-20 characters long'
          aria-label='Password'
          // onChange={handlePasswordChange}
        />
      </InputGroup>
    </>
  )
}

export default EmailAndPassword