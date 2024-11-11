"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import Button from './buttons/Button';
import WhiteButton from './buttons/WhiteButton';
import { posts } from '../../data/posts';

const Plan = () => {
  return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col pb-12 px-4'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-center z-10'>Choose Your Plan
                </h1>
                <Image
                src={"/svg/yellow-line.svg"}
                alt="line"
                width={254}
                height={40}
                className="self-end md:mx-60  mt-[-20px] -z-10"
                />
                <p className='text-center text-[18px] font-normal '>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for You.</p>
            </div>
            <div className='max-w-[20rem] h-[40rem] py-2 md:hidden '>
                <Swiper
                pagination={{ clickable: true}}
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,  
                }}
                >
                {posts.map((post, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col justify-between max-w-[20rem] h-[35rem] bg-[#043873] rounded-lg p-5 border border-[#FFE492] text-white">
                            <div className='flex flex-col justify-between h-[150px] text-[#FEFEFE]'>
                                <h1 className='text-2xl font-semibold'>{[post.title]}</h1>
                                <h1 className='text-[#FFE492] text-4xl font-bold'>${post.price}</h1>
                                <p>{post.content}</p>
                            </div>
                            <div className='h-[340px] flex flex-col justify-between text-[#FEFEFE]'>
                                <span className='flex just gap-5'>
                                    <Image
                                    src={post.image}
                                    alt='bullet'
                                    width={18}
                                    height={18}
                                    />
                                    <p>{post.bullet1}</p>
                                </span>
                                <span className='flex just gap-5'>
                                    <Image
                                    src={post.image}
                                    alt='bullet'
                                    width={18}
                                    height={18}
                                    />
                                    <p>{post.bullet2}</p>
                                </span>
                                <span className='flex just gap-5'>
                                    <Image
                                    src={post.image}
                                    alt='bullet'
                                    width={18}
                                    height={18}
                                    />
                                    <p>{post.bullet3}</p>
                                </span>
                                <span className='flex just gap-5'>
                                    <Image
                                    src={post.image}
                                    alt='bullet'
                                    width={18}
                                    height={18}
                                    />
                                    <p>{post.bullet4}</p>
                                </span>
                                <span className='flex just gap-5'>
                                    <Image
                                    src={post.image}
                                    alt='bullet'
                                    width={18}
                                    height={18}
                                    />
                                    <p>{post.bullet5}</p>
                                </span>
                                <span className='flex just gap-5'>
                                    <Image
                                    src={post.image}
                                    alt='bullet'
                                    width={18}
                                    height={18}
                                    />
                                    <p>{post.bullet6}</p>
                                </span>
                            </div>
                            <Button label='Get Started' />
                        </div>
                    </SwiperSlide>
                ))} 
                </Swiper>
            </div>
            <div className='hidden md:flex items-center gap-4 h-[40.5rem]'>
            {posts.map((post, index) => (
                <div key={index}>
                    <div className="group flex flex-col justify-between max-w-[20rem] h-[35rem] hover:bg-[#043873] rounded-lg p-5 border border-[#FFE492] hover:scale-110 duration-500">
                        <div className='flex flex-col justify-between h-[150px] group-hover:text-[#FEFEFE] '>
                            <h1 className='text-2xl font-semibold'>{[post.title]}</h1>
                            <h1 className='group-hover:text-[#FFE492] text-4xl font-bold'>${post.price}</h1>
                            <p>{post.content}</p>
                        </div>
                        <div className='h-[340px] flex flex-col justify-between group-hover:text-[#FEFEFE]'>
                            <span className='flex just gap-5'>
                                <Image
                                src={ post.image }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='hidden group-hover:block'
                                />
                                <Image
                                src={ post.imageB }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='group-hover:hidden'
                                />
                                <p>{post.bullet1}</p>
                            </span>
                            <span className='flex just gap-5'>
                            <Image
                                src={ post.image }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='hidden group-hover:block'
                                />
                                <Image
                                src={ post.imageB }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='group-hover:hidden'
                                />
                                <p>{post.bullet2}</p>
                            </span>
                            <span className='flex just gap-5'>
                            <Image
                                src={ post.image }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='hidden group-hover:block'
                                />
                                <Image
                                src={ post.imageB }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='group-hover:hidden'
                                />
                                <p>{post.bullet3}</p>
                            </span>
                            <span className='flex just gap-5'>
                            <Image
                                src={ post.image }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='hidden group-hover:block'
                                />
                                <Image
                                src={ post.imageB }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='group-hover:hidden'
                                />
                                <p>{post.bullet4}</p>
                            </span>
                            <span className='flex just gap-5'>
                            <Image
                                src={ post.image }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='hidden group-hover:block'
                                />
                                <Image
                                src={ post.imageB }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='group-hover:hidden'
                                />
                                <p>{post.bullet5}</p>
                            </span>
                            <span className='flex just gap-5'>
                            <Image
                                src={ post.image }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='hidden group-hover:block'
                                />
                                <Image
                                src={ post.imageB }
                                alt='bullet'
                                width={18}
                                height={18}
                                className='group-hover:hidden'
                                />
                                <p>{post.bullet6}</p>
                            </span>
                        </div>
                        <WhiteButton label='Get Started' />
                    </div>
                </div>
            ))} 
            </div>
        </div>
  )
}

export default Plan
