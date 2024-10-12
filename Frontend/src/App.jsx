import Home from "@Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import './App.scss'
import Header from "@Containers/Header/Header";


export default function App() {

  
  return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </>
  )
}

