import React from 'react';
import SmurfTitle from '../components/shared/SmurfTitle';
import SmurfForm from '../components/SmurfForm';
import SocialButtons from '../components/shared/SocialButtons';
import '../styles/LoginRegister.css';
import { Link } from 'react-router-dom';
import theme from '../components/shared/Theme';

const LoginRegisterPage = ({ mode }) => {
    const isLogin = mode === 'login';

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
                        title={isLogin ? "Login" : "Create Account"}
                        linkText={isLogin ? "Create one here." : "Login here."}
                        linkHref={isLogin ? "/register" : "/login"}
                        subtitle={isLogin ? "Don't have an account?" : "Already have an account?"}
                    />

                    <SocialButtons />
                    <div className="text-center text-secondary mb-3" style={{ fontSize: '14px' }}>OR</div>
                    <SmurfForm isLogin={isLogin} />
                    <p className="mt-3 text-secondary" style={{ fontSize: '14px' }}>
                        Need help? <Link className="text-decoration-none" style={{ color: theme.colors.primary }}>Contact support</Link>
                    </p>
                </div>
            </div>

            {/* Right Side - Image */}
            <div className="right-section d-none d-md-block col-md-6">
                <img
                    src={require(`../assets/images/${isLogin ? 'login-image.png' : 'register-image.png'}`)}
                    alt="cover"
                    className="img-fluid"
                    style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                />
            </div>
        </div>
    );
};

export default LoginRegisterPage;
