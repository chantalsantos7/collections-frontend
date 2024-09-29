import '../css/collections.css'
import { Col, Container, Row, Table, Button } from 'react-bootstrap'
import ViewTableRow from './ViewTableRow'
import SearchBar from '../SearchBar'
import TableSortButton from './TableSortButton'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import ResourceModel from '../../utils/Resource.model'
import '../css/collections.css'
import ViewResourcesTable from './ViewResourcesTable'
import { useSearch } from '../../hooks/useSearchHooks'
import { useResource } from '../../hooks/useResourceHooks'

const ViewPage = () => {

  const [collection, setCollection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [resourcesArray, setResourcesArray] = useState([]);
  const { collectionId, setCollectionId } = useResource();
  const { searchBarText, setSearchBarText } = useSearch();

  //resourcesArray is passed by default - not sorted/preserved order of insertion
  //check if the current element contains the SearchBarText


  useEffect(() => {
    setCollection(location.state.collection);
    setCollectionId(location.state.collection._id);

  }, [location.state]);

  const onAddClick = (event) => {
    event.preventDefault();
    navigate('../resource/add', {state: {collectionId: collectionId}});
    //navigate to add Resource page
  }

  useEffect(() => {
    let resourceCount = 1;
    const parseCollectionData = () => {
      setResourcesArray(collection.resources.map(currentResource => {
        //parse date data
        
        const resource = new ResourceModel(currentResource.name, currentResource.category, currentResource.dateAdded, currentResource.dateModified, currentResource.link, currentResource.notes, resourceCount++);
        return resource;
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
            <h1 className='view-heading'>{collection !== null ? collection.name : "Collection Name"}</h1>
          </Col>
          <Col>
            <SearchBar searchState={{ searchBarText, setSearchBarText }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='view-container'>
              <ViewResourcesTable resourcesArray={resourcesArray} searchBarText={searchBarText} />
            </div>

            <Button className='btn-add' onClick={onAddClick}>+</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ViewPage