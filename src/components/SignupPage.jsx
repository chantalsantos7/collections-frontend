import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import './css/authpages.css';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import PasswordField from './PasswordField';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


const validationSchema = yup.object({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().min(6, 'Password must be at least 6 characters').matches().required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required("Confirm password is required")
})

const SignupPage = () => {

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });


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
                  <label htmlFor="" id="email" className='auth-input'>*Email address</label>
                  <InputGroup className='mb-3'>
                    <Form.Control
                      placeholder='email@example.com'
                      aria-label='Email'
                      // {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
                    // onChange={handleEmailChange}
                    />
                  </InputGroup>
                  <p>{errors.email?.message}</p>

                  <PasswordField name="password" label="*Password" placeholder="Password must be 6-20 characters long" register={register} />
                  <p>{errors.password?.message}</p>
                  <PasswordField name="confirm-password" label="*Confirm Password" placeholder="Enter password again" register={register} />
                  <p>{errors.confirmPassword?.message}</p>
                  
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