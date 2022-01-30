import { makeStyles } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import Axios from "axios";

const styles = makeStyles({
    
    background: {
        width: "100%",
        float: "left",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/runningbackground.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '1600px',
        height: "1000px",
    },
    form: {
        marginTop: "120px",
        width: "30%",
        backgroundColor: "#1a1a1a",
        marginLeft: "525px",
        boxShadow: "10px 5px 10px 10px #404040",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        marginTop: "20px",
        textAlign: "center", 
        fontSize: "30px",
        marginBottom: "20px",
        color: "#E2E7EB",
    },
    label: {
        textAlign: "left",
        display: "block",
        marginLeft: "19.5%",
        color: "#E2E7EB",
    },
    input: {
        width: "60%",
        textAlign: "left",
        padding: "3px 10px",
        margin: "10px 0",
        border: "3px solid #ddd",
        boxSizing: "border-box",
        display: "inline",
    },
    button: {
        fontWeight: "bold",
        width: "150px",
        fontFamily: "Nunito",
        marginTop: "20px",
        textAlign: "center",
        marginLeft: "33%",
        marginRight: "50%",
        display: "block",
        marginBlock: "center",
        height: "35px",
        padding: "0 20px",
        boxSizing: "border-box",
        borderRadius: "8px", 
        background: "#1c3563",
        color: "#fff",
        // boxShadow: "6px 6px 0 0 #c7d8ed",
        cursor: "pointer",
        margin: "10px 0",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#9CB3D3"
          },
    },
    logIn: {
        color: "#E2E7EB",
    }
})

function Signup() {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [feedback1, setFeedback1] = useState("");
    const [feedback2, setFeedback2] = useState("");
    const [success, setSuccess] = useState("");

    const checkValidity = (e) => {
        setFeedback1("");
        setFeedback2("");
        if (email.includes("@") === false) {
            setFeedback1("Email not valid!");
        }
        else if (email.includes(".com") === false) {
            setFeedback1("Email not valid!");
        }
        else if (password !== password2) {
            setFeedback2("Passwords do not match!");
        }
        else {
            setSuccess("Email Verification Sent!");
            Axios.post('http://localhost:3001/register', {
                username: email, 
                password: password
            });
        }
    e.preventDefault();
    }

    const classes = styles();
    return (
        <div className={classes.background}>
            <div className={classes.form}>
                <form>
                    <h1 className={classes.title}>Sign Up</h1>
                    <div>
                        <label className={classes.label}>Enter email:</label>
                        <input className={classes.input} 
                            type="text"
                            id="email"
                            placeholder='Email...'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <h5 style={{color: "#ff0000", marginTop: "-7px"}}>{feedback1}</h5>
                        <label className={classes.label}>Enter password:</label>
                        <input className={classes.input}
                            type="password"
                            id = "password"
                            placeholder='Password...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        <h5 style={{color: "#ff0000", marginTop: "-7px"}}>{feedback2}</h5>
                        <label className={classes.label}>Confirm password:</label>
                        <input className={classes.input}
                            type="password"
                            id = "password2"
                            placeholder='Password...'
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            />
                        <h5 style={{color: "#ff0000", marginTop: "-7px"}}>{feedback2}</h5>
                        <button className={classes.button} onClick={checkValidity}>
                            Sign Up
                        </button>
                        <h3 className={classes.logIn}>Already have an account? Log in <a style={{color: "#990099"}} href="/login">Here</a></h3>
                        <h2 style={{color: "#E2E7EB"}}>{success}</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;
