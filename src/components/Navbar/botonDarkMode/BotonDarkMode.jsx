import './botonDarkMode.css'

//Context
import { useDarkModeContext } from '../../../context/DarkModeContext';

export const BotonDarkMode = () => {
    const {toggleDarkMode} = useDarkModeContext()
    return (
           
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" onInput={() => toggleDarkMode()} />
                    <div className="slider round" />
                </label>
            </div>

    );
}
<<<<<<< HEAD
=======


>>>>>>> 1829a248d1de6090f0989352a6dc4a55923a90a4
