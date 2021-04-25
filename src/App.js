import './App.css';
import { useState, useEffect } from 'react'
import { db } from './firebase'
import SideBar from './sidebar/Sidebar'
import Editor from './editor/Editor'

function App() {

  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [notes, setNotes] = useState([]);
  const [noteUpdate, setNoteUpdate] = useState([]);

  useEffect(() => {
    db.collection('notes').onSnapshot(snapshot => {
      const notes = snapshot.docs.map(doc => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      console.log(notes)
      setNotes(notes)
      // console.log(setNotes)
    })

  }, [setNotes])

  function selectedNote(note, index) {
    console.log(`selected note is ${note.title} with index ${index} from app.js`);
    let selectnote = note;
    console.log(`${selectnote} from app.js`)
    setSelectedTitle(note);
    // console.log(selectedTitle)
  }

  function noteUpdated(id, text) {
    console.log(text)
    db.collection('notes').doc(id).update({
      body: text
    })
  }

  return (
    <div className="App">
      <div className="sideBar">
        <SideBar selectedNoteIndex={selectedNoteIndex} notes={notes} selectedNote={selectedNote} />
      </div>
      <div className="editor">
        {
          selectedTitle ? <Editor selectedTitle={selectedTitle} noteUpdated={noteUpdated} /> : <h4>Select any note to display</h4>
        }

      </div>
    </div>
  );
}

export default App;
