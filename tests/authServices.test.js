import authServices from "../src/services/authServices";
import axios from "axios";

vi.mock(`axios`);
const SIGNUP_ROUTE = "http://localhost:5000/auth/signup";
const LOGIN_ROUTE = "http://localhost:5000/auth/login";
const HEADER_TYPE = {
    "headers": {
        "Content-Type": "application/json",
    },
};
const VALID_CREDENTIALS = { email: "test@email.com", password: "testpass!234" };

describe('signupService', () => {
    beforeEach(() => {
        // const mockPos   t = vi.fn().
        //TODO: Mock axios post
        axios.post.mockResolvedValue({
            data: {
                message: "Signup successful"
            },
            status: 201,
        });
    });

    afterEach(() => vi.clearAllMocks());


    it("should send an axios POST request with user credentials", () => {
        authServices.signupService({ email: "test@email.com", password: "testpass!234" });
        expect(axios.post).toHaveBeenCalledWith(
            SIGNUP_ROUTE,
           VALID_CREDENTIALS,
            HEADER_TYPE
        );
        // expect(axios.post).toHaveBeenCalledWith({ email: "test@email.com", password: "testpass!234" });
    });

    it("Should receive a successful response back to valid signup", async () => {

        const response = await authServices.signupService({ email: "test@email.com", password: "testpass!234" });
        expect(response).toStrictEqual({
            status: 201,
            data: {
                message: "Signup successful"
            }
        })
        // expect(response.status).toBe(201);
        // expect(response.data.message).toBe("Signup successful");

    })
})

describe('loginService', () => {
    it("should send a POST request", () => {
        authServices.loginService( { email: "test@email.com", password: "testpass!234" });
        expect(axios.post).toHaveBeenCalledWith(
            LOGIN_ROUTE,
            VALID_CREDENTIALS,
            HEADER_TYPE,
        );
    })
})