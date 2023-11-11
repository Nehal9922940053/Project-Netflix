import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import backgroundImage from '../assets/home.jpg';
import MovieLogo from '../assets/homeTitle.webp';
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { current } from '@reduxjs/toolkit';



const Netflix = () => {
  const navigate = useNavigate();

  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
   const movies = useSelector((state)=>state.netflix.movies) 

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getGenres())
  },[]
  );


  useEffect(()=>{
   if(genresLoaded) dispatch(fetchMovies({type:"all"}))
  },[genresLoaded]
  );

   

  const [isScrolled, setIsScrolled] = useState(false);
  
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return  () => (window.onscroll = null)
  }

  
  onAuthStateChanged(firebaseAuth,(currentUser) =>{
    if(!currentUser) navigate("/login");
  });



  // console.log(movies);
  return (
    <Container className='netflixContainer'> 
    <Navbar isScrolled={isScrolled}/>
    <div className="hero">
    <img src={backgroundImage} className='background-image' alt='bgImage'/>
    <div className="container">
    <img src={MovieLogo} className='movieLogo' alt='Movie-title'/>
    
    
    <div className="buttons flex">
    <button
    onClick={()=> navigate("/player")}
    className='flex j-center a-center'
    >
    <FaPlay/>
    Play
    </button>

    <button className='flex j-center a-center'>
    <AiOutlineInfoCircle/>
    More Info
    </button>
    </div>
    </div>
    </div>
    {/*inside slider pass props of movies  */}
   
   
    <Slider movies={movies}/>
    </Container>
  )
}


const Container = styled.div `

background-container:black;
.hero{
  position:relative;
  .background-image{
    filter:brightness(60%);
  }
  img{
    width:100%;
    height:100%;
  
  }
  .container{
    position:absolute;
    bottom:20rem;
    margin-left:5rem;
    .logo{
      img{
        width:100%;
        height:100%;
        margin-left:5rem;
      }
    }
  }
}

.buttons{
  margin:5rem;
  gap:2rem;
  button{
    font-size:1.4rem;
    gap:1rem;
    border-radius:0.2rem;
    padding:0.5rem 2rem 0.5rem 2.4rem;
    border:none;
    cursor:pointer;
    transition:0.2s ease-in-out;
    &:hover{
      opacity:0.8;
    }
    &:nth-of-type(2){
      background-color:rgba(109,109,110,0.7);
      color:white;
      svg{
        font-size:1.8rem;
      }
    }
  }
}


`;

export default Netflix