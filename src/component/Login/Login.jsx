import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="form-container">
                <h2 className="form-title">Login</h2>
                <form>
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