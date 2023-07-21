import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [number, setNumber] = useState('');

    const navigate = useNavigate();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:2004/get");
            setDetails(response.data);
            console.log(response);
        }
        catch (error) {
            console.log("error fetching data");
        }
    };

    const handleSubmit = (e) => {
        const data = {
            name: name,
            gmail: email,
            password: pass,
            mobno: number,
        }

        if (name.trim() === '' || email.trim() === '' || pass.trim() === '' || number.trim() === '') {
            alert('Please Enter Details');
        }
        if (details.some((user) => user.gmail === email)) {
            alert('User already exists.');
        }
        else if (!isStrongPassword(pass)) {
            alert("Please enter a strong password combination.");
        }
        else {
            axios.post("http://127.0.0.1:2004/post", data);
            console.log(data);
            navigate("/");
        }

    };
    const isStrongPassword = (pass) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(pass);
        const hasLowerCase = /[a-z]/.test(pass);
        const hasNumber = /\d/.test(pass);
        const hasSpecialChar = /[!@#$%^&*()]/.test(pass);

        return (
            pass.length >= minLength &&
            hasUpperCase &&
            hasLowerCase &&
            hasNumber &&
            hasSpecialChar
        );
    };

    return (
        <div className="login">
           <center>
                <div className='title'>Register</div></center>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="input-container1">
                <label className="lab" htmlFor="name">Username</label>
                <input type="text" className="lab1" required value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Fullname" /></div>
                <div className="input-container1">
                <label className="lab" htmlFor="email">E-mail</label>
                <input className="lab1" required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" id="email" name="email" /></div>
                <div className="input-container1">
                <label className="lab" htmlFor="password">Password</label>
                <input className="lab1" required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Enter your password" id="password" name="password" /></div>
                <div className="input-container1">
                <label className="lab" htmlFor="phonenumber">Mobile Number</label>
                <input className="lab1" required value={number} onChange={(e) => setNumber(e.target.value)} type="phonenumber" placeholder="Enter your Moblie Number" id="number" name="number" /></div>
                <div className='button-container'>
                <button className="button2" type="submit">Proceed</button></div>
            </form>
            <div className="register">
            <Link to={"/"}><button className="link-btn1">Already have an account? Login here.</button></Link>
            </div>
        </div>
    )
}