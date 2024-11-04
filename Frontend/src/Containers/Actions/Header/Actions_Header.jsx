import { useDispatch, useSelector } from "react-redux"
import s from "./Actions_Header.module.scss"
import { selectAction } from "@Redux/Slices/NutritionSlice"

export default function Actions_Header(){

    const actionSelected = useSelector(store => store.nutrition.actionSelected)
    const actions = useSelector(store => store.nutrition.actions)
    const dispatch = useDispatch()

    const showCurrentAction = () => {
        return actionSelected === 0 ? null :  <>
         <span>{` / `}</span>
         <span>{actions[actionSelected]}</span>
        </>
    }

    return(
        <div className={s.header}>
            <button>
                <span onClick={actionSelected !== 0 ? () => dispatch(selectAction(0)) : null}>
                    Actions
                </span> 
                {showCurrentAction()}
            </button>
            <i className={`fa-solid fa-ellipsis-vertical ${s.option}`}></i>
        </div>
    )
}