import React, { useState } from 'react'


export const NewNote = ( { addNote } ) => {
    
    const [ typeText, setTypeText ] = useState("");
    const characterLimit = 200;
    const submitNote = () => {
        //Removes whitespace and checks if string is not empty so users cannot submit empty notes
        if (typeText.trim().length > 0){
            addNote(typeText);
            setTypeText("");  
        }
    }
    
    const handleChange = (e) => {
        // Make sure text doesn't exceed characterLimit
        if (characterLimit - e.target.value.length >= 0) {
            setTypeText(e.target.value);
        }
    }

    
  return (
    <div className="new note">
            <textarea 
            onChange={handleChange}
            cols="28" 
            rows="8" 
            value={typeText} 
            placeholder='Type to add a note...'>
            </textarea>

            <div className="note-footer">
                <small>{characterLimit - typeText.length} characters remaining</small>
                <button className="save" onClick={submitNote}>Save</button>
            </div>
    </div>
  )
}
