import React from 'react'

export const ToggleDarkMode = ( {toggleDarkness} ) => {
    
  return (
    <div className="toggle-button">
        <button className="save toggle-button" onClick={() => toggleDarkness((prevState) => !prevState)}>Dark Mode On/Off</button>
    </div>
  )
}
