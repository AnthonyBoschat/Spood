import Home from "@Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import './App.scss'
import Header from "@Containers/Header/Header";
import Options from "@Components/Options/Options";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Nutrition from "@Pages/Nutrition/Nutrition";
import { isDarkTheme } from "@Services/AppService";


export default function App() {

  const darkTheme = isDarkTheme()
  
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if(darkTheme){
      rootElement.classList.add("darkTheme")
    }else{
      rootElement.classList.remove("darkTheme")
    }
  }, [darkTheme])

  
  return (
      <>
        <Options/>
        <div className={`Content ${darkTheme ? "darkTheme" : ""}`}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Nutrition" element={<Nutrition/>}></Route>
          </Routes>
        </div>
      </>
  )
}

