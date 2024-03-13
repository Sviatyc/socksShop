import { gql } from '@apollo/client'

export const GET_ADMINS = gql`
    query{
        getAdmins{
            login, password, id
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