import '../css/collections.css'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import ViewTableRow from './ViewTableRow'
import SearchBar from './SearchBar'
import TableSortButton from './TableSortButton'

const ViewPage = () => {


  
  return (
    <>

      <Container className='my-3'>
        <Row className='my-3'>
          <Col>
            <h1>Collection Name</h1>
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
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ViewPage