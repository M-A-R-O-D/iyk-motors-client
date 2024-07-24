import React from 'react';

const Button = ({ onClick, children, type = 'button', className = '', style = {} }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-300 ${className}`}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;
