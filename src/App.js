import './App.css';
import { useState, useEffect } from 'react'
import { db } from './firebase'
import SideBar from './sidebar/Sidebar'
import Editor from './editor/Editor'

function App() {


  const [notes, setNotes] = useState([]);
  const [selectedQuillBody, setselectedQuillBody] = useState('')
  const [selectedQuillId, setselectedQuillId] = useState('')
  const [selectedQuillTitle, setselectedQuillTitle] = useState('')

  useEffect(() => {
    db.collection('notes').onSnapshot(snapshot => {
      const notes = snapshot.docs.map(doc => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      setNotes(notes)
      console.log(notes)
    })

  }, [setNotes])

  function selectedNote(title, body, id) {
    console.log(`title is ${title} and body is ${body}`);
    setselectedQuillBody(body)
    setselectedQuillTitle(title)
    setselectedQuillId(id)
  }


  return (
    <div className="App">
      <div className="sideBar">
        <SideBar notes={notes} selectedNote={selectedNote} />
      </div>
      <div className="editor">
        <Editor selectedQuillTitle={selectedQuillTitle} selectedQuillBody={selectedQuillBody} selectedQuillId={selectedQuillId} />
      </div>
    </div>
  );
}

export default App;
