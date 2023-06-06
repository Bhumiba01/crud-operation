import React, { useState } from 'react';
import DeleteModel from './DeleteModel';
const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    return (
        <>
            <button onClick={() => setShowModal(true)} className='bg-blue-700 hover:bg-blue-900 text-white p-3 m-2 rounded-full'>Open Modal</button>  
            {showModal && <DeleteModel closeModal = {closeModal}/>}
        </>
    );
};

export default Modal;