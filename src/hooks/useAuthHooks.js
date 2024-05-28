import authServices from "../services/authServices";

export const useSignup = async (credentials) => {
    try {
        if (credentials != null) {
            const response = await authServices.signupService(credentials);
            // console.log(response);
            return response;
        }
       
    }
    catch (e) {
        //we'll deal with error responses later
        console.log(e);
    }
}