import React from 'react'

import {Link, useResolvedPath} from 'react-router-dom'
import { getUsers,loginUser } from '../actions/userAction';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
// import { useHistory } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
function Login() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [isfirst, setIsFirst] = useState(true);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // let history = useHistory();

    const LoginShow = () => {
        document.getElementById('id01').style.display='block';
        dispatch(getUsers());
      }
    const hide = () => {
        document.getElementById('id01').style.display='none';
        // alert(user.username);
      }
      useEffect(() => {
        if(user.isAuthenticated){
          alert("Login Successed");
          
        }
        
      }, [user]);
  
      const handleLoginSubmit = (e) => {
        e.preventDefault();
  
        dispatch(loginUser(username, password));
      }
     
    return (
        <div style={{position:'relative',padding:'100px'}}>
            <Button className="pageHeader" variant="contained" onClick={LoginShow}>Login</Button>
            <Button className="pageHeader" variant="contained" ><Link  to="/register">Register</Link></Button>
            {/* <button className="pageHeader" >login</button> */}
        <div id="id01" className="modal">
            
        <form className="modal-content animate" onSubmit={handleLoginSubmit} >
          <div className="imgcontainer">
          <img src="pictures/Avatar.png" alt="ad"></img>
            <span  className="close" title="Close Modal" onClick={hide}>&times;</span>
            
          </div>
      
          <div className="container">
          <label><b>Username</b></label>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter Username" name="uname" style={{width: "95%"}} required />

                <label><b>Password</b></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" name="psw" style={{width: "95%", marginBottom: "20px"}} required />
            
            {/* <button type="submit">Login</button> */}
           
          </div>
      
          <div className="container" style={{backgroundColor:'#f1f1f1'}}>
          <Button  variant="outlined" color="error" startIcon={<DeleteIcon />}>
            Delete
            </Button>
            <Button className='login' variant="contained" endIcon={<SendIcon />} type="submit">
            Login
            </Button> 
            {/* <button type="button"  className="cancelbtn">Cancel</button>
            <span className="psw">Forgot ? press here</span> */}
          </div>
        </form>
      </div>
      </div>
    )
  };
  
  export default Login;