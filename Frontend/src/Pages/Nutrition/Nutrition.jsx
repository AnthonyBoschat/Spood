import { darkTheme } from "@Services/AppService"
import "./Nutrition.scss"

export default function Nutrition(){



    return(
        <div className="nutrition-container">
                <div className="module transition action">
                    Action
                </div>

                <div className={`module calendar ${darkTheme()}`}>
                    Calendar
                </div>

                <div className={`module ingredient-list ${darkTheme()}`}>
                    Ingredient List
                </div>

                <div className="module transition recipe-list">
                    Recipe List
                </div>
        </div>
    )
}