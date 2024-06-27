import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ResourceForm from './ResourceForm'

const EditResourcePage = () => {
  return (
    <Container>
      <Row>
        <ResourceForm />
      </Row>
    </Container>
  )
}

export default EditResourcePage