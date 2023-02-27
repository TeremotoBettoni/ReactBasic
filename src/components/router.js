import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import App from "../App";
import Dishes from "./dishes";
import Dish from "./dish";
import Countries from "./countries";
import NotFound from "./notFound"
//import NotFound from "./notFound";


const Router =() =>(
    <BrowserRouter>
        <Routes >
            <Route exact path="/" element={<App />}></Route>
            <Route path="/platillos" element={<Dishes/>}></Route>
            <Route path="/platillo/:name" element={<Dish/>}></Route>
            <Route path="/countries" element={<Countries/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            
        </Routes>
    </BrowserRouter>
);

export default Router;