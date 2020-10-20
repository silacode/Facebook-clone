import React from 'react';
import "./Login.css";
import Button from "@material-ui/core/Button";
import {auth, provider} from "../firebase"
import { useStateValue } from '../StateProvider/StateProvider';
import {actionTypes} from "../StateProvider/reducer";

function Login() {
    const [state, dispatch]=useStateValue();

    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then(result =>{
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result);
        }).catch (error=> alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" 
                    alt="facebook text"
                />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" 
                    alt="face-book logo"
                />
            </div>
            <Button type="submit" 
                onClick={signIn}
                variant ="contained"
            >
                Sign In 
            </Button>
        </div>
    )
}

export default Login;
