import React, { useState } from 'react';
import Modal from './Exercise3Child';

const ParentComponent = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal show={isModalOpen} onClose={closeModal}>
                <p>This is modal content!</p>
            </Modal>
        </div>
    );
};

export default ParentComponent;
