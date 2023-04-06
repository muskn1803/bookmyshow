import React, { useState } from 'react';

// Layout HOC

import DefaultlayoutHoc from '../layout/Default.layout';

//Components

import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.Component';



const HomePage = () => {
   const [recommendedMovies, setRecommendedMovies] = useState([]);
   const [premiumMovies, setPremiumMovies] =useState([]);
   const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

   return <>
   
   </>
      

   

}

export default DefaultlayoutHoc(HomePage); 
