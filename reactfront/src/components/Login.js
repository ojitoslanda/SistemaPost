import React, { useState } from 'react'
import AunthUser from './AuthUser';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate = useNavigate();
    const {http} = AunthUser();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const submitForm = () => {
      navigate('/list');
    }
    return (
        <div className='loginForm container'>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="text"
                        className="form-control"  />
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" />
                </div>
            </div>
            <button type="submit" onClick={submitForm} className="btn btn-primary"> Ingresar </button>
        </div>
    )
}

export default Login