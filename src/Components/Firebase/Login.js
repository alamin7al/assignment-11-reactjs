import {
    useLocation,
    useHistory,
    Link
} from "react-router-dom";
import React, { useState } from 'react';
import Useauth from "./Useauth";


const Login = () => {

    const { EmailSignIn, signInusonGoogle, processLogin,setUserName, error,setUsers, handleName } = Useauth()
    const [email, setEmail] = useState('')
    const location = useLocation()
    const history = useHistory()
    const redirect_url = location.state?.from || '/home'

    const [isLogin, setLogin] = useState(false)

    const [password, setPassword] = useState('')

    const handleGoogleLogin = () => {
        signInusonGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    //toggale

    const toggaleLogin = e => {
        setLogin(e.target.checked);
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    //register
    const handleRegister = (e) => {
        e.preventDefault()
        isLogin ? LoginPRo(email, password) : createNewUser(email, password)

    }

    const createNewUser = (email, password) => {
        EmailSignIn(email, password)
        .then(result => {
            const user = result?.users
            console.log(user);
            setUsers(user)
            setUserName()
            history?.push(redirect_url)
        })

    }

    const LoginPRo = (email, password) => {
        processLogin(email, password)
        .then(result => {
            const user = result?.user
            console.log(user);
            setUsers(user)
            history?.push(redirect_url)
        })

    }

   
    return (
        <div>
            <div>
                <div className='w-50 mx-auto container my-5'>

                    <form onSubmit={handleRegister}>
                        <h2>Please {isLogin ? 'Login' : 'Register'}</h2>

                        {!isLogin && <div className="row mb-3">
                            <label for="inputName" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input onBlur={handleName} type="Name" className="form-control" required />
                            </div>
                        </div>} 

                        <div className="row mb-3">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                            </div>
                            <div className="row mb-3 ">
                                <div className="col-sm-10 offset-sm-2 text-start">
                                    <div className="form-check  mt-5">
                                        <input onChange={toggaleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label " for="gridCheck1">
                                            Already Register
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {
                                error &&
                                <div className="row mb-3 text-danger">{error}</div>
                            }


                        </div>
                        <button type="submit" className="btn btn-primary me-5">{isLogin ? 'Login' : "Register"}</button>
                    </form>
                    <button onClick={handleGoogleLogin} className='mt-5 btn btn-primary'>Google SignIn</button>
                </div>
            </div>
        </div>
    );
};

export default Login;