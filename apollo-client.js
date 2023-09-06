import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://renowned-laughter-d5bbc594f4.strapiapp.com/graphql",
	cache: new InMemoryCache(),
});

export default client;