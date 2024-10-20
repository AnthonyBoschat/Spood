import { darkTheme } from "@Services/AppService"
import s from "./Nutrition_Layout.module.scss"
import Actions_Buttons from "@Containers/Actions/Actions_Buttons"
import Actions_Header from "@Containers/Actions/Actions_Header"

export default function Nutrition_Layout(){


    return(
        <div className={s.container}>

                <div className={`transition ${s.module} ${s.actions}`}>
                    <Actions_Header/>
                    <Actions_Buttons/>
                </div>

                <div className={`${darkTheme()} ${s.module} ${s.calendar} `}>
                    Calendar
                </div>

                <div className={`${darkTheme()} ${s.module} ${s.ingredient} `}>
                    Ingredient List
                </div>
                <div className={`transition ${s.module} ${s.recipe}`}>
                    Recipe List
                </div>
        </div>
    )
}