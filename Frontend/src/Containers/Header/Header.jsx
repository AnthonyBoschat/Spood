import { Link, Navigate, useLocation } from "react-router-dom"
import "./Header.scss"
import { darkTheme } from "@Services/AppService"
import { useState } from "react"

export default function Header(){

    const location = useLocation()


    const [links, setLinks] = useState([
        {id:0, name:"Nutrition", selected:false, to:"/Nutrition", comeback:"/"},
        {id:1, name:"Sport", selected:false, to:"/Sport", comeback:"/"},
    ])

    console.log(location)

    return(
        <header className={`${darkTheme()} theme`}>
            <nav>
                {links.map(link => (
                    <Link 
                        key={link.id} 
                        className={`
                            theme
                            ${link.to === location.pathname ? "selected" : "unselected"}
                            ${darkTheme()}`} 
                        to={link.to !== location.pathname ? link.to : link.comeback}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    )
}