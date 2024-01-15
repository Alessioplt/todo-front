import {gql} from "@apollo/client";

export const LOGIN = gql`
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

export const SIGNUP = gql`
    mutation signup($input: SignUpUserInput!) {
    signup(signUpUserInput: $input) {
     email,
     username,
     id
    }
}
    `