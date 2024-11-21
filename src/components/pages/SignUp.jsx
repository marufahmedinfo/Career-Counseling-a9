import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { authContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { handleRegister, handleGoogleLogin, updateProfileProfile, setUser } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const handleRegisters = (e) => {
        e.preventDefault();
        setError('')
        const names = e.target.name.value;
        const photos = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(names, photos, email, password)
        if (password.length < 6) {
            setError("Password must contain at least 6 characters")
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter")
            return;
        }

        handleRegister(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
                updateProfileProfile({
                    displayName: names, photoURL: photos
                })
                    .then(() => {
                        navigate('/')
                    })
                    .catch(error => {
                        setError(error)
                    })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setError('already-in-use')
            });
    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-32 max-w-md shrink-0 shadow-2xl">
            <Helmet>
                <title>Register| Career Counseling</title>
            </Helmet>
            <h1 className="text-5xl font-bold ml-8 text-[#2E948E]">Register now</h1>
            <form onSubmit={handleRegisters} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Enter Your Name"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name='photo'
                        placeholder="Your Photo URL"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Enter Your Email"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showPassword ? 'text' : "password"}
                        placeholder="password"
                        name='password'
                        className="input input-bordered"
                        required />
                    {error && <p className="text-red-500">{error}</p>}

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-[#2E948E] to-[#ecab4a] text-white text-lg">Register</button>
                </div>
            </form>
            <button onClick={() => setShowPassword(!showPassword)} className='btn-sm absolute top-[400px] right-10'>
                {
                    showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />
                }
            </button>


            <button onClick={handleGoogleLogin} className='btn w-6/12 ml-8'><FcGoogle size={30} />SignUp With Google</button>
            <p className="text-center font-semibold pb-7 mt-5">
                Allready Have An Account ?{'  '}
                <Link to={'/login'} className="text-purple-500 underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default SignUp;