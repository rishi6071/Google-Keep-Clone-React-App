import React from 'react';
import './Note.css';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {

    return (
        <>
            {/* {
                JSON.parse(localStorage.getItem('Notelist')).map(() => {
                    return (
                        <>
                            <div className="col-lg-4 col-sm-6 col-12 px-4 my-4 h-100">
                                <div className="px-3 py-4 rounded card-note">
                                    <h5>{props.title}</h5>
                                    <hr className="mt-n1" />
                                    <p>{props.note}</p>
                                    <button type="button"
                                        className="deleteBtn"
                                        onClick={() => props.onDelete(props.id)}>
                                        <DeleteIcon className="btnIcon" />
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                })
            } */}
            <div className="col-lg-4 col-sm-6 col-12 px-4 my-4 h-100">
                <div className="px-3 py-4 rounded card-note">
                    <h5>{props.title}</h5>
                    <hr className="mt-n1" />
                    <p>{props.note}</p>
                    <button type="button"
                        className="deleteBtn"
                        onClick={() => props.onDelete(props.id)}>
                        <DeleteIcon className="btnIcon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Note;