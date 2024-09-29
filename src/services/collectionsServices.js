import axios from "axios";

export const ADD_RESOURCE_ROUTE = `http://localhost:5000/collections/add-resource`;

const getAllCollectionsService = async (token) => {
 const response = await axios.get(`http://localhost:5000/collections/get-all?token=${token}`, {
    headers: {
        'Cookie': `token=${token}`
    }
 });

 return response;
}

const getCollectionService = async (collectionId) => {
    const response = await axios.get(`http://localhost:5000/collections/get-all?id=${collectionId}`);

    return response;
}

const addToCollectionService = async (collectionId, resource) => {
    const dateAdded = new Date(Date.now());
    const dateModified = new Date(Date.now());
    const request = {
        collectionId: collectionId,
        dateAdded : dateAdded.toLocaleString(),
        dateModified : dateModified.toLocaleString(),
        ...resource
    }
    console.log(request);
    const response = await axios.patch(ADD_RESOURCE_ROUTE, request, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

const collectionsServices = { getAllCollectionsService, getCollectionService, addToCollectionService };

export default collectionsServices;