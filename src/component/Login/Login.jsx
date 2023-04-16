import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

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
                        <input type="password" name="password" placeholder='Your Password' id="password" required/>
                    </div>
                    <input type="submit" className="btn-submit" value="Login"/>
                </form>
                <p><small>New to Ema-John? <Link to='/signup'>Create new account</Link></small></p>
            </div>
        </div>
    );
};

export default Login;