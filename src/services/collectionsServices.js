import axios from "axios";

const getAllCollectionsService = async (token) => {
 const response = await axios.get(`http://localhost:5000/collections/get-all`, {
    headers: {
        'Cookie': `token=${token}`
    }
 });

 return response;
}

const collectionsServices = { getAllCollectionsService };

export default collectionsServices;