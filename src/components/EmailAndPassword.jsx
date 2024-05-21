import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const EmailAndPassword = () => {
  return (
    <>
      <label htmlFor="" id="email" className='auth-input'>*Email address</label>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder='email@example.com'
          aria-label='Email'
        />
      </InputGroup>

      <label htmlFor="" id="password" className='auth-input'>*Password</label>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder='Password must be 8-20 characters long'
          aria-label='Password'
        />
      </InputGroup>
    </>
  )
}

export default EmailAndPassword