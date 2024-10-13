import { useSelector } from "react-redux";

export function isDarkTheme(){

    const appTheme = useSelector(store => store.app.theme)
    return !appTheme
}