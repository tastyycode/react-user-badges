import React from 'react';

import Modal from './Modal';

export default function DeleteBadgeModal(props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <div className="DeleteBadgeModal d-flex align-items-center flex-column">
                <h1>Are you sure?</h1>

                <p>You are about to delete this Badge.</p>

                <div className="d-flex justify-content-around col-11">
                    <button onClick={props.onClose} className="btn btn-secondary">Cancel</button>
                    <button onClick={props.onDeleteBadge} className="btn btn-danger">I'm sure</button>
                </div>
            </div>
        </Modal>
    )
}