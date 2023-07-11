import React,{useState} from 'react'
import './Signup.css'
import ReactDOM  from 'react-dom';
import { Link } from "react-router-dom";

function Signup() {
    const [formValues,setFormValues]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        if(formErrors.check === true){
            setIsSubmit(true);
        }
        else{
            setIsSubmit(false);
        }
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 
        errors.check= true;
        if(!values.username)
        errors.username="Please Fill the column";
        else if(values.username.length<5){
            errors.check= false;
            errors.username="Username must have minimum 5 characters";
        }
        else if(reg.test(values.username)){
            errors.username="Username must contain only alphabets";
        }
        if(!values.email){
        errors.check= false;
        errors.email="Please Fill the email";
    }
    
    if(!values.password){
        errors.check= false;
        errors.password="Please Fill the password";
    }
    else if(values.password.length<5){
        errors.check= false;
        errors.password="Password is Weak";
    }
        return errors;
    }
const renderSignup = 
(
    <div className='form'>
        <form onSubmit={handleSubmit}> 
                <div className='input-container1'>
                    <label>Username</label>
                    <input type="text" id='username' placeholder='Create your Username' value={formValues.username}
                        onChange={handleChange} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.username}</p>

                <div className='input-container1'>
                    <label>Email</label>
                    <input type="email" id='email'placeholder='Enter your Email' value={formValues.email}
                        onChange={handleChange} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.email}</p>

                <div className='input-container1'>
                    <label>Password</label>
                    <input type="password" id='password' placeholder='Create a Password' value={formValues.password}
                        onChange={handleChange} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.password}</p>

                <div className='button-container'>
                  <input type='submit'/>
                </div>
                <div className="register">
            <Link to="/">Already have an Account..?</Link>
        </div>
        </form>
    </div>
  );
  return(
    <div className="login">
    <div className="login-form">   <center>
                <div className='title'>REGISTER</div></center>  
        {isSubmit ? <div style={{color: "white"}}>User is successfully logged in</div> : renderSignup}
    </div>
  </div>
  );
}

export default Signup