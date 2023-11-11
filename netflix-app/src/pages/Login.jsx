import React, {useState} from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import {onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import {firebaseAuth} from "../utils/firebase-config";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 


const Login = () => {
  const navigate = useNavigate();
  
  const [formValues, setFormValues] = useState(
    {
      email: "", 
      password: "",
    }

  );

const handleLogIn = async ()=>{
  // console.log(formValues);

  try {
    const {email,password} = formValues;
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    console.log(error);
  }

};

onAuthStateChanged(firebaseAuth,(currentUser)=>{
  if(currentUser) navigate("/");
})

  return (
   <Container>
   <BackgroundImage/>
   <div className="content">
   <Header/>
   <div className="form-container flex a-center j-center">
   <div className="form flex column a-center j-center">
   <div className="title">
   <h3>Login</h3>
   </div>
   <div className="container flex column">
   <input 
   type='email' 
   name='email' 
   id='email' 
   placeholder='Email Address' 
   value={formValues.email} 
   onChange={(e) =>
     setFormValues({
     ...formValues,
     [e.target.name]:e.target.value,
   })}
   />

  

   <input type='password' name='password' id='password' placeholder='Password' 
   value={formValues.password} 
   onChange={(e) =>setFormValues({
     ...formValues,
     [e.target.name]:e.target.value,
   })}
   />


   <button className='button' onClick={handleLogIn}>Login</button>
   </div>
   </div>
   </div>
   </div>
   </Container>
  )
}

const Container = styled.div`
position:relative;
.content{
  position:absolute;
  height:100vh;
  width:100vw;
  display:grid;
  grid-template-rows:15vh 70vh;
  top:0;
  left:0;
  background-color:rgb(0,0,0,0.8);
  .form-container{
    gap:2rem;
    height:85vh;
    .form{
      background-color:rgb(0,0,0,0.8);
      padding:2rem;
      width:25vw;
      gap:2rem;
      color:white;
      .container{
        gap:2rem;
      input{
        padding:0.5rem 1rem;
        width:15rem;
      }
    }
      .button{
        padding:0.5rem 1rem;
        background-color:#E50914;
        border:none;
        cursor:pointer;
        color:white;
        border-radius:0.2rem;
        font-weight:bolder;
        font-size:1.05rem;
       }
    }
  }
}
`;



export default Login;