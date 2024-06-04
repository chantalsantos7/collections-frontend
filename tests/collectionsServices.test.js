import collectionsServices from "../src/services/collectionsServices";
import axios from "axios";

vi.mock(`axios`);
const GET_ALL_COLLECTIONS_ROUTE = "http://localhost:5000/collections/get-all";
const COOKIE_HEADER = { "headers": { "Cookie": "token=66549fc9905a49464cec9115"}};


describe('collectionsServices', () => { 
    describe('getAllCollections', () => { 
        it('should send an axios GET request', () => {
            axios.get.mockResolvedValue({ message: "success" });

            collectionsServices.getAllCollectionsService("66549fc9905a49464cec9115");
            expect(axios.get).toHaveBeenCalledWith(GET_ALL_COLLECTIONS_ROUTE, 
                COOKIE_HEADER
            );
        })
     })
 })