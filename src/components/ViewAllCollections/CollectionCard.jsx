import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CollectionCard = ({ collection }) => {
  return (
    <>
    <Col>
       <Card className='collection-card'>
          <Card.Title><Link to={{
            pathname: '/collections/view',
            }}
            state={{ collection: collection }}
            >{ collection.name }</Link> </Card.Title>
          </Card>  
    </Col> 
    </>
  )
}

export default CollectionCard