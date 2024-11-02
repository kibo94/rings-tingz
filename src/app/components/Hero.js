"use client";
import Image from "next/image";
import useBannersData from "../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function Hero() {
    const { data: items, error, isLoading } = useBannersData("/banners/2");
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading baner items</div>;
    return (
        <div>
            <div
                className="bg-black p-1 text-white text-center text-sm"
            >
                <p>GET YOUR DISCOUNT COUPON -10% FOR NEW ORDERS</p>
            </div>
            <Swiper
                pagination={{
                    type: "progress",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {items &&
                    items.map((item, index) => (
                        <SwiperSlide key={index} className="w-full">
                            <Image
                                src={item.image[0]}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100vw", height: "650px" }}
                                alt={item.slug}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default Hero;
