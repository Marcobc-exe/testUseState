import { Note } from './Note';
import { useState } from 'react';

const App = (props) => {
  // Validación: if (typeof notes === "undefined" || notes.length === 0) return "No tenemos notas que mostrar"
  const [notes,setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("")
  
  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleClick = (event) => {
    console.log("crear nota")
    const noteToAddToState = {
      id: notes.length +1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log(noteToAddToState)
    setNotes(notes.concat(noteToAddToState))
  }

  return (
    <div className="App">
    <h1>Notes</h1>
      <ol>
        {notes.map(note => <Note key={note.id} {...note} />)}
      </ol>
      <input type='text' placeholder='Escribir aquí' onChange={handleChange} />
      <button onClick={handleClick}>Crear nota</button>
    </div>
  );
}

export default App;
