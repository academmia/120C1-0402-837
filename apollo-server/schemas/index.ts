
import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    
    type  Query {
        category(id: ID!): Category
        product(id: ID!): Product
        products: [Product]
        # getCategories: [Category]
        # getCategory(name: String!): Category!
        # getCategoryById(id: String!): Category!
    }
    
    type  Category {
        id: ID!
        name: String!
        products: [Product]
    }

    type  Product {
        id: ID!
        reference: String!
        description: String
        category: Category
    }
`
