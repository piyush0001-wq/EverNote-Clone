import React from 'react'
import ReactQuill from 'react-quill'
import debounce from '../helpers'
import { useState, useEffect } from 'react'
import './editor.css'
import { db } from '../firebase'

function Editor({ selectedTitle, noteUpdated }) {

  console.log(`${selectedTitle.title} from editor`)

  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {

    setText(selectedTitle.body)
    setTitle(selectedTitle.title)
    setId(selectedTitle.id)

  }, [setId, setText, setTitle, selectedTitle])

  function updateBody(event) {
    setText(event)
    update(event)
  }



  const update = debounce((event) => {
    console.log('updating text to' + event)
    noteUpdated(selectedTitle.id, text)
    // db.collection('notes').doc(selectedTitle).add({
    //   body: event
    // })
  }, 2000)

  return (
    <div className="editor_container">
      <h2>{title}</h2>
      <ReactQuill value={text} onChange={updateBody} >
      </ReactQuill>
    </div>
  )
}

export default Editor
