import Home from "@Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import './App.scss'
import Header from "@Containers/Header/Header";
import Options from "@Components/Options/Options";


export default function App() {

  
  return (
      <>
        <Options/>
        <div className="Content">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </div>
      </>
  )
}

