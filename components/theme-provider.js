import { createContext, useContext, useState } from 'react';

const darkTheme = {
    textClass: 'text-gray-100',
    backgroundClass: 'bg-gray-900',
    icon: '🌙',
    name: 'dark'
}

const lightTheme = {
    textClass: 'text-gray-900',
    backgroundClass: 'bg-white',
    icon: '☀️',
    name: 'light'
}

const themeContext = createContext(undefined);
const useThemeContext = () => useContext(themeContext);

const ThemeContextProvider = ({children}) => {
    const [themeClasses, setThemeContext] = useState(lightTheme);
    
    const setTheme = (newTheme) => {
        switch (newTheme) {
            case 'light': 
                setThemeContext(lightTheme);
                break;
            case 'dark':
                setThemeContext(darkTheme);
                break;
            default:
                throw new Error('Unsupported theme: ' + newTheme);
        }
    }

    return (
        <themeContext.Provider value={[ themeClasses, setTheme ]}>
            {children}
        </themeContext.Provider>
    )
}

export { useThemeContext, ThemeContextProvider };