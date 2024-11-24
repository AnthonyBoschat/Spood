import { gql } from '@apollo/client';

export const GET_ALL_INGREDIENT = gql`
    query{
        allIngredient{
            id
            name
            weight
            calorie
            protein
            lipid
            glucid
        }
    }
`