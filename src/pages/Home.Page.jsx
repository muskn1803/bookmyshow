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

   return (
     <>
       <HeroCarousel />

       <div className="container mx-auto px-4 md:px-12 my-8">
         <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
           The Best of Entertainment{" "}
         </h1>
         <EntertainmentCardSlider />
       </div>

       <div className="container mx-auto px-4 md:px-12 my-8">
         <PosterSlider
           title="Recommended Movies"
           subject="List of Recommended Movies"
           posters={recommendedMovies}
           isDark={false}
         />
       </div>
       <div className="bg-premier-800 py-12">
         <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
           <div className="hidden md:flex">
             <img
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1280px-RuPay.svg.png"
               alt="rupay"
               className="w-full h-full"
             />
           </div className="container mx-auto px-4 md:px-12 flex flex-col gap-3">
           <PosterSlider
             title="Online Streaming Events"
             subject="Brand new release every friday"
             posters={onlineStreamEvents}
             isDark={false} />
         </div>
       </div>
       <><div></div></>
     </>
   );
   };

export default DefaultlayoutHoc(HomePage); 
