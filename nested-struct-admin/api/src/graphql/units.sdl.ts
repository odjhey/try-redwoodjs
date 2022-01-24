export const schema = gql`
  type Unit {
    id: Int!
    name: String!
    desc: String!
    prices: [Price]!
  }

  type Query {
    units: [Unit!]! @requireAuth
    unit(id: Int!): Unit @requireAuth
  }

  input CreateUnitInput {
    name: String!
    desc: String!
  }

  input UpdateUnitInput {
    name: String
    desc: String
  }

  type Mutation {
    createUnit(input: CreateUnitInput!): Unit! @requireAuth
    updateUnit(id: Int!, input: UpdateUnitInput!): Unit! @requireAuth
    deleteUnit(id: Int!): Unit! @requireAuth
  }
`
