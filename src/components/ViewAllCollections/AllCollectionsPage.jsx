import React, { useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SearchBar from '../SearchBar';

const AllCollectionsPage = () => {
  //get all collections with the userId saved in cookies as userId

  useEffect(() => {
    //getAllCollectionsService
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>
          </Col>
          <Col>
            <SearchBar>

            </SearchBar>
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>

    </>
  )
}

export default AllCollectionsPage