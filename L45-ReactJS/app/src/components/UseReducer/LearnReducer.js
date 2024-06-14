import { useEffect, useState, useReducer, act } from 'react';
import classes from './UseReducer.module.css';


// dispatchEmail is this function that user has defined,
// calling dispatchEmail would mean calling this emailReducer
// ab emailReducer function ke through hum previous state ko update krenge
const emailReducer = (state, action) => {
    // state, action (state: It it the value of the old state, jo hume chahiye)
    // action : What we need to do to update the data {value: 'NEW VALUE', type:''}
    if (action.type == 'EMAIL_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    else if (action.type == "EMAIL_VERIFY") {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: state.value, isValid: state.isValid }
}

const passwordReducer = (state, action) => {
    if (action.type == "PASSWORD_INPUT") {
        return { value: action.value, isValid: action.value.trim().length > 5 }
    }
    else if (action.type == "PASSWORD_VERIFY") {
        return { value: state.value, isValid: state.value.trim().length > 5 }
    }
    return { value: state.value, isValid: state.isValid }
}


function App() {
    // const [email, setEmail] = useState("");
    // const [validEmail, setValidEmail] = useState(true);
    // const [password, setPassword] = useState('');
    // const [validPassword, setValidPassword] = useState(true);
    const [isValidForm, setIsValidForm] = useState(false);

    const [email, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: true
    });

    const [password, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: true
    });


    useEffect(() => {
        setIsValidForm(email.isValid && password.isValid);
    }, [email.isValid, password.isValid])

    const emailChangeHandler = (ev) => {
        // console.log(ev.target.value);
        dispatchEmail({ // Action hai inside the emailReducer function
            type: 'EMAIL_INPUT',
            value: ev.target.value // Value ko set kr skte hai
        })
    }

    const passwordChangeHandler = (ev) => {
        dispatchPassword({
            type: 'PASSWORD_INPUT',
            value: ev.target.value
        })
    }

    const validateEmailHandler = () => {
        dispatchEmail({
            type: 'EMAIL_VERIFY'
        })
    }

    const validatePasswordHandler = () => {
        // setValidPassword(password.trim().length > 5);
        dispatchPassword({
            type: 'PASSWORD_VERIFY'
        })
    }

    const FormSubmitHandler = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className="App">
            {!isValidForm && <div>Please correct your form input!</div>}
            <form onSubmit={FormSubmitHandler}>
                <div className={`${email.isValid === false ? classes.invalid : ''}`}>
                    <input
                        value={email.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                        type='text'
                        placeholder='Enter email'
                    ></input>
                </div>
                <div className={`${password.isValid === false ? classes.invalid : ''}`}>
                    <input
                        value={password.value}
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