import React from 'react'
import { Row } from 'react-bootstrap';
import CollectionCard from './CollectionCard';

const CollectionsSection = ({ collectionsArray, searchBarText }) => {

    const collectionCards = [];

    collectionsArray.forEach((collection, index) => {
        if (collection.name.toLowerCase().indexOf(searchBarText.toLowerCase()) === -1) return;
        collectionCards.push(<CollectionCard collection={collection} key={index} />);
    });
    return (
        <Row>
            {/*  */}
            {collectionCards.length > 0 ? collectionCards : <div>Error</div>}
            {/* <Button className='btn-add'>+</Button> */}
        </Row>
    )
}

export default CollectionsSection