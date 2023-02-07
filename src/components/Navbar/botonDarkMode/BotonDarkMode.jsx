import React from 'react'
import { useDarkModeContext } from '../../../context/DarkModeContext'

export default function BotonDarkMode() {
    const {toggleDarkMode} = useDarkModeContext()
  return (
    <div className='theme-switch'>BotonDarkMode</div>
  )
}
