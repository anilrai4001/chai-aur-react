import { createContext, useContext } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}