import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../Hook/Switcher";



function Switcher(){
    const [colorTheme, setTheme] = useDarkSide()
    const[darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }
    return (
        <>
        
        <div>
            <DarkModeSwitch
                checked = {darkSide}
                onChange = {toggleDarkMode}
                size = {30}
                style={{textAlign:"center"}}
            />
        </div>
        </>
    )
}
export default Switcher