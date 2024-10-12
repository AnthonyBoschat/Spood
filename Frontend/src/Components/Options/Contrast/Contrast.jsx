import { useDispatch, useSelector } from "react-redux"
import "./Contrast.scss"
import { switchTheme } from "@Redux/Slices/AppSlice"

export default function Contrast(){

    const appTheme = useSelector(store => store.app.theme)
    const dispatch = useDispatch()

    return(
        <>
          <i onClick={() => dispatch(switchTheme())} class="fa-solid fa-circle-half-stroke option"></i>
        </>
    )
}