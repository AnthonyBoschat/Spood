import { isDarkTheme } from "@Services/AppService"
import "./Header.scss"

export default function Header(){

    return(
        <header className={`${isDarkTheme() ? "darkTheme" : ""} theme`}>
            <nav>
                <a href="/Nutrition">Nutrition</a>
                <a href="/Sport">Sport</a>
            </nav>
        </header>
    )
}