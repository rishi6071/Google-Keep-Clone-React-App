import React, { useState } from 'react';
import StatusToast from './StatusToast';
import Note from './Note';
import './CreateNote.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CreateNote = () => {
    // Status Toast
    const [showStatus, setShowStatus] = useState({
        status: false,
        message: ""
    });

    // OnChange States of input and textarea
    const [keepNote, setKeepNote] = useState({ title: '', note: '' });

    // Display State of Form
    const [dstate, setDstate] = useState(false);

    // List of Objects containing Titles and Notes Properties
    const [noteList, setNoteList] = useState([]);

    // OnChange Events of input and textarea
    const noteInput = (event) => {
        const { value, name } = event.target;

        setKeepNote((preNote) => {
            if (name === 'title') {
                return {
                    title: value,
                    note: preNote.note
                };
            }
            else if (name === 'note') {
                return {
                    title: preNote.title,
                    note: value
                };
            }
        });
    }

    // Remove Toast message
    const removeStatus = () => {
        setTimeout(() => {
            setShowStatus({
                status: false,
                message: ""
            });
        }, 1500);
    }

    // On the Submission of Form
    const submitInfo = (event) => {
        event.preventDefault();

        // Show Status True
        setShowStatus({
            status: true,
            message: "Note Added Successfully"
        });

        // Remove Toast Message 
        removeStatus();

        // Empty the Fields
        setKeepNote({
            title: '', note: ''
        });

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
                return index !== id;
            });
        });

        // Deleted Toast Message
        setShowStatus({
            status: true,
            message: "Note Deleted Successfully"
        });

        // Removed Toast Status
        removeStatus();
    }

    return (
        <>
            <form className="mt-4 p-2 mx-auto"
                onClick={() => setDstate(true)}
                onDoubleClick={() => setDstate(false)}
                onSubmit={submitInfo} autoComplete="off">

                <input type="text" placeholder="Title" name="title"
                    className="form-control" onChange={noteInput}
                    value={keepNote.title} style={{ display: dstate ? "block" : "none" }} required />

                <textarea placeholder="Write a Note" name="note"
                    onChange={noteInput} className="form-control" rows="3" value={keepNote.note}>
                </textarea>

                <button type="submit"><i className="fa fa-location-arrow" aria-hidden="true"></i></button>
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

            {/* ()() is self-invoking function */}
            {
                (() => {
                    if (showStatus.status) {
                        return <StatusToast statusMessage={showStatus.message} />
                    }
                })()
            }
        </>
    );
}

export default CreateNote;