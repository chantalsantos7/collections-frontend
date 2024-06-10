import { Button, Card, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import './css/authpages.css';

import PasswordField from './PasswordField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import authServices from '../services/authServices';
import { Navigate } from 'react-router';
import { useState } from 'react';

const validationSchema = yup.object({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().min(6, 'Password must be at least 6 characters').required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required("Confirm password required")
})

const SignupPage = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [signedUp, setSignedUp] = useState(false);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    console.log(data);
    const { email, password, name } = data;
    const credentials = { email: email, password: password, name: name };

    try {
      const response = await authServices.signupService(credentials);
      setSignedUp(true);
      // console.log(response.message);
      // reset();
    } catch (error) {
      console.log("I'm getting the email error");
    }
  };


  return (
    <>
    {signedUp && <Navigate to='/auth/login' />}
      <Container>
        <Row>
          <Col>
            <Card className='auth-card mx-auto mt-5'>
              <Card.Title className='text-center m-3 p-1'>Sign Up</Card.Title>
              <Card.Body className='auth-card-bg'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="" id="name" className='auth-input'>Name (optional)</label>
                  <InputGroup className='mb-3'>
                    <Form.Control
                      placeholder='name'
                      {...register("name")}
                    />
                  </InputGroup>

                  <label htmlFor="" id="email" className='auth-input'>*Email address</label>
                  <InputGroup className='mb-3'>
                    <Form.Control
                      placeholder='email@example.com'
                      aria-label='Email'
                      {...register("email")}
                
                    />
                  </InputGroup>
                  <p className='invalid-input'>{errors.email?.message}</p>

                  <PasswordField name="password" label="*Password" placeholder="Password must be 6-20 characters long" register={register} />
                  <p className='invalid-input'>{errors.password?.message}</p>
                  <PasswordField name='confirmPassword' label="*Confirm Password" placeholder="Enter password again" register={register} />
                  <p className='invalid-input'>{errors.confirmPassword?.message}</p>

                  <div className='d-flex justify-content-center'>
                    <Button className='auth-button' type='submit'

                    >Create an account</Button>

                    {/* <Button type='button'
                      onClick={reset}
                    >Reset</Button> */}
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