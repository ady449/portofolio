import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SimpleCard from "../Card";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './app.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel({projects}) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((project, ind) => (
            
        <SwiperSlide key={ind}>
          <SimpleCard color={"bg-[#466373]"} title={project.title} desc={project.desc} tags={project.tags} comp={project.comp}/>
        </SwiperSlide>
          ))}
        
      </Swiper>
    </>
  );
}
