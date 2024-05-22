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

const SignupPage = () => {

  

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Card className='auth-card mx-auto mt-5'>
              <Card.Title className='text-center m-3 p-1'>Sign Up</Card.Title>
              <Card.Body className='auth-card-bg'>
                <EmailAndPassword />
                <label htmlFor="" id="confirm-password" className='auth-input'>*Confirm Password</label>
                <InputGroup className='mb-3'>
                  <Form.Control
                    placeholder='Enter password again' />
                </InputGroup>
                <div className='d-flex justify-content-center'>
                  <Button className='auth-button'>Create an account</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default SignupPage