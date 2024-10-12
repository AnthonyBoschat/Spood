import Home from "@Pages/Home/Home";
import { BrowserRouter as Routes, Route } from "react-router-dom";


export default function App() {

  
  return (
        
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
  )
}

