import { useDispatch } from "react-redux"
import { switchTheme } from "@Redux/Slices/AppSlice"
import { darkTheme } from "@Services/AppService"

export default function Contrast(){

   const dispatch = useDispatch()

    return(
      <i onClick={() => dispatch(switchTheme())} className={`fa-solid fa-circle-half-stroke option ${darkTheme()}`}></i>
    )
}