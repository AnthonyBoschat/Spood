import { darkTheme } from "@Services/AppService"
import "./Popup.scss"
import { useDispatch, useSelector } from "react-redux"
import { clearPopup } from "@Redux/Slices/PopupSlice"

export default function Popup(){

    const dispatch = useDispatch()
    const {active, message, success} = useSelector(store => store.popup)
    setTimeout(() => {
        dispatch(clearPopup())
    }, 3300);

    return(
        <div
            className={`
                container 
                ${darkTheme()} 
                ${active ? "animationClass_popup_apparition" : ""}
                ${success ? "success" : "error"}`}
        >
            {success 
                ? (<i className="fa-solid fa-circle-check success transition"></i>)
                : (<i class="fa-solid fa-circle-xmark transition error"></i>)
            }
            <span>
                {message}
            </span>
        </div>
    )
}