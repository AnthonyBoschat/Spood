import { useQuery } from "@apollo/client"
import s from "./Ingredient_List.module.scss"
import { GET_ALL_INGREDIENT } from "@Query/getAllIngredient"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addIngredient, setIngredients } from "../../../Physics/Redux/Slices/NutritionSlice"


export default function Ingredient_List(){

    const dispatch = useDispatch()
    const ingredients = useSelector(store => store.nutrition.ingredients)

    const {
        loading,
        error,
        data,
    } = useQuery(GET_ALL_INGREDIENT)

    useEffect(() => {
        if(data){
            dispatch(setIngredients(data.allIngredient))
        }
    }, [data])



    return(
        <div className={s.container}>
            {ingredients.map(item => (
                <div onClick={() => console.table(item)} className={s.item} key={item.id}>
                    <span className={s.name}>{item.name},</span> <span className={s.weight}>{parseInt(item.weight)}g</span>
                </div>
            ))}
        </div>
    )
}