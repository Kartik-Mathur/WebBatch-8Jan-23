import { useDispatch } from 'react-redux';
import axios from '../utils/axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginHandler = async () => {
        const username = emailRef.current.value;
        const password = passwordRef.current.value;

        try {
            const { data } = await axios.post('login', { username, password });
            console.log(data);
            // SET THE DATA TO REDUX
            dispatch({ type: 'SET_USER', payload: data.user })
            // NAVIGATE TO HOME PAGE
            navigate('/app');
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div>
            <input ref={emailRef} type='text' placeholder='Enter username or email' /> <br />
            <input ref={passwordRef} type='password' placeholder='Enter password' /> <br />
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

export default Login
