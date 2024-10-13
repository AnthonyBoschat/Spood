import Home from "@Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import './App.scss'
import Header from "@Containers/Header/Header";
import Options from "@Components/Options/Options";
import { isDarkTheme } from "@Services/AppService";
import { useSelector } from "react-redux";
import { useEffect } from "react";


export default function App() {

  const theme = useSelector(store => store.app.theme)
  const rootElement = document.getElementById("root");
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if(theme){
      rootElement.classList.remove("darkTheme")
    }else{
      rootElement.classList.add("darkTheme")
    }
  }, [theme])

  
  return (
      <>
        <Options/>
        <div className={`Content ${isDarkTheme() ? "darkTheme" : ""}`}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </div>
      </>
  )
}

