import Button from "@Components/Button/Button"
import s from "./Actions_Buttons.module.scss"
import { actionsCategory } from "./Actions_List"

export default function Actions_Buttons(){

    return(
        <div className={s.container}>
            {actionsCategory.map(category => (
                <div key={category.category} className={s.column}>
                    {category.actions.map(action => (
                        <Button onClick={action.onClick} key={action.value}>
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