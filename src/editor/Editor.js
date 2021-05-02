import React from 'react'
import ReactQuill from 'react-quill'
import { useState, useEffect } from 'react'
import './editor.css'
import { db } from '../firebase'

function Editor({ selectedQuillTitle, selectedQuillBody, selectedQuillId }) {

  const [timeoutHandler, settimeoutHandler] = useState()
  const [text, setText] = useState()


  useEffect(() => {
    setText(selectedQuillBody)
    // console.log(text)
    console.log(selectedQuillId)
  }, [selectedQuillBody, selectedQuillId, setText])

  function changeSelectedBody(e) {
    setText(e)

  }

  useEffect(() => {
    clearTimeout(timeoutHandler)
    settimeoutHandler(
      setTimeout(() => {
        console.log(text)
        if (selectedQuillId) {

          db.collection('notes').doc(`${selectedQuillId}`).update({
            body: text
          })
        }
      }, 2000)
    )

  }, [text, selectedQuillId])

  return (
    <div className="editor_container">
      <h2>{selectedQuillTitle}</h2>
      <ReactQuill value={text} onChange={changeSelectedBody}>
      </ReactQuill>
    </div>
  )
}

export default Editor
