import './css/authpages.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EmailAndPassword from './EmailAndPassword';
import Header from './Header';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const LoginPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Card className='auth-card mx-auto mt-5'>
              <Card.Title className='text-center m-3 p-1'>Login</Card.Title>
              <Card.Body className='auth-card-bg'>
                <EmailAndPassword />
                <div className='d-flex justify-content-center'>
                  <Button className='auth-button'>Login</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default LoginPage