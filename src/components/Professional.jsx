import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Professional() {
  return (
    <section className="bg-primary text-[#F6C8F6] text-2xl">
      <div className="py-7">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          speed={1800}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: -900,
            disableOnInteraction: false,
          }}
          loop={true}>
          <SwiperSlide className="text-center font-semibold ">
            Professional & Friendly Team
          </SwiperSlide>

          <SwiperSlide className="text-center font-semibold">
            Safety First
          </SwiperSlide>

          <SwiperSlide className="text-center font-semibold">
            On-Time Delivery
          </SwiperSlide>

          <SwiperSlide className="text-center font-semibold">
            Free Experience
          </SwiperSlide>
          <SwiperSlide className="text-center font-semibold ">
            Stress-Free Experience
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Professional;
