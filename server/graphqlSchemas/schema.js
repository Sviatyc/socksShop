const { buildSchema } = require('graphql')


 const Admin = buildSchema(`

        type Admin{
            login: String
            password: String
            id: ID
        }

        input AdminInput{
            login: String!
            password: String!
        }

        type Query{
            getAdmins: [Admin]
        }

        type Mutation{
            createAdmin(input: AdminInput): Admin
        }
`)


module.exports = Admin