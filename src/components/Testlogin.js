import React from "react";
import { useState } from "react";
import './components.css'
import axios from 'axios'
const Testlogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  const emailHandler =(e)=>{
setEmail(e.target.value)
   }
   const passwordHandler =(e)=>{
    setPassword(e.target.value)
       }
const submitHandler = (e) => {
 e.preventdefault();
 console.log('form han been submitteed.');
axios.post('https://63061703697408f7edd26813.mockapi.io/users/',{
 email: email,
 password: password
})
.then(
  (response)=>{
    console.log(response.data)
    alert('successfully logged in')

  }
)
.catch(
  (err)=>{
    console.log(err.response)
    alert(err.response.data.error.message)
  }
)

}

  return (
    <div className="login">
      <center>
        <form onSubmit={submitHandler}>
            <input label="email" name="Email" type="text" value={email} onChange={emailHandler} /><br/>
            <input name="password" type="password" value={password} onChange={passwordHandler} /><br/>
            <input type="submit" value="login"/>
        </form>
      </center>
    </div>
  );
};

export default Testlogin;
