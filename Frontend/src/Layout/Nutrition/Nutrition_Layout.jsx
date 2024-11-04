import { darkTheme } from "@Services/AppService"
import s from "./Nutrition_Layout.module.scss"
import Actions_Buttons from "@Containers/Actions/Buttons/Actions_Buttons"
import Actions_Header from "@Containers/Actions/Header/Actions_Header"
import { useSelector } from "react-redux"
import AddIngredient from "@Containers/Actions/AddIngredient/AddIngredient"
import Ingredient_Header from "@Containers/Ingredients/Header/Ingredient_Header"
import Ingredient_List from "@Containers/Ingredients/List/Ingredient_List"

export default function Nutrition_Layout(){


    const actionSelected = useSelector(store => store.nutrition.actionSelected)

    return(
        <div className={s.container}>

                <div className={`transition ${s.module} ${s.actions}`}>
                    <Actions_Header/>
                    {actionSelected === 0 && (<Actions_Buttons/>)}
                    {actionSelected === 1 && (<AddIngredient/>)}
                </div>

                <div className={`${darkTheme()} ${s.module} ${s.calendar} `}>
                    Calendar
                </div>

                <div className={`${darkTheme()} ${s.module} ${s.ingredient} `}>
                    <Ingredient_Header/>
                    <Ingredient_List/>
                </div>
                <div className={`transition ${s.module} ${s.recipe}`}>
                    Recipe List
                </div>
        </div>
    )
}