import React, { useState } from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import {FaSearch, FaPowerOff} from "react-icons/fa";
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';



const Navbar = ({isScrolled}) => {

  const [showSearch,setShowSearch] = useState(false);
  const [inputHover,setInputHover] = useState(false);

    const links = [
        {name:'Home', link:'/'},
        {name:'Movies', link:'/movies'},
        {name:'TV Shows', link:'/tv'},
        {name:'My List', link:'/mylist'}
    ];
  return (
    <Container>
    <nav className={`${isScrolled ? "scrolled" : "" } flex`}>
       <div className="flex left a-center">
     
       <div className="brand flex a-center j-center">
         <img src={logo} alt='Netflix' />
       </div>

       <ul className='links flex'>
        {links.map(({name, link}) => {
          return(
          <li key={name}>
          <Link to={link}>{name}</Link>
          </li>
          );
        })}

       </ul>
       </div>

       <div className="right flex a-center">
       <div className={`search ${showSearch ? "show_search" : "" }`}>
       <button 
       onFocus={()=>setShowSearch(true)}
       onBlur={()=>{
        if (!inputHover) {
          setShowSearch(false);
        }
       }}
       >
       <FaSearch/>
       </button>

       <input type='text' placeholder='Search' onMouseEnter={()=>setInputHover(true)} onMouseLeave={()=>setInputHover(false)}
       onBlur={()=>{
        setShowSearch(false);
        setInputHover(false);
       }}
       
       />
       <button
       onClick={()=>
      signOut(firebaseAuth)
      }
      >

     <FaPowerOff/>
      </button>
       
       </div>
       </div>
    
    </nav>
    </Container>
  )
}


const Container = styled.div`
  .scrolled{
    background:black;
  }
nav{
  position:fixed;
  top:0;
  height:6.8rem;
  width:90%;
  justify-content:space-between;
  padding:0 4rem;
  align-items:center;
  z-index:2;
  // transition:0.3s ease-in-out;
  .left{
    gap:1rem;
    .brand{
      img{
        height:4rem;
        width:9.25rem;
      }
    }
  }

   
  
  .right{
    gap:1rem;
    button{
      background-color:transparent;
      border:none;
      cursor:pointer;
      &:focus{
        outline:none;
      }
      svg{
        color:white;
        font-size:1.2rem;
      }
    }
    .search{
      display:flex;
      gap:0.4rem;
      align-center:center;
      padding:0.2rem;
      padding-left:0.5rem;
      .button{
        background-color:transparent;
        border:none;
        cursor:pointer;
        &:focus{
          outline:none;
        }
      }
    }
    input{
      width:0;
      opacity:0;
      visibility:hidden;
      transition:0.3s ease-in-out;
      background-color:transparent;
      border:none;
      color:white;
      &:focus{
        outline:none;
      }
    }

    .show_search{
      border:1px solid white;
      background-color:rgba(0,0,0,0.6);
      input{
        width:100%;
        opacity:1;
        visibility:visible;
        padding:0.3rem;
      }
    }
  }
}

 .links{
      list-style-type:none;
      gap:2rem;
      li{
        a{
          color:white;
          text-decoration:none;
        }
      }
    }    




`;

export default Navbar