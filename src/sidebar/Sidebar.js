import React from 'react';
import SidebarItemComponent from '../sidebarItems/sidebaritems';
import './sidebar.css'

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null
    };
  }
  render() {

    const { notes, classes, selectedNoteIndex } = this.props;

    if (notes) {
      return (
        <div className="sidebar">
          <button className="addbtn"
            onClick={this.newNoteBtnClick}>{this.state.addingNote ? 'Cancel' : 'New Note'}</button>
          {
            this.state.addingNote ?
              <div>
                <input type='text'
                  className="newNote_input"
                  placeholder='Enter note title'
                  onKeyUp={(e) => this.updateTitle(e.target.value)}>
                </input>
                <button
                  className="newNoteSubmitBtn"
                  onClick={this.newNote}>Submit Note</button>
              </div> :
              null
          }
          <hr />
          <div className="notes_list">
            <ul>
              {
                notes.map((_note, _index) => {
                  return (
                    <li key={_index}>
                      <SidebarItemComponent
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={this.selectNote}
                        deleteNote={this.deleteNote}>
                      </SidebarItemComponent>
                      <hr />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div >
      );
    } else {
      return (<div></div>);
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  }
  updateTitle = (txt) => {
    this.setState({ title: txt });
  }
  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);

}

export default SidebarComponent;
