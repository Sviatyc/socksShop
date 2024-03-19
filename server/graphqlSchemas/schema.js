const { buildSchema } = require('graphql')


 const Socks = buildSchema(`
        type Socks{
            name: String
            price: Float
            size: SocksSize
            currency: SocksPrice
            id: ID
        }

        type SocksSize{
            is36: Boolean
            is37: Boolean
            is38: Boolean
            is39: Boolean
            is40: Boolean
            is41: Boolean
            is42: Boolean
            is43: Boolean
            is44: Boolean
        }

        type SocksPrice{
            EUR: Boolean
            USD: Boolean
            UAN: Boolean
        }

        enum Currency{
            EUR
            USD
            UAN
        }


        input SocksInput{
            name: String!
            price: Float!
            size: SocksSizeInput
            currency: SocksPriceInput
        }

        input SocksSizeInput{
            is36: Boolean
            is37: Boolean
            is38: Boolean
            is39: Boolean
            is40: Boolean
            is41: Boolean
            is42: Boolean
            is43: Boolean
            is44: Boolean
        }

        input SocksPriceInput{
            EUR: Boolean
            USD: Boolean
            UAN: Boolean
        }

        type Query{
            getAllSocks: [Socks]
        }

        type Mutation{
            createSocks(input: SocksInput): Socks
        }
`)


module.exports = Socks