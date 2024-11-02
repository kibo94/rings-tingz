'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import Button from './Button';
function InstagramFeeds() {
    return (
        <div className={`md:mb-24 mb-12`}>

            <div className='flex w-full items-center md:flex-row flex-col md:items-end flex-col-reverse '>
                <div className='w-full md:w-1/2 '>
                    <div className="flex-grow max-w-full overflow-hidden w-full h-full">
                        <Swiper
                            scrollbar={{ hide: true, }}
                            color='#333'

                            slidesPerView={3}
                            modules={[Scrollbar]}
                            className="mySwiper pb-3">
                            <SwiperSlide >
                                <Image src='/Baneri/Screenshot 2024-10-31 223206.png' width={200} height={200} className='p-2' alt="feed1" />
                            </SwiperSlide>
                            <SwiperSlide >
                                <Image src='/Baneri/Screenshot 2024-10-31 223256.png' width={200} height={200} className='p-2' alt="feed2" />
                            </SwiperSlide>
                            <SwiperSlide >
                                <Image src='/Baneri/Screenshot 2024-10-31 223314.png' width={200} height={200} className='p-2' alt="feed3" />
                            </SwiperSlide>
                            <SwiperSlide >
                                <Image src='/Baneri/Screenshot 2024-10-31 223314.png' width={200} height={200} className='p-2' alt="feed3" />
                            </SwiperSlide>
                            <SwiperSlide >
                                <Image src='/Baneri/Screenshot 2024-10-31 223314.png' width={200} height={200} className='p-2' alt="feed3" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className='w-full md:w-1/2 relative'>
                    <div className="flex flex-col  gap-2 ">
                        <h3 className={`text-2xl   m-0 p-0 font-jost-500 `}>Be our instagram follower</h3>
                        <p className="normal-case pt-0 pb-1">Our latest posts <br /> Profile: @ringz&tingz</p>
                        <Button text='Follow' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InstagramFeeds