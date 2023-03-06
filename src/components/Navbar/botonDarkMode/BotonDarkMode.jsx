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
<<<<<<< HEAD
}


=======
}
>>>>>>> 46af0d674be9098cd5321e71456156c516bf6eb9
