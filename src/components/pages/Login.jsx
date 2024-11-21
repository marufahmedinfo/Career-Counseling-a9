import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { authContext } from '../provider/AuthProvider';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { handleGoogleLogin, handleLogin, setUser } = useContext(authContext);
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const handleLoginUser = (e) => {
        e.preventDefault();
        setError('')
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password)
        handleLogin(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                setUser(user)
                navigate(location.state.from)
                
            })
            .catch(error => {
                setError(error.message)
            })
    };
    const handlegoogolelgoin = () => {
        handleGoogleLogin()
        .then(res => {
            navigate(location.state.from)
        })
    }
    return (
        <div className="card bg-base-100 w-full mx-auto mt-32 max-w-md shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold ml-8 text-[#2E948E]">Login now!</h1>
            <form onSubmit={handleLoginUser} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        name='email'
                        type="email"
                        placeholder="email"
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
                    <button onClick={() => setShowPassword(!showPassword)} className='btn-sm absolute top-[215px] right-9'>
                        {
                            showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />
                        }
                    </button>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    {
                        error && <p className="text-red-500">{error.split("/")[1].slice(0, 18)}</p>
                    }
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-[#2E948E] to-[#ecab4a] text-white text-lg">Login</button>
                </div>
            </form>
            <button onClick={() => setShowPassword(!showPassword)} className='btn-sm absolute top-[215px] right-9'>
                {
                    showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />
                }
            </button>
            <button onClick={handlegoogolelgoin} className='btn w-6/12 ml-8'><FcGoogle size={30} />LogIn With Google</button>
            <p className="text-center font-semibold pb-7 mt-5">
                Allready Have An Account ?{'  '}
                <Link to={'/signup'} className="text-purple-500 underline">
                    Register Now
                </Link>
            </p>
        </div>
    );
};

export default Login;