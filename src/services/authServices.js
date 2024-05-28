import axios from "axios"

const SIGNUP_ROUTE = "http://localhost:5000/auth/signup";

const signupService = async (credentials) => {
    const response = await axios.post(SIGNUP_ROUTE, credentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // console.log(response);
    return response;
}

const loginService = async (credentials) => {
    const response = await axios.post("http://localhost:5000/auth/login", credentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}

const authServices = { signupService, loginService };

export default authServices;