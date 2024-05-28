import './css/authpages.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../contexts/AuthContext';
import Form from 'react-bootstrap/Form';
import PasswordField from './PasswordField';
import { InputGroup } from 'react-bootstrap';

const LoginPage = () => {

  const { handleLogin } = useAuth();
  // console.log(useAuth);
  const validationSchema = yup.object({
    email: yup.string().required("Email is required").email("email must be a valid email address"),
    password: yup.string().required("Password is required")
  })
  const { handleSubmit, register, formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });

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
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default LoginPage