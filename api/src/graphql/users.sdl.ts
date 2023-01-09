export const schema = gql`
  type User {
    id: String!
    email: String!
    username: String!
    name: String
    nickname: String
    pronouns: String
    active: Boolean!
    admin: Boolean!
    avatar: String
    updatedAt: DateTime!
    createdAt: DateTime!
    memberships: [Membership]
  }

  type Query {
    users(active: Boolean): [User!]! @requireAuth(roles: ["super admin"])
    user(id: String!): User @requireAuth(roles: ["super admin"])
  }

  input CreateUserInput {
    email: String!
    username: String!
    name: String
    nickname: String
    pronouns: String
    active: Boolean!
    admin: Boolean!
    teamIds: [String]
    roleIds: [String]
  }

  input UpdateUserInput {
    email: String
    username: String
    name: String
    nickname: String
    pronouns: String
    active: Boolean
    admin: Boolean
    teamIds: [String]
    roleIds: [String]
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
      @requireAuth(roles: ["super admin"])
    updateUser(id: String!, input: UpdateUserInput!): User!
      @requireAuth(roles: ["super admin"])
    removeUser(id: String!): User! @requireAuth(roles: ["super admin"])
    verifyReset(email: String!): String! @skipAuth
  }
`
