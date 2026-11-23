import Login from "./pages/Login";
import Animals from "./pages/Animals";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AnimalRegistration from "./pages/AnimalRegistration";
export default function App(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/homePage" element={<HomePage/>}/>
            <Route path="/animais" element={<Animals />} />
            <Route path="/animais/registration" element={<AnimalRegistration/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
