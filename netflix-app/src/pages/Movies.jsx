import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import {firebaseAuth} from "../utils/firebase-config";
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenres from '../components/SelectGenres';
import {onAuthStateChanged} from 'firebase/auth';


const Movies = () => {
    const navigate = useNavigate();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
  const movies = useSelector((state)=>state.netflix.movies) 
  const genres = useSelector((state)=>state.netflix.genres) 
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getGenres())
  }, []
  );


  useEffect(()=>{
   if(genresLoaded){
    dispatch(fetchMovies({type:"movies"}))
   }
  },[genresLoaded]
  );

   
  const [user, setUser] =useState(undefined);
  const [isScrolled, setIsScrolled] = useState(false);
  
  window.onscroll =()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return  () => (window.onscroll = null)
  }


onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) setUser(currentUser.uid);
    else navigate("/login");
  })

  return (
      
   <Container> 
   <div className="navbar">
   <Navbar isScrolled={isScrolled}/>
   </div>

   <div className="data">
   <SelectGenres genres={genres} type="movie"/>
   {
    movies.length ? <Slider movies={movies}/> : <NotAvailable/>
   }
   </div>
   </Container>
    
  );
}

const Container = styled.div`
.data{
    margin-top:8rem;
    .not-available{
        text-align:center
        color:white;
        margin-top:4rem;
    }
  }
`;
export default Movies;