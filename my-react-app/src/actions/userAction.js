import { useDispatch } from 'react-redux';
import { LOGIN_FAILED, LOGIN_SUCCESS,GET_USERS,REGISTER_SUCCESS,REGISTER_FAILED } from './types';
import axios from 'axios';
import store from '../store'

export const getUsers= () => dispatch => {
    console.log("getUsers");
    axios.get('api/users/all')
        .then(res => store.dispatch({
            type: GET_USERS,
            payload: res.data
        })) 
}

export const loginUser = (username, password) => {
    axios.post('/api/users/login', {
        username: username,
        password: password,
      })
      .then(function (res) {
        if(res.data.success == true){
            store.dispatch( {
                type: LOGIN_SUCCESS,
                payload: res.data.message
            });
        }
        else{
            store.dispatch( {
                type: LOGIN_FAILED,
                payload: res.data.message
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
};

export const registerUser = (name,username,password,confirmpassword) => {
    console.log("--------------------"+name+username+password);

    axios.post('/api/users/register', {
        name: name,
        username: username,
        password: password,
        confirmpassword: confirmpassword,
        
      })
      .then(function (res) {
        if(res.data.success == true){
            store.dispatch( {
                type: REGISTER_SUCCESS,
                payload: res.data.message
            });
        }
        else{
            store.dispatch( {
                type: REGISTER_FAILED,
                payload: res.data.message
            });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
};
