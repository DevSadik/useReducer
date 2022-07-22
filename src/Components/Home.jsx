import React from 'react'
import { useReducer } from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import { intialMsg, msgReducer } from '../Reducers/MsgReducer'

function Home() {

    const [ msgState, dispatch ] = useReducer( msgReducer , intialMsg)

  return (
    <>
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            { msgState.error && <Alert variant='danger'>Error</Alert> }
                            <input type="text" value={msgState.name} onChange={ (e) => dispatch({ type : 'DEVS_DATA_LOAD', payload : { name : e.target.value} }) } placeholder='Name' className='form-control'/>
                            <br />
                            <input type="text" value={msgState.age} onChange={ (e) => dispatch({ type : 'DEVS_DATA_LOAD', payload : { age : e.target.value}}) } placeholder='Age' className='form-control'/>
                            <br />
                            <input type="text" value={msgState.skill} onChange={ (e) => dispatch({ type : 'DEVS_DATA_LOAD', payload : { skill : e.target.value}}) } placeholder='Skill' className='form-control'/>
                            <br />
                            <select className='form-control' onChange={ (e) => dispatch({ type : 'LOAD_ALERT' , payload : { error : e.target.value }})}>
                                <option value="start">Start</option>
                                <option selected value="off">Off</option>
                            </select>
                            <hr />
                            <h3>Name : {msgState.name}</h3>
                            <p>Age : {msgState.age}</p>
                            <p>Skill : {msgState.skill}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Home