import Button from "@Components/Button/Button"
import s from "./Actions_Buttons.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { selectAction } from "@Redux/Slices/NutritionSlice"

export default function Actions_Buttons(){

    const actions = useSelector(store => store.nutrition.actions)
    const actionSelected = useSelector(store => store.nutrition.actionSelected)
    const dispatch = useDispatch()

    const actionsCategory = [
        {
            category:"add",
            actions:[
                {
                    value:"Ajouter un ingrédient",
                    icon:<i className="fa-solid fa-plus"></i>,
                    onClick:() => dispatch(selectAction(1)),
                    selected: actionSelected === 1,
                },
                {
                    value:"Ajouter une recette",
                    icon:<i className="fa-solid fa-plus"></i>,
                    onClick:null,
                },
                {
                    value:"Ajouter un menu",
                    icon:<i className="fa-solid fa-plus"></i>,
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
                    icon:<i className="fa-solid fa-link"></i>,
                    onClick:null,
                },
                {
                    value:"Remplacer un module",
                    icon:<i className="fa-solid fa-pager"></i>,
                    onClick:null,
                },
            ]
        }
    ]

    return(
        <div className={s.container}>
            {actionsCategory.map(category => (
                <div key={category.category} className={s.column}>
                    {category.actions.map(action => (
                        <Button className={action.onClick ? "" : s.disabled} onClick={action.onClick} key={action.value}>
                            {action.icon}
                            <span>
                                {action.value}
                            </span>
                        </Button>
                    ))}
                </div>
            ))}
        </div>
    )
}