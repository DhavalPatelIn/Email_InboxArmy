// src/lib/apollo-client.ts
// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
// import fetch from 'cross-fetch'

// const client = new ApolloClient({
//     link: new HttpLink({
//         uri: 'https://staging.project-progress.net/projects/imail/graphql', // replace with your WP site
//         fetch,
//     }),
//     cache: new InMemoryCache(),
// })

// export default client


import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import fetch from 'cross-fetch'

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://staging.project-progress.net/projects/imail/graphql ',
        fetch,
    }),
    cache: new InMemoryCache(),
});