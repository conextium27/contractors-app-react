import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://best-birds-5c1a4927fc.strapiapp.com/graphql",
	cache: new InMemoryCache(),
});

export default client;