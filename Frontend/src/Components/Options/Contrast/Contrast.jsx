import { useDispatch } from "react-redux"
import "./Contrast.scss"
import { switchTheme } from "@Redux/Slices/AppSlice"
import { isDarkTheme } from "@Services/AppService"

export default function Contrast(){

   const dispatch = useDispatch()

    return(
      <i onClick={() => dispatch(switchTheme())} className={`fa-solid fa-circle-half-stroke option theme ${isDarkTheme() ? "darkTheme" : ""}`}></i>
    )
}