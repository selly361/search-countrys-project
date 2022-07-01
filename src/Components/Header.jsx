import React, { useState } from 'react'
import '../scss/Header.scss'
import { FaSun, FaMoon } from "react-icons/fa";




function Header( { theme, setTheme }  ) {

    

    return (
        <header className={theme ? 'Header-Container Header-darkmode' : 'Header-Container'}>
            <h1 className='Header'>Search for any country anywhere in the world</h1>
            <div className="themeToggler">
                {theme ? 
                <div className="theme" onClick={() => {setTheme(prev => !prev); localStorage.setItem('theme', true)}} >
                    <FaMoon /> Light Mode
                </div>
                
                :
                <div className="theme" onClick={() => {setTheme(prev => !prev); localStorage.setItem('theme', false)}}>
                    <FaSun /> Dark Mode
                </div>
            }
            </div>
        </header>
    )
}

export default Header
