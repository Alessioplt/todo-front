import axiosInstance from "./Service";
import {GET_ALL} from "./Categories";

export const LOGIN = `
    mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
        user {
            email,
            id
        },
        access_token
    }
}
`

export const login = async (email: string, password:string) => {
    return axiosInstance.post('graphql', {
        query: LOGIN,
        variables: {
            input: {
                email: email,
                password: password,
            },
        },
    });
}

export const SIGNUP = `
    mutation signup($input: SignUpUserInput!) {
    signup(signUpUserInput: $input) {
     email,
     username,
     id
    }
}
    `

export const signup = async (email: string, password:string, username:string) => {
    return axiosInstance.post('graphql', {
        query: SIGNUP,
        variables: {
            input: {
                email: email,
                username: username,
                password: password,
            },
        },
    });
}