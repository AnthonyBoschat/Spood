import { darkTheme } from "@Services/AppService"
import "./Nutrition.scss"

export default function Nutrition(){



    return(
        <div className="nutrition-container">
                <div className="module action">

                </div>

                <div className={`module calendar ${darkTheme()}`}>

                </div>

                <div className={`module ingredient-list ${darkTheme()}`}>

                </div>

                <div className="module recipe-list">

                </div>
        </div>
    )
}