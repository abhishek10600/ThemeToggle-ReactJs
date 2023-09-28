import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = ()=>{
    const value = localStorage.getItem("theme");
    if(value === "undefined"){
        return "light";
    }
    return value;
}

export const ThemeContextProvider = ({children})=>{
    const [theme,setTheme] = useState(()=>{
        return getFromLocalStorage();
    });
    const toggle = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }
    useEffect(()=>{
        localStorage.setItem("theme", theme);
    },[theme]);
    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}