import axios from "axios";

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

const collectionsServices = { getAllCollectionsService, getCollectionService };

export default collectionsServices;