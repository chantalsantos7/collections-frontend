import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import SearchBar from '../SearchBar';
import collectionsServices from '../../services/collectionsServices';
import { useCookies } from 'react-cookie';
import CollectionCard from './CollectionCard';
import { useSearch } from '../../hooks/useSearchHooks';
import CollectionsSection from './CollectionsSection';

const AllCollectionsPage = () => {
  //get all collections with the userId saved in cookies as userId
  const [cookies] = useCookies(['token']);
  const [collectionsArray, setCollectionsArray] = useState([]);
  const { searchBarText, setSearchBarText } = useSearch();
  useEffect(() => {
    
    
    const parseCollectionsData = (collectionsData) => {
      setCollectionsArray(collectionsData.collections.map(currentCollection => {
        // collectionCards.push()
        return currentCollection;
      }));
      // console.log(collectionsArray)
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
        <Row className='mt-3'>
          <Col>
          <h1>Your Collections</h1>
          </Col>
          <Col>
            <SearchBar searchState={{searchBarText, setSearchBarText}}>

            </SearchBar>
          </Col>
        </Row>
       <CollectionsSection collectionsArray={collectionsArray} searchBarText={searchBarText} />
        <Row>
        {/* <Button className='btn-add'>+</Button> */}
        </Row>
      </Container>

    </>
  )
}

export default AllCollectionsPage