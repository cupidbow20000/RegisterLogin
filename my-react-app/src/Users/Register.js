import React, { useEffect } from 'react'

import {Link, useResolvedPath} from 'react-router-dom'
import { loginUser, registerUser } from '../actions/userAction'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
function Register() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
   
    const [isfirst, setIsFirst] = useState(true);
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    
    const RegisterShow = () => {
        document.getElementById('id01').style.display='block';
      }
      const hide = () => {
        document.getElementById('id01').style.display='none';
        console.log("---------user------"+user.password);
        // alert(user.username);
      }

     const handleSubmit = (e) => {
         e.preventDefault();
         

        dispatch(registerUser(name, username, password,confirmpassword));
        
       }

    useEffect(() => {
      console.log(user);
    }, [user]);
    return (
        <div style={{position:'relative',padding:'100px'}}>
            <Button className="pageHeader" variant="contained" onClick={RegisterShow}>Register</Button>
            <Button className="pageHeader" variant="contained" ><Link  to="/login">Login</Link></Button>
            
            {/* <button className="pageHeader" >login</button> */}
        <div id="id01" className="modal">
            
        <form className="modal-content animate" onSubmit={handleSubmit} >
          <div className="imgcontainer">
            <img src="pictures/Avatar.png" alt="ad"></img>
            <span  className="close" title="Close Modal" onClick={hide}>&times;</span>
          </div>
      
          <div className="container">
          <label><b>Name</b></label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" name="uname" style={{width: "95%"}} required />
          <label><b>Username</b></label>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Username" name="uname" style={{width: "95%"}} required />

                <label><b>Password</b></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" name="psw" style={{width: "95%", marginBottom: "20px"}} required />

                <label><b>Password Confirm</b></label>
                <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Enter Password" name="psw" style={{width: "95%", marginBottom: "20px"}} required />

            
            {/* <button type="submit">Login</button> */}
           
          </div>
      
          <div className="container" style={{backgroundColor:'#f1f1f1'}}>
          <Button  variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
            </Button>
            <Button className='login' variant="contained" endIcon={<SendIcon />} type="submit">
            Submit
            </Button> 
            {/* <button type="button"  className="cancelbtn">Cancel</button>
            <span className="psw">Forgot ? press here</span> */}
          </div>
        </form>
      </div>
      </div>
    )
  };
  
  export default Register;