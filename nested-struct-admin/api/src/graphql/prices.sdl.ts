export const schema = gql`
  type Price {
    id: Int!
    name: String!
    amount: Float!
    currency: String!
    unit: Unit!
    unitId: Int!
  }

  type Query {
    prices: [Price!]! @requireAuth
    price(id: Int!): Price @requireAuth
  }

  input CreatePriceInput {
    name: String!
    amount: Float!
    currency: String!
    unitId: Int!
  }

  input UpdatePriceInput {
    name: String
    amount: Float
    currency: String
    unitId: Int
  }

  type Mutation {
    createPrice(input: CreatePriceInput!): Price! @requireAuth
    updatePrice(id: Int!, input: UpdatePriceInput!): Price! @requireAuth
    deletePrice(id: Int!): Price! @requireAuth
  }
`
