
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import useRecommendedItems from '../hooks/useFetch';
import Button from './Button';

function NewIn() {
    const { data: items, error, isLoading } = useRecommendedItems("/products/section/list/recommendation", {
        limit: 8,
        sort: {
            'field': "price",
            'direction': 'asc'
        }
    });
    console.log(items)
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading recommended items</div>;
    return (
        <div className="md:mt-24 mt-12 overflow-hidden">
            <div className="flex items-start gap-8 md:justify-center md:items-center md:flex-row flex-col">
                <div className="flex flex-col mr-20 w-1/10">
                    <h3 className="text-2xl  font-jost-500 m-0 p-0">New in</h3>
                    <p className="normal-case pt-0 pb-1">Explore new collection</p>
                    <Button text='See all products' />
                </div>
                <div className="flex-grow max-w-full overflow-hidden md:w-3/4 w-full">
                    <Swiper
                        scrollbar={{ hide: true, }}
                        slidesPerView={3}

                        modules={[Scrollbar]}
                        className="mySwiper pb-3"
                    >
                        {items && items.map((item, index) => (
                            <SwiperSlide key={index} className='pb-4'>
                                <Image src={item.image_data[0].url} width={100} height={100} className='mb-10' alt={item.slug} />
                                <h4 className='text-primary text-xs'>{item.basic_data.brand_name == null ? "Brand Name" : item.basic_data.brand_name}</h4>
                                <p className="text-sm"> {item.basic_data.name != null ? item.basic_data.name : "PATHNERE DE CARTIER BRACELET"}  </p>
                                <div className='flex mt-2'>
                                    <h5 className='font-jost-400' style={{ "textDecoration": item.price.discount.active ? " line-through" : 'none' }}>{item.price.price.original}
                                        {item.price.currency}</h5>
                                    {item.price.discount.active ? <h5 className='font-jost-400 ml-2' > {item.price.price.discount}
                                        {item.price.currency}</h5> : null
                                    }
                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default NewIn