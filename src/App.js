import React, {createContext } from "react";
import {Routes, Route } from 'react-router-dom';


 
import HomePage from "./pages/homepage/HomePage";
import ScrollToTop from "./components/util/ScrollToTop";


export const UserContext = createContext({});
export const CartContext = createContext({});

const App = () => {
    return(
        <ScrollToTop>

                    <Routes>
                        <Route path="/" element={<HomePage />} />   
                    </Routes> 
                
        </ScrollToTop>
    )
}

export default App;