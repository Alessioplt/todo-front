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

export const SIGNUP = `
    mutation signup($input: SignUpUserInput!) {
    signup(signUpUserInput: $input) {
     email,
     username,
     id
    }
}
    `