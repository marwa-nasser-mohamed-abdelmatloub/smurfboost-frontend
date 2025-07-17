import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SmurfButton from './shared/SmurfButton';
import theme from './shared/Theme';

const SmurfForm = ({ isLogin }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields },
        watch,
    } = useForm({ mode: 'onChange' });

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        navigate('/dashboard');
    };

    const password = watch('password');

    const renderValidationIcon = (fieldName) => {
        const value = watch(fieldName);
        return !errors[fieldName] && touchedFields[fieldName] && value ? (
            <i className="bi bi-check-circle-fill text-success position-absolute top-50 end-0 translate-middle-y me-3"></i>
        ) : null;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email */}
            <div className="mb-3 position-relative">
                <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email address"
                    style={{
                        backgroundColor: theme.colors.dark,
                        color: theme.colors.white,
                        paddingRight: '2.5rem',
                    }}
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Enter a valid email address',
                        },
                    })}
                />
                {errors.email && (
                    <div className="invalid-feedback">{errors.email.message}</div>
                )}
                {renderValidationIcon('email')}
            </div>

            {/* Password */}
            <div className="mb-4 position-relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    placeholder="Password"
                    style={{
                        backgroundColor: theme.colors.dark,
                        color: theme.colors.white,
                        paddingRight: '3.5rem',
                    }}
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters',
                        },
                        pattern: {
                            value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=\-{}[\]:;"'<>,.?/\\|~`]).{8,}$/,
                            message:
                                'Password must include uppercase, lowercase, number, and special character',
                        },
                    })}
                />

                <div className="position-absolute top-50 end-0 translate-middle-y d-flex align-items-center me-2">
                    {/* Show eye icon only when password has content */}
                    {password && password.length > 0 && (
                        <i
                            className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} text-light me-2`}
                            style={{ cursor: 'pointer', zIndex: 2 }}
                            onClick={() => setShowPassword(!showPassword)}
                        ></i>
                    )}

                    {/* Validation check icon */}
                    {!errors.password && touchedFields.password && password && (
                        <i className="bi bi-check-circle-fill text-success"></i>
                    )}
                </div>

                {errors.password && (
                    <div className="invalid-feedback">{errors.password.message}</div>
                )}
            </div>

            {/* Submit Button */}
            <div className="mt-3 text-center">
                <SmurfButton type="submit">
                    {isLogin ? 'Login' : 'Register'}
                </SmurfButton>
            </div>
        </form>
    );
};

export default SmurfForm;