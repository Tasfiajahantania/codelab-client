
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Provider = new GoogleAuthProvider();
const GithubProvider = new GithubAuthProvider();
const Login = () => {
    const [error, setError] = useState('')
    const { GoogleAuth, GithubAuth,singIn} = useContext(AuthContext);

    const navegate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    const handelLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        singIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navegate(from, {replace: true})

        })
        .catch(error => {
            setError(error.message);
        })
    }
     const handelGoogleSignin = () => {
        GoogleAuth(Provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);

            })
     }
     const handleGithubSignin = () => {
        GithubAuth(GithubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);

            })
    }

    return (
        <div className='bg-neutral-800 text-black text-center p-3'>
            <h2 className='my-4 text-pink-600'>Log In</h2>
            <form onSubmit={handelLogin}>
                <input type="email" name='email' placeholder="Email" required className="input input-bordered w-3/4 text-white " />
                <input type="password" name="password" placeholder="password" required className="input input-bordered w-3/4 my-3 text-white" />
                <button className='text-white text-sm px-4 py-2 rounded bg-pink-500 w-3/4 my-2'>Log In</button>
                <p className='font-bold text-pink-700'>Or</p>
                 <div>
                <button onClick={handelGoogleSignin} className='text-white text-sm px-4 py-2 rounded bg-sky-500 w-3/4 mb-3'><span className=' d-flex justify-center items-center'>
                    <span className='px-2'><FaGoogle /></span>
                    <span>LogIn with Google</span>
                </span></button>
                </div>
                <div>
                <button onClick={handleGithubSignin} className='text-white text-sm px-4 py-2 rounded bg-gray-500 w-3/4'><span className=' d-flex justify-center items-center'>
                    <span className='px-2'><FaGithub /></span>
                    <span>LogIn with Github</span>
                </span></button>
            </div>
            </form>
            <div className='text-danger'>
                <span>{error}</span>
            </div>
            <div className='my-4'>
                <span>Don't have an account? <Link to="/register"> Sign Up</Link></span>
            </div>
        </div>
    );
};

export default Login;