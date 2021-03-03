import React from 'react';
import './StatusToast.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const StatusToast = (props) => {

    return (
        <>
            <div className="container toast_box ml-auto" style={{ "backgroundColor": "#D4EDDA" }}>
                <strong style={{ "letterSpacing": "1px" }}>Success!</strong>
                <span className="ml-1">{props.statusMessage}.</span>
                {/* <button type="button" className="btn btn_close" aria-label="Close">X</button> */}
            </div>
        </>
    )
}

export default StatusToast;