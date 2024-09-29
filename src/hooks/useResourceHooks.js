import { useState } from "react";

export const useResource = () => {
    const [resource, setResource] = useState({});
    const [collectionId, setCollectionId] = useState('');

    return { resource, setResource, collectionId, setCollectionId };
}