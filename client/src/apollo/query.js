import { gql } from '@apollo/client'

export const GET_ADMINS = gql`
    query{
        getAdmins{
            login, password, id
        }
    }
`
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

export const CREATE_ADMIN = gql`
    mutation createAdmin($input: AdminInput){
        createAdmin(input: $input){
            login, password
        }
    }
`