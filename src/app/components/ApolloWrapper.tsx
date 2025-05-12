
//'use client';

// import { ApolloProvider } from '@apollo/client';
// import client from '../lib/apollo-client';


// export function ApolloWrapper({ children }: { children: React.ReactNode }) {
//     return <ApolloProvider client={client}>{children}</ApolloProvider>;
// }


// Working code

// import { ApolloProvider } from '@apollo/client';
// import { client } from '../lib/apollo-client'; // ✅ Correctly import named export

// export function ApolloWrapper({ children }: { children: React.ReactNode }) {
//     return <ApolloProvider client={client}>{children}</ApolloProvider>;
// }

// Working code



import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({

    uri: 'https://staging.project-progress.net/projects/imail/graphql ',
    cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}