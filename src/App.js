import './App.css';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notes } from './Components/Notes';
import { Search } from './Components/Search';
import { ToggleDarkMode } from './Components/ToggleDarkMode';


const App = (  ) => {
  const [ notes, setNotes ] = useState([
  {
    // add id for deleting notes
    id: nanoid(),
    text: 'This is my first note hehe',
    date: '10/20/2023'
  },
  {
    // add id for deleting notes
    id: nanoid(),
    text: 'This is my second note hehe',
    date: '03/15/2023'
  },
  {
    // add id for deleting notes
    id: nanoid(),
    text: 'This is my third note hehe',
    date: '04/20/2023'
  }
])
  const [ query, setQuery ] = useState("");
  const [ darkMode, setDarkMode ] = useState(false);

// useEffect for storing and enabling loading. Empty array as dependency means it's only going to run on first load.
useEffect(() => {
  // Since saved JSON is stringified, we'll have to parse into JavaScript object
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data'));
  console.log('Saved Notes', savedNotes)
  // Check if we received notes from local storage, so we can set it into state
  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);



//We're going to use useEffect to store our data locally whenever there's any change 
  useEffect(() => {
    // Labels and stringifies data before saving to local storage
    // While inspecting using Dev Tools, click "Application" > "Local Storage" and find that the key is stored as "react-notes-app-data" and the data is the value
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
    console.log('Notes saved to local storage:', notes)
    //dependency array, triggers useEffect whenever there's changes in this array's content(s).
  }, [notes])



// Observe that {addNote} will be passed down to <Notes />, then to <NewNote />. We pass down the props until it gets where it needs. This is called "prop drilling"
// Context API can help clean to avoid a lot of prop drilling for many components
const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    // converts date to whatever format that your local country understands
    date: date.toLocaleDateString()
  }
  setNotes([...notes, newNote]);
}

const deleteNote = (id) => {
  // Filters out the note that matches id, and returns the rest
  // "filter" the notes array, so that each (note) doesn't have the id which matches the id which I just checked (in this case, I clicked a button of a note card labeled by that id)"
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

const editNote = (id, newTypeText) => {
  const date = new Date();
  //map to the note that matches id, save the original note as edit history
  //use form so user can edit text
  const editedNotes = notes.map((note) => {
    if (id === note.id) {
      return {
        ...note, text: newTypeText, date: date.toLocaleDateString()
      }
    }
    return note;
  });
  setNotes(editedNotes);
}

  return (
    // I put the entire App into a dark mode toggle.
    // Checks if (darkMode) is true, then it leaves className as dark-mode, which making background-color black and h1 text white.
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="App">
        <h1 >Boinkie's Notes app</h1>
        <ToggleDarkMode toggleDarkness={setDarkMode}/>
        <Search handleSearch={setQuery}/>
        {/* Takes current notes array, filters to only return all note that includes the (query), which is what we type in the search bar */}
        <Notes notes={notes.filter((note) => note.text.toLowerCase().includes(query))} addNote={addNote} deleteNote={deleteNote} editNote={editNote}/>
      
      </div>
    </div>
    
  )
}

export default App;
