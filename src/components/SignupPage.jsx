import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EmailAndPassword from './EmailAndPassword';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import './css/authpages.css';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PasswordField from './PasswordField';

const SignupPage = () => {

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Card className='auth-card mx-auto mt-5'>
              <Card.Title className='text-center m-3 p-1'>Sign Up</Card.Title>
              <Card.Body className='auth-card-bg'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {/* <EmailAndPassword /> */}
                  <label htmlFor="" id="email" className='auth-input'>*Email address</label>
                  <InputGroup className='mb-3'>
                    <Form.Control
                      placeholder='email@example.com'
                      aria-label='Email'
                      {...register("email", {required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}
                    // onChange={handleEmailChange}
                    />
                  </InputGroup>

                  <PasswordField />

                  {/* <label htmlFor="" id="password" className='auth-input'>*Password</label>
                  <InputGroup className='mb-3'>
                    <Form.Control
                      placeholder='Password must be 8-20 characters long'
                      aria-label='Password'
                      {...register("password", {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,20}$/})}
                    // onChange={handlePasswordChange}
                    />
                  </InputGroup>
                  <label htmlFor="" id="confirm-password" className='auth-input'>*Confirm Password</label>
                  <InputGroup className='mb-3'>
                    <Form.Control
                      placeholder='Enter password again'
                      {...register("confirm_password", {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,20}$/})}
                      />
                  </InputGroup> */}
                  <div className='d-flex justify-content-center'>
                    <Button className='auth-button' type='submit'>Create an account</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default SignupPage