import { useEffect, useState, useReducer } from 'react';
import classes from './UseReducer.module.css';


// dispatchEmail is this function that user has defined,
// calling dispatchEmail would mean calling this emailReducer
// ab emailReducer function ke through hum previous state ko update krenge
const emailReducer = (state, action) => {
    // state, action (state: It it the value of the new state, jo hume chahiye)
    // action : What we need to do
}


function App() {
    // const [email, setEmail] = useState("");
    // const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(true);
    const [isValidForm, setIsValidForm] = useState(false);


    const [email, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: true
    });

    useEffect(() => {
        setIsValidForm(
            email.includes('@') && password.trim().length > 5
        )
    }, [validEmail, validPassword])

    const emailChangeHandler = (ev) => {

        setEmail(ev.target.value);

        setIsValidForm(
            ev.target.value.includes('@') && password.trim().length > 5
        )
    }

    const passwordChangeHandler = (ev) => {
        setPassword(ev.target.value);

        setIsValidForm(
            ev.target.value.includes('@') && password.trim().length > 5
        )
    }

    const validateEmailHandler = () => {
        setValidEmail(email.includes('@'));
    }

    const validatePasswordHandler = () => {
        setValidPassword(password.trim().length > 5);
    }

    const FormSubmitHandler = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className="App">
            <form onSubmit={FormSubmitHandler}>
                <div className={`${validEmail === false ? classes.invalid : ''}`}>
                    <input
                        value={email}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                        type='text'
                        placeholder='Enter email'
                    ></input>
                </div>
                <div className={`${validPassword === false ? classes.invalid : ''}`}>
                    <input
                        value={password}
                        onChange={passwordChangeHandler}
                        type='password'
                        onBlur={validatePasswordHandler}
                        placeholder='Enter password'
                    ></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default App;