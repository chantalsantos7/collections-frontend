import React from 'react'
import { Button, Card, Col, Dropdown, DropdownButton, DropdownToggle } from 'react-bootstrap'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CollectionDropdown from './CollectionDropdown'

const CollectionCard = ({ collection }) => {
  return (
    <>
      <Col>
        <Card className='collection-card'>
          <Card.Title className='d-inline-flex justify-content-between'><Link
            to={{
              pathname: '/collections/view',
            }}
            state={{ collection: collection }}
          >{collection.name}
          </Link>
            <CollectionDropdown />
          </Card.Title>
        </Card>
      </Col>
    </>
  )
}

export default CollectionCard