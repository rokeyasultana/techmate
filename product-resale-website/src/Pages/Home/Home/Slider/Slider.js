import React from 'react';
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import './Slider.css';
const Slider = () => {
    return (
        <div>
           <div className="container mb-5">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://4.imimg.com/data4/UY/FY/GLADMIN-181440/samsung-laptop-500x500.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.mos.cms.futurecdn.net/jY9kxVCGrfeb9ByeVqzjtR.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://c1.wallpaperflare.com/preview/890/693/291/apple-macbook-laptop-dark.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://image.coolblue.be/max/1024x768/content/3d2602f3b3a8d4fe5dfb8417d780bf9f"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6372/6372667_sd.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/hp-laptop-buying-guide-hero1547426745816.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2020/12/macbook-2048px-9.jpg?auto=webp&quality=60&crop=1.91:1&width=1200"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.nexus.com.bd/images/blog/6/lenovo-laptop-price-in-bangladesh.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.dpreview.com/files/p/articles/4199121106/microsoft-surface-pro-9-2.jpeg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>   
        </div>
    );
};

export default  Slider ;
