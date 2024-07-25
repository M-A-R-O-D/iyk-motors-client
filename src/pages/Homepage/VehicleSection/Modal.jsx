import React from 'react';
import { Icon } from '@iconify-icon/react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    console.log("logging children:", children);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
            <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
                    <Icon icon="ri:close-line" style={{ fontSize: '24px' }} />
                </button>
                <div className="h-auto w-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
