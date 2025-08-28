"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { certifications } from "@/data";
import { Certification } from "@/types";


const certificates: Certification[] = certifications as Certification[];

const ImageCarousel: React.FC = () => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="w-full max-w-2xl mx-auto overflow-hidden py-1 relative active:opacity-60">
            <Swiper
                ref={swiperRef}
                slidesPerView={1}           // Only 1 image at a time
                autoplay={{ delay: 2300, disableOnInteraction: false }}
                loop={true}                 // Infinite scrolling
                modules={[Autoplay, Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="mySwiper"
            >
                {certificates.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <a href={item.link1} target="_blank" className="hover:bg-blue-500">
                            <Image
                                src={item.img}
                                alt={`Slide ${idx}`}
                                width={800}
                                height={500}
                                priority={idx === 0}    // only first image gets priority (fixes LCP warning)
                                className='w-full h-60 object-cover rounded-lg shadow-md'
                                style={{ objectFit: "cover" }}
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 left-2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transform -translate-y-1/2"
            >
                ❮
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 right-2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 transform -translate-y-1/2"
            >
                ❯
            </button>
        </div>
    );
}

export default ImageCarousel;
