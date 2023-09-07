import { ApolloClient, InMemoryCache } from "@apollo/client";
const defaultOptions = {
	watchQuery:{
		fectchPolicy: 'no-cache',
		errorPolicy: 'ignore'
	},
	query: {
		fectchPolicy: 'no-cache',
		errorPolicy: 'all',
	},
}

const client = new ApolloClient({
	uri: "https://renowned-laughter-d5bbc594f4.strapiapp.com/graphql",
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions
});

export default client;