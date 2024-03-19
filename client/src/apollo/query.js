import { gql } from '@apollo/client'

export const GET_SOCKS = gql`
    query{
        getAllSocks{
            name, 
            price, 
            size{
                is36,
                is37,
                is38,
                is39,
                is40,
                is41,
                is42,
                is43,
                is44
            },
            currency{
                UAN,
                EUR,
                USD
            },
            id
        }
    }
`
