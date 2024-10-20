import { darkTheme } from "@Services/AppService"
import "./Nutrition.scss"

export default function Nutrition(){

    const actionsCategory = [
        {
            category:"add",
            actions:[
                {
                    value:"Ajouter un ingrédient",
                    icon:<i class="fa-solid fa-plus"></i>,
                    onClick:null,
                },
                {
                    value:"Ajouter une recette",
                    icon:<i class="fa-solid fa-plus"></i>,
                    onClick:null,
                },
                {
                    value:"Ajouter un menu",
                    icon:<i class="fa-solid fa-plus"></i>,
                    onClick:null,
                },
            ]
        },
        {
            category:"open",
            actions:[
                {
                    value:"Ouvrir le calendrier",
                    icon:<i className="fa-solid fa-arrow-up-right-from-square"></i>,
                    onClick:null,
                }
            ]
        },
        {
            category:"special",
            actions:[
                {
                    value:"Associer à un programme sportif",
                    icon:<i class="fa-solid fa-link"></i>,
                    onClick:null,
                },
                {
                    value:"Remplacer un module",
                    icon:<i class="fa-solid fa-pager"></i>,
                    onClick:null,
                },
            ]
        }
    ]


    return(
        <div className="nutrition-container">

                <div className="module transition actions">
                    <div className="header">
                        <button>Actions</button>
                        <i className="fa-solid fa-ellipsis-vertical option"></i>
                    </div>
                    <div className="action-container">
                        {actionsCategory.map(category => (
                            <div className="category">
                                {category.actions.map(action => (
                                    <div className="action">
                                    <button>    
                                        {action.icon}
                                        <span onClick={action.onClick}>
                                            {action.value}
                                        </span>
                                    </button>
                                </div>
                                ))}
                            </div>
                        ))}
                    </div>
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