import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

export const Note = ( { id, text, date, deleteNote }) => {
    
  return (
    <div className="note">
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever className='delete-icon' onClick={() => deleteNote(id)} size="1.3em"/>
        </div>
    </div>
  )
}
