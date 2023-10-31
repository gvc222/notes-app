import React, { useState } from 'react'
import { MdDeleteForever, MdEditSquare } from 'react-icons/md';

export const Note = ( { id, text, date, deleteNote, editNote }) => {
  
  const [isEditing, setEditing] = useState(false);
  const [typeText, setTypeText] = useState('');

  function handleChange(e) {
    setTypeText(e.target.value)
  }

  function submitNote() {
    //Removes whitespace and checks if string is not empty so users cannot submit empty notes
    if (typeText.trim().length > 0){
        editNote(id, typeText);
        setTypeText("");  
    }
    setEditing(false);
  }

  const editingTemplate = (
    <form className="note" onSubmit={submitNote}>
        <div className="form-group">
          <label className="edit-label" htmlFor={Note.id}>Editing Note {Note.id}</label>
          <input
          onChange={handleChange}
          cols="28" 
          rows="8" 
          value={typeText} 
          id={Note.id} type="text" />
        </div>
        <div className="note-footer">
            <small>{date}</small>
            <div>
              <button type="button" onClick={() => setEditing(false)}>Cancel</button>
              <button type="save">Save</button>
            </div>
        </div>
    </form>
  )

  const viewTemplate = (
    <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <div>
              <MdDeleteForever className='delete-icon' onClick={() => deleteNote(id)} size="1.3em"/>
              <MdEditSquare className='edit-icon' onClick={() => setEditing(true)} size="1.3em"/>
            </div>
        </div>
    </div>
  )

  return (
    <div className="note">{isEditing ? editingTemplate : viewTemplate}</div>
  )
}
