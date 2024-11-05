import Image from 'next/image'
import Button from './buttons/Button'

const Hero = () => {
  return (
    <div className='flex 2xl:justify-center bg-[url("/pngImages/bgblue.JPG")]' >
        <div className='flex flex-col md:flex-row justify-evenly items-center 2xl:w-[1535px]  h-[813px] sm:h-[1051px] md:h-[641px] text-white '>
        <div className='flex flex-1 flex-col justify-around items-center md:items-start md:h-[361px] py-2 px-8'>
            <h1 className='text-4xl sm:text-6xl font-bold text-center md:text-start '>Get More Done with whitepace</h1>
            <p className='text-center md:text-start text-[18px] font-normal '>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            <Button 
            label='Try Whitespace free'
            />
        </div>
        <div className='flex-1 px-8'>
            <Image
            src={"/pngImages/bg-light-blue.png"}
            alt='image'
            width={424}
            height={549}
            className='sm:w-[551px] md:w-[470px] lg:w-[685px] xl:w-[824px] sm:h-[367px] md:h-[350px] lg:h-[456px] xl:h-[500px]'
            />
        </div>
        </div>
    </div>
  )
}

export default Hero
