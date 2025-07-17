import React from 'react';
import { Link } from 'react-router-dom';
import theme from './Theme';

const SmurfTitle = ({ title, subtitle, linkText, linkHref }) => {
    return (
        <div className="mb-4">
            <h2 className="fw-bold">{title}</h2>
            {subtitle && (
                <p className="text-secondary" style={{ fontSize: '14px' }}>
                    {subtitle}{' '}
                    <Link
                        to={linkHref}
                        className="text-decoration-none"
                        style={{ color: theme.colors.primary }}
                    >
                        {linkText}
                    </Link>
                </p>
            )}
        </div>
    );
};

export default SmurfTitle;
