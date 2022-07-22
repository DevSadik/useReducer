
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from 'react-bootstrap';
import Home from './Components/Home';




function App() {
  return (
    <>
        <Container className='my-5'>
          <Row>
            <Col>
              <Home/>
            </Col>
          </Row>
        </Container>
         
    </>
  );
}

export default App;
