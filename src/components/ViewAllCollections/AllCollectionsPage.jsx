import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SearchBar from '../SearchBar';
import collectionsServices from '../../services/collectionsServices';
import { useCookies } from 'react-cookie';
import CollectionCard from './CollectionCard';

const AllCollectionsPage = () => {
  //get all collections with the userId saved in cookies as userId
  const [cookies] = useCookies(['token']);
  const [collectionsArray, setCollectionsArray] = useState([]);
  useEffect(() => {
    
    
    const parseCollectionsData = (collectionsData) => {
      setCollectionsArray(collectionsData.collections.map(currentCollection => {
        return <CollectionCard collection={currentCollection} key={currentCollection._id }/>
      }));
      console.log(collectionsArray)
    }

    const getCollectionsData = async () => {
      
      const collectionsData = (await collectionsServices.getAllCollectionsService(cookies.token)).data;
      parseCollectionsData(collectionsData);
    }

    getCollectionsData();
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
          {collectionsArray.length > 0 ? collectionsArray : <div>Error</div>}
        </Row>
      </Container>

    </>
  )
}

export default AllCollectionsPage