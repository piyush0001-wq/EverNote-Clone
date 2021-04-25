import React from 'react'
import '../sidebaritems/sidebaritems.css'
import { removeHTMLTags } from '../helpers'
import { db } from '../firebase'

function SidebarItems({ note,
  index, id,
  selectedNoteIndex,
  selectNote,
  deletenote }) {


  return (
    <div className="items">
      <div key={index} className="note_item" onClick={() => selectNote(note, index)}>
        <h3>{note.title}</h3>
        {
          note.body ? <p>{removeHTMLTags(note.body.substring(0, 30) + '......')}</p> : null
        }
        {/* <p>{note.body}</p> */}
      </div>
      <p onClick={() => deletenote(note)}><i class="fas fa-trash"></i></p>
    </div>
  )
}

export default SidebarItems
