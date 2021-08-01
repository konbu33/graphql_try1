const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
	type Book {
		title: String
		author: String
	}

	type Query {
		books: [Book]
	}
`
const books = [
	{
		title: "Harry Potter",
		author: "J.J. Rowling"
	},
	{
		title: "Jurassic Park",
		author: "Michael Crishton"
	}
]

const resolvers = {
	Query: {
		books: () => books
	}
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
})

