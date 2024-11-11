"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { clientPost } from '../../data/posts';

const Clients = () => {
    

  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col mt-8'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center z-10'>What Our Clients Says
            </h1>
            <Image
            src={"/svg/yellow-line.svg"}
            alt="line"
            width={254}
            height={40}
            className="max-sm:w-40 self-end md:mx-24 lg:mx-48 mt-[-20px] -z-10"
            />
        </div>
        <div className='w-screen h-[32rem] md:h-[35rem] py-2 md:hidden'>
            <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}    
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
            {clientPost.map((post, index) => (
                <SwiperSlide key={index}
                >
                <div className='w-screen flex justify-center px-4 '>
                    <div className="group max-w-[21.3rem] h-[28.5rem] flex flex-col justify-between bg-[#4F9CF9] hover:bg-white rounded-lg p-8 border border-[#FFE492] ">
                        <div className='flex flex-col text-white group-hover:text-black gap-6'>
                            <Image 
                            src={post.quoteImageWhite}
                            alt='quote'
                            width={56}
                            height={61}
                            className='group-hover:hidden'
                            />
                            <Image 
                            src={post.quoteImageBlue}
                            alt='quote'
                            width={56}
                            height={61}
                            className='hidden group-hover:block'
                            />
                            <p>{post.comment}</p>
                            <div className='h-px bg-white group-hover:bg-black'></div>
                        </div>
                        <div className=''>
                            <Image 
                            src={post.image}
                            alt='Client'
                            width={65}
                            height={95}
                            className={`w-16 h-16 rounded-full`}
                            />
                            <div className=' text-white group-hover:text-black'>
                                <h1 className='text-lg font-semibold text-[#043873]'>{post.name}, {post.post} </h1>
                                <p>{post.workAs}, {post.addres} </p>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            ))} 
            </Swiper>
        </div>
        <div className='justify-center  w-screen h-[32rem] py-2 hidden md:flex '>
            <div className='w-[95%]'>
            <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            spaceBetween={5}    
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
            {clientPost.map((post, index) => (
                <SwiperSlide key={index}
                >
                <div className='w-full grid grid-cols-3 justify-center'>
                    <div className="group w-[24rem] h-[24rem] flex flex-col justify-around bg-[#4F9CF9] hover:bg-white rounded-lg p-4 border border-[#FFE492] ">
                        <div className='flex flex-col text-white group-hover:text-black gap-6'>
                            <Image 
                            src={post.quoteImageWhite}
                            alt='quote'
                            width={56}
                            height={61}
                            className='group-hover:hidden'
                            />
                            <Image 
                            src={post.quoteImageBlue}
                            alt='quote'
                            width={56}
                            height={61}
                            className='hidden group-hover:block'
                            />
                            <p>{post.comment}</p>
                            <div className='h-px bg-white group-hover:bg-black'></div>
                        </div>
                        <div className='flex gap-8'>
                            <Image 
                            src={post.image}
                            alt='Client'
                            width={95}
                            height={95}
                            className={`w-24 h-24 rounded-full`}
                            />
                            <div className='flex flex-col justify-center gap-2 text-white group-hover:text-black'>
                                <h1 className='text-2xl font-semibold text-[#043873]'>{post.name}, {post.post} </h1>
                                <p>{post.workAs}, {post.addres} </p>
                            </div>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            ))} 
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Clients
