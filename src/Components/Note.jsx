import React, { useState } from 'react';
import './Note.css';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {
    const [dValue, setDValue] = useState(false);

    const deleteShow = () => setDValue(true);
    const deleteHide = () => setDValue(false);

    return (
        <>
            <div className="col-lg-4 col-sm-6 col-12 px-4 my-4 h-100">
                <div className="px-3 py-4 shadow-lg rounded card-note" onMouseOver={deleteShow} onMouseOut={deleteHide}>
                    <h5>{props.title}</h5>
                    <hr />
                    <p>{props.note}</p>
                    <button type="button"
                        className="deleteBtn"
                        style={{ display: dValue ? "block" : "none" }}
                        onClick={() => props.onDelete(props.id)}>
                        <DeleteIcon className="btnIcon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Note;