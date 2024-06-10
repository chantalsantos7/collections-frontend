import './css/authpages.css';
import { Button, Card, Form, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../contexts/AuthContext';

import PasswordField from './PasswordField';
import { useState } from 'react';
import { Navigate } from 'react-router';


const LoginPage = () => {

  const { handleLogin } = useAuth();
  const validationSchema = yup.object({
    email: yup.string().required("Email is required").email("email must be a valid email address"),
    password: yup.string().required("Password is required")
  })
  const { handleSubmit, register, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit = async (data, event) => {
    event.preventDefault();
    console.log(data);
    const { email, password } = data;
    const credentials = { email: email, password: password };
    console.log(credentials);
    try {
      //TODO: login service, from authContext
      const response = await handleLogin(credentials);
      console.log(response);
      setLoggedIn(true);
    } catch (error) {
      // window.alert("Could not log on, please try again");
      console.error(error);
    }
  }

  return (
    <>
    { loggedIn && <Navigate to="/collections/all" /> }
      <Container>
        <Row>
          <Col>
            <Card className='auth-card mx-auto mt-5'>
              <Card.Title className='text-center m-3 p-1'>Login</Card.Title>
              <Card.Body className='auth-card-bg'>
                <Form onSubmit={handleSubmit(onSubmit)}>
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
                  <div className='d-flex justify-content-center'>
                    <Button className='auth-button' type='submit'
                    >Login</Button>
                  </div>
                </Form>
                {/* { <p className='login-error'>Cannot log on</p> } */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default LoginPage