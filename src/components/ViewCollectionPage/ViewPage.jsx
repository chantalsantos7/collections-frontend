import '../css/collections.css'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import ViewTableRow from './ViewTableRow'
import SearchBar from '../SearchBar'
import TableSortButton from './TableSortButton'
import { useEffect } from 'react'

const ViewPage = ( { collectionId }) => {

  let collection;

  useEffect(async () => {
    //load in the data for this page
    //send request for a particular collection, belonging to a user
    
  }, []);
  
  return (
    <>

      <Container className='my-3'>
        <Row className='my-3'>
          <Col>
            <h1>{ collectionName }</h1>
          </Col>
          <Col>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='view-container'>
              <Table striped className='view-table'>
                <thead>
                  <tr className='vt-head'>
                    <th className='vt-head'>Name <TableSortButton /> </th>
                    <th className='vt-head'>Category <TableSortButton /></th>
                    <th className='vt-head'>Date Added <TableSortButton /></th>
                    <th className='vt-head'>Link <TableSortButton /></th>
                    <th className='vt-head'>Notes <TableSortButton /></th>
                  </tr>
                </thead>
                <tbody>
                  <ViewTableRow />

                </tbody>
              </Table>
            </div>

            <Button>+</Button> 
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ViewPage