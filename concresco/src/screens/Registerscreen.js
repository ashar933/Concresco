import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from "../actions/userActions"
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'
export default function Registerscreen() {
    const navigate=useNavigate()
    const navigateToHome=()=>{
        navigate("/")
        window.location.reload()
    }
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const registerstate=useSelector(state=>state.registerUserReducer)
    const{error,loading,success}=registerstate
    const dispatch=useDispatch()

    function register(){
        if(password!==cpassword){
            alert("passwords not matched")
        }
        else{
            const user={
                name,
                email,
                password
            }
            console.log(user);
            dispatch(registerUser(user))
            .then(navigateToHome)
        }
    }
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left">
                    <div style={{ marginTop: "80px" }}></div>
                   {loading && (<Loading/>)}
                   {success && (<Success success='user registered successfully'/>)}
                   {error && (<Error error='Email already registered'/>)}
                   
                    <h2 className="text-center m-2" style={{ fontsize: "35px" }}>Sign Up</h2>
                    <div>
                        <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                        <input required type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                        <input required type="password" placeholder="confirm password" className="form-control" value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}></input>
                        <button onClick={register} className="btn mt-3">REGISTER</button><br/>
                        <a href="/login">Click here to Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}