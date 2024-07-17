import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBase from "./pages/PaginaBase"
import Inicio from "./pages/Inicio"
import NuevoVideo from "./pages/NuevoVideo"

function AppRoutes() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="NuevoVideo" element={<NuevoVideo />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes