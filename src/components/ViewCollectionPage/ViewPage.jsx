import '../css/collections.css'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import ViewTableRow from './ViewTableRow'
import SearchBar from '../SearchBar'
import TableSortButton from './TableSortButton'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import ResourceModel from '../../utils/Resource.model'
import '../css/collections.css'
import ViewResourcesTable from './ViewResourcesTable'

const ViewPage = () => {

  const [collection, setCollection] = useState(null);
  const location = useLocation();
  
  const [resourcesArray, setResourcesArray] = useState([]);

  useEffect(() => {
    setCollection(location.state.collection);
  
  }, [location.state]);

  useEffect(() => {
    let resourceCount = 0;
    const parseCollectionData = () => {
      setResourcesArray(collection.resources.map(currentResource => {
        const resource = new ResourceModel(currentResource.name, currentResource.category, currentResource.dateAdded, currentResource.link, currentResource.notes, resourceCount);
        return <ViewTableRow resource={resource} key={resourceCount++} />
      }))
    }
    
    if (collection !== null) {
      parseCollectionData();
    }
    // parseCollectionData();
  }, [collection])

  return (
    <>

      <Container className='my-3'>
        <Row className='my-3'>
          <Col>
            <h1 className='view-heading'>{ collection !== null ? collection.name : "Collection Name" }</h1>
          </Col>
          <Col>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='view-container'>
              <ViewResourcesTable resourcesArray={resourcesArray} />
            </div>

            <Button className='btn-add'>+</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ViewPage