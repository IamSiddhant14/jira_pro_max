import React , { createContext , useContext , useState } from 'react'; 

const StateContext = createContext();
 
const initialState = {
    chat : false,
    cart : false,
    userProfile : false,
    notification : false
}

export const ContextProvider = ({ children}) => {

    const [ activeMenu , setActiveMenu ] = useState(true);

    const [ isClicked , setIsClicked ] = useState(initialState);// Which component is been clicked
     
    const [ screenSize , setScreenSize ] = useState(undefined)// Determine screen size

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState , [clicked] : true})
    }


    const [currentColor, setCurrentColor] = useState('#03C9D7');

    const [currentMode, setCurrentMode] = useState('Light');

    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
       setCurrentMode(e.target.value);
       localStorage.setItem('themeMode' , e.target.value );
       setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode',color);
        setThemeSettings(false);
    }
 

    return (
         <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
            {children}
         </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);
