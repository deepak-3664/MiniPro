import React,{useState} from "react";
import './PaymentPage.css'
export const Payment= () => {
const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_jeFVjdYkanlEbl",
        key_secret:"gidhOIhievpSccTioblRSwzP",
        amount: amount *100,
        currency:"INR",
        name:"D03 Kitchen Appliance",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"DEEPAK",
          email:"deepakprabu1234@gmail.com",
          contact:"8754988838"
        },
        notes:{
          address:"Sri krishna college of Enginnering and Technology"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
     <h2 className="app2">Razorpay Payment Integration Using React</h2>
     <center>
     <br/>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
     </center>
    </div>
  );
}