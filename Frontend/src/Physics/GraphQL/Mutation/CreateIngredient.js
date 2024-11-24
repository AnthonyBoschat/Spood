import { gql } from '@apollo/client';

export const CreateIngredient = gql`
    mutation CreateIngredient(
        $name: String!
        $weight: Decimal!
        $calorie: Decimal!
        $protein: Decimal!
        $lipid: Decimal!
        $glucid: Decimal!
    ){
        createIngredient(
            name: $name
            weight: $weight
            calorie: $calorie
            protein: $protein
            lipid: $lipid
            glucid: $glucid
        ){
            success
            message
            ingredient{
                name
                weight
                calorie
                protein
                lipid
                glucid
            }
        }
    }
`