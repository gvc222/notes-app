import React from 'react'
import { Note } from './Note'
import { NewNote } from './NewNote'

export const Notes = ( { notes, addNote, deleteNote } ) => {
  return (
    <div className="notes">
        {notes.map((note)=> (
            <Note 
                id={note.id} 
                text={note.text} 
                date={note.date}
                deleteNote={deleteNote}
                key={note.id}
            />))
        }

        <NewNote addNote={addNote} />
    </div>
  )
}
