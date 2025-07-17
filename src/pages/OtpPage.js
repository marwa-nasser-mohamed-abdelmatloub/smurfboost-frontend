import React, { useRef } from 'react';
import SmurfButton from '../components/shared/SmurfButton';
import SmurfTitle from '../components/shared/SmurfTitle';
import '../styles/OtpPage.css';
import otpImage from '../assets/images/otp-image.png';
import { Link } from 'react-router-dom';
import theme from '../components/shared/Theme';

const OtpPage = () => {
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d$/.test(value)) {
            inputsRef.current[index].value = value;
            if (index < 5) {
                inputsRef.current[index + 1].focus();
            }
        } else {
            inputsRef.current[index].value = '';
        }
    };

    return (
        <div className="row g-0 m-0" style={{ width: '100vw', height: '100vh' }}>
            {/* Left Side */}
            <div
                className="left-section d-flex align-items-center justify-content-center col-12 col-md-6"
                style={{ backgroundColor: theme.colors.dark }}
            >
                <div
                    className="form-container text-white"
                    style={{
                        width: '320px',
                        height: 'auto'
                    }}
                >
                    <SmurfTitle
                        title="One-Time Password"
                        subtitle="Enter 6 digit code sent to"
                        linkText="Your Email."
                    />

                    {/* Inputs */}
                    <div className="d-flex justify-content-center gap-2 mb-4">
                        {[...Array(6)].map((_, i) => (
                            <input
                                key={i}
                                type="text"
                                maxLength={1}
                                className="otp-input text-center"
                                onChange={(e) => handleChange(e, i)}
                                ref={(el) => (inputsRef.current[i] = el)}
                            />
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-3 text-center">
                        <SmurfButton type="submit">Continue</SmurfButton>
                    </div>

                    <p className="mt-3 text-secondary" style={{ fontSize: '14px' }}>
                        Need help? <Link className="text-decoration-none" style={{ color: theme.colors.primary }}>Contact support</Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="right-section d-none d-md-block col-md-6">
                <img
                    src={otpImage}
                    alt="OTP Visual"
                    className="img-fluid"
                    style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                />
            </div>
        </div>
    );
};

export default OtpPage;