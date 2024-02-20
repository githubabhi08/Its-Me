import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import mart from './MyImages/mart.png'
import quiz from './MyImages/quiz.png'
import todo from './MyImages/todo.png'
import pages from './MyImages/pages.png'
import tempo from './MyImages/tempo.png'
import 'swiper/css';
import './App.css'
import {magic} from './App'
const MySwiper = () => {
  const{setdata}=useContext(magic)
  return (
    <>

  




    <div className='portfolio'>
    <h1>PROJECTS</h1>
      <Swiper 
      spaceBetween={30}
      slidesPerView={2}
      grabCursor={true}
      /* className='portfolio-slider' */
      loop={true}
     /*  navigation
      pagination={{ clickable: true }} */
      >
      <SwiperSlide>
        <h2>E-COMMERCE WEBSITE</h2>
        <img onClick={()=>{setdata('mart')}} src={mart} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
      <h2>MY QUIZ</h2>
        <img onClick={()=>{setdata('jesus')}} src={quiz} alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
      <h2>MY TO-DO APP</h2>
        <img onClick={()=>{setdata('todo')}} src={todo} alt="Image 3" /> 
      </SwiperSlide>



      <SwiperSlide>
      <h2>PAGINATION</h2>
        <img onClick={()=>{setdata('pages')}} src={pages} alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
      <h2>KNOW TEMPERATURE</h2>
        <img onClick={()=>{setdata('temp')}} src={tempo} alt="Image 2" />
      </SwiperSlide>
      
      {/* Add more SwiperSlides for additional images */}
    </Swiper>
    </div>
    </>
  );
};

export default MySwiper;