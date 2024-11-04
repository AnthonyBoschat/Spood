import Home from "@Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import './App.scss'
import Header from "@Containers/Header/Header";
import Options from "@Containers/Options/Options";
import { useEffect } from "react";
import Nutrition from "@Pages/Nutrition/Nutrition";
import { darkTheme, isDarkTheme } from "@Services/AppService";
import Popup from "@Components/Popup/Popup";


export default function App() {

  const appTheme = isDarkTheme()
  
  useEffect(() => {
    const rootElement = document.getElementById("root");
    if(appTheme){
      rootElement.classList.add("darkTheme")
    }else{
      rootElement.classList.remove("darkTheme")
    }
  }, [appTheme])

  
  return (
      <>
        <Options/>
        <Popup/>
        <div className={`Content ${darkTheme()}`}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Nutrition" element={<Nutrition/>}></Route>
          </Routes>
        </div>
      </>
  )
}

