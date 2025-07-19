import React from 'react';
import theme from './Theme';

const SmurfButton = ({ type = "button", children, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="btn w-100"
            style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.white,
                height: '36px',
                borderRadius: '8px',
                padding: '0 40px',
                fontWeight: '500',
                fontSize: '14px'
            }}
        >
            {children}
        </button>
    );
};

export default SmurfButton;