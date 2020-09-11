import React, { useState } from 'react';
import Note from './Note';
import './CreateNote.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CreateNote = () => {

    // OnChange States of input and textarea
    const [keepNote, setKeepNote] = useState({
        title: '',
        note: ''
    });

    // Display State of Form
    const [dstate, setDstate] = useState(false);

    // List of Objects containing Titles and Notes Properties
    const [noteList, setNoteList] = useState([]);

    // OnChange Events of input and textarea
    const noteInput = (event) => {
        const {value, name} = event.target;

        setKeepNote((preNote) => {
            if(name == 'title') {
                return {
                    title: value,
                    note: preNote.note
                };
            }
            else if(name == 'note') {
                return {
                    title: preNote.title,
                    note: value
                };
            }
        });
    }

    // On the Submission of Form
    const submitInfo = (event) => {
        event.preventDefault();

        // Empty the Fields
        setKeepNote({
            title: '',
            note: ''
        });

        // Display none the Input Field
        setDstate(false);

        // Store Tasks
        setNoteList((preNote) => {
            return [
                ...preNote,
                keepNote
            ];
        });
    }

    const deleteItem = (id) => {

        setNoteList((preNotes) => {
           return preNotes.filter((element, index) => {
               return index != id;
           });
        });
    }

    return (
        <>
            <form className="mt-4 p-2 mx-auto" onClick={() => setDstate(true)} onDoubleClick={() => setDstate(false)} onSubmit={submitInfo}>

                <input type="text" placeholder="Title" name="title"
                    className="form-control" onChange={noteInput}
                    value={keepNote.title} style={{ display: dstate ? "block" : "none" }} required />

                <textarea placeholder="Write a Note" name="note"
                    onChange={noteInput}
                    className="form-control" rows="2" value={keepNote.note}>
                </textarea>

                <button type="submit"><i class="fa fa-location-arrow" aria-hidden="true"></i></button>
            </form>

            <div className="container mt-5 pt-3">
                <div className="row">
                    {
                        noteList.map((currentElement, index) => {
                            return <Note key={index} 
                                title={currentElement.title} 
                                note={currentElement.note} 
                                id={index}
                                onDelete={deleteItem}     
                            />
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default CreateNote;