import Button from "@Components/Button/Button"
import s from "./Options.module.scss"
import { darkTheme } from "@Services/AppService"
import { switchTheme } from "@Redux/Slices/AppSlice"
import { useDispatch } from "react-redux"

export default function Options(){
  const dispatch = useDispatch()

    const options = [
      {
        role:"contrast",
        content:<i className={`fa-solid fa-circle-half-stroke ${s.option} ${darkTheme()}`}></i>,
        onClick: () => dispatch(switchTheme()),
      },
    ]

    return(
        <div className={s.options}>
          {options.map(option => (

            <Button onClick={option.onClick} key={option.role}>
              {option.content}
            </Button>
          ))}
        </div>
    )
}