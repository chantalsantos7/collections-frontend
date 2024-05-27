import axios from "axios"

const signupService = async (credentials) => {
    const response = await axios.post("http://localhost:5000/auth/signup", credentials, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
}

const authServices = { signupService };

export default authServices;