import React, {useState} from 'react'
import "./RegisterForm.css"
import Joi from "joi-browser"


export default function RegisterForm(){

const [name, setName]= useState();
const [nameError, setNameError] = useState(false);
const [email, setEmail] = useState();
const [emailError, setEmailError] = useState(false)
const [dob, setDob] = useState();
const [password, setPassword] = useState();

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().required(),
  dob: Joi.string(),
  password: Joi.string().required(),
})

const submitHandler = (e)=>{
  e.preventDefault();
  setNameError(false)
  setEmailError(false)

 let tempObj = {
   name,
   email,
   dob,
   password
 }

const validation = schema.validate(tempObj)



if(validation.error){
  if(validation.error.details[0].context.key === "name") setNameError(true)
  if(validation.error.details[0].context.key === "email") setEmailError(true)

  return;
}

async function submitToBackend(){
  const res = await fetch("http://localhost:3900/api/v1/users", {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: name,
    email: email,
    dateOfBirth: dob,
    password: password
  }),
  } )

  console.log(res)
}

submitToBackend().catch(e=>console.log("error"))


}

  return <>
  <div >
    <form className="formContainer" onSubmit={submitHandler}>
      <div className="inputContainer">
      <input className="input" style={{borderColor: `${nameError? "red": ""}`}}  type="text" placeholder="Full Name" id="name" onChange={(e)=>{setName(e.target.value)}}/>
      {nameError && <div style={{fontSize: "12px", fontWeight: "1", color: "red", fontStyle: "italic", alignSelf: "start"}}>Name is required. </div>}
      </div>
        <div className="inputContainer">
        <input className="input" style={{borderColor: `${emailError? "red": ""}`}} type="email" placeholder="Email Address" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>
          {emailError && <div style={{fontSize: "12px", fontWeight: "1", color: "red", fontStyle: "italic", alignSelf: "start"}}>Email is required. </div>}
</div>
  <div className="inputContainer">
      <input className="input" type="text" placeholder="Date of Birth" id="dob" onChange={(e)=>{setDob(e.target.value)}}/>
</div>
  <div className="inputContainer">
      <input className="input" type="password" placeholder="Password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
</div>
  <div className="inputContainer">
      <button className="submitButton" type="submit">Submit</button>
      </div>
    </form>
  </div>
  </>
}
