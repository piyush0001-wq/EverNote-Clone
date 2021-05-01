import React from 'react'
import SidebarItems from '../sidebaritems/SidebarItems'
import { useState } from 'react'
import '../sidebar/sidebar.css'
import { db } from '../firebase'

function Sidebar({ notes, selectedNoteIndex, selectedNote }) {
  const [addingNote, setAddingNote] = useState(false)
  const [title, setTitle] = useState('')



  function newNoteBtn() {
    setTitle('')
    setAddingNote(!addingNote)

  }
  function updateTitle(e) {
    setTitle({ title: e })
  }

  function addNewNote() {
    console.log(`${title} added `)
    db.collection('notes').add({
      title: title.title,
      body: '..'
    })
  }



  function deleteNote(note) {
    // console.log(`note deleted is ${note.id}`)
    if (window.confirm(`Did you want to delete this note?`)) {
      // console.log(`Finally deleted ${note.id} `)
      db.collection('notes').doc(note.id).delete();
    }
  }



  if (notes) {
    return (
      <div className="sidebar">
        <button onClick={newNoteBtn}>{addingNote ? " Cancel" : "New Note"}</button>
        {
          addingNote ?
            <div>
              <input type="text" className="newNote_input" placeholder="Enter note title..." onKeyUp={(e) => updateTitle(e.target.value)} />

              <button onClick={addNewNote}>Add</button>

            </div> :
            null
        }
        <hr />

        <div className="notes_list">
          <ul>
            {
              notes.map((note, index, id) => {
                return (
                  <li key={index} >
                    <SidebarItems note={note} id={id} selectNote={selectedNote} deletenote={deleteNote} />

                    <hr />
                  </li>

                )
              })
            }
          </ul>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Sidebar
