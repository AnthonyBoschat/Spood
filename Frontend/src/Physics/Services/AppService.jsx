import { useSelector } from "react-redux";

export function isDarkTheme(){
    const appTheme = useSelector(store => store.app.theme)
    return !appTheme
}

// Génère la classe darkTheme
export function darkTheme(){
    return isDarkTheme() ? "darkTheme theme" : "theme"
}