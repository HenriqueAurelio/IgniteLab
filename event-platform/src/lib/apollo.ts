import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vi5jdk1ky801ud9msu0ojp/master',
    cache: new InMemoryCache()
})