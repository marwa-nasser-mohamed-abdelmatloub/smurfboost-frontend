import React from 'react';
import theme from './Theme';

const SocialButtons = () => {
    const buttonStyle = {
        borderColor: theme.colors.primary,
        color: theme.colors.primary,
        width: '157px',
        height: '40px'
    };

    return (
        <div className="d-flex gap-2 mb-3" style={{ width: '320px', height: '40px' }}>
            <button className="btn btn-outline-primary flex-fill border" style={buttonStyle}>
                <i class="bi bi-google"></i>
            </button>
            <button className="btn btn-outline-primary flex-fill border" style={buttonStyle}>
                <i class="bi bi-discord"></i>
            </button>
        </div>
    );
};

export default SocialButtons;
