import { ApolloClient, InMemoryCache } from '@apollo/client/core';
// import { RestLink } from 'apollo-link-rest';

export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	uri: `${import.meta.env.VITE_API_HOST}/query`,
	// link: new RestLink({
	// 	endpoints: {
	// 		connpass: {
	// 			uri: `${import.meta.env.VITE_API_HOST}/connpass`,
	// 			responseTransformer: async (response) => response.json(),
	// 		},
	// 	},
	// }),
});

export default apolloClient;
