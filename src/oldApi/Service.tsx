import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
});

const publicPath = ['']

const authLink = setContext(async (_, { headers }) => {
    const token = sessionStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

let client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export function updateClient(logged: any) {
    if (logged) {
        client.link = authLink.concat(httpLink)
    }
    else {
        client.link = httpLink
    }
}

export default client;