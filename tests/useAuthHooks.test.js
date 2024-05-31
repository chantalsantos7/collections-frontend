
// import authServices from "../src/services/authServices";
// import { useSignup } from "../src/hooks/useAuthHooks";
// import { afterEach, beforeEach, expect, it, vi } from "vitest";

// let signupService;

// beforeEach(() => {
//     // signupService = vi.fn().mockResolvedValue({ message: "Signup successful" });
//     // vi.mock("../src/services/authServices", () => ({
//     //     signupService,
//     // }));
//     //mocks are hoised to top of file, which is why authServices is getting a reference error
//     // vi.mock(authServices, 'signupService', () => Promise.resolve());
//     vi.spyOn(authServices, 'signupService');
// });

// afterEach(() => vi.clearAllMocks());

// describe('UseSignup hook', () => {

//     it("should exist", async () => {
//         // const result = await useSignup({user: "test" });
//         // const result = await useSignup();
//         expect(useSignup).toBeDefined();
//     })

//     //should send request via axios (mock) - testing behaviour, so spy/stub it it
//     it("should send an axios POST request with user credentials", () => {
//         // vi.spyOn(authServices, 'signupService');
//         useSignup({ email: "test@email.com", password: "testpass!234" });
//         expect(authServices.signupService).toHaveBeenCalledWith({ email: "test@email.com", password: "testpass!234" });
//     });

//     // it("should receive a successful response if the signup was successful", () => { //integration testing?
//     //     // vi.mock(authServices, 'signupService', () => Promise.resolve( { message: "Signup successful"}));

//     //     const response = useSignup({ email: "test@email.com", password: "testpass!234" });
//     //     expect(response).toEqual({ message: "Signup successful" });
//     // })

// })