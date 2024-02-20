import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import './CSS/Testimony.css'
import chan from './MyImages/chan.jpg'
import shelly from './MyImages/shelly.jpg'
import sam from './MyImages/sam.jpg'
import excellent from './MyImages/excellent.jpg'
import ramesh from './MyImages/ramesh.jpg'
import outstanding from './MyImages/outstanding.jpg'
/* pagination */
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/* import {pagination} from 'swiper'
import 'swiper/css/pagination' */


import 'swiper/css'

/* import SwiperCore, { Pagination } from 'swiper/core';

SwiperCore.use([Pagination]); */

function Testimony() {

    const clients=[
       /*  {
            img:'',
            review:'',
        }, */
        {    name:'Sam',
            img:chan,
            review:'Such a Delightful Experience to Work with Abhi.He is just Awesome, Looking to collaborate with him again soon.',
        },
        {    name:'Rachael',
            img:shelly,
            review:'Great service! I highly recommend it.',
        },
        {    name:'Abel',
            img:sam,
            review:'Fantastic experience. Will definitely use it again.',
        },
        {    name:'Sophia',
            img:excellent,
            review:'Really nice!.',
        },
        {    name:'David',
            img:ramesh,
            review:'He has got good grip over what he does, moreover a quick problem solver. Abhi is there then why fear.',
        },
        {    name:'Jessy',
            img:outstanding,
            review:'Such a nice Experience.Outstanding, Initially was confused but then he just nailed it, must praise for the UI & UX.',
        }
    ]
  return (
    <>
     <h1 className='testi'>TESTIMONIES</h1>
    <div className='t-wrapper'>
        <div className='t-heading'>
           
            <Swiper
          /*   modules={[pagination]}
            slidesPerView={1}
            pagination={{clickable:true}} */
            /* spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      loop={true} */


      /* pagia */
      loop={true}
      grabCursor={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
       >

                {clients.map((clients,i)=>{
                    return (
                        <>
                        
                        <SwiperSlide key={i}>
                       
                         <h3>{clients.name}</h3>
                            <img src={clients.img} className='img-fluid rounded-circle'/>
                            <h4>{clients.review}</h4>
                        </SwiperSlide>
                        
                        </>
                    )
                })}

            </Swiper>
        </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Testimony