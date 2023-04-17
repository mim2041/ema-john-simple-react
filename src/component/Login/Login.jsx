import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const [show, setShow] = useState(false);
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = event => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace : true})
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleLogIn}>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" name="email" placeholder='Your Email' id="email" required/>
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type={show ? 'Text' : "password"} name="password" placeholder='Your Password' id="password" required/>
                        <p onClick={() => setShow(!show)}><small>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                            </small></p>
                    </div>
                    <input type="submit" className="btn-submit" value="Login"/>
                </form>
                <p><small>New to Ema-John? <Link to='/signup'>Create new account</Link></small></p>
            </div>
        </div>
    );
};

export default Login;