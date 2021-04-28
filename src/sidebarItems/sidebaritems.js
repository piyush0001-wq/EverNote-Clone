import React from 'react';
import { removeHTMLTags } from '../helpers';
import './sidebaritems.css'

class SidebarItemComponent extends React.Component {

  render() {

    const { _index, _note, selectedNoteIndex } = this.props;

    return (
      <div key={_index} className="items">
        <div className="note_item"
          selected={selectedNoteIndex === _index}
          onClick={() => this.selectNote(_note, _index)}>
          <h3>{_note.title}</h3>
          <p>{removeHTMLTags(_note.body.substring(0, 30)) + '...'}</p>
        </div>
        <p onClick={() => this.deleteNote(_note)}><i class="fas fa-trash"></i></p>
      </div>
    );
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => {
    if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  }

}

export default SidebarItemComponent;