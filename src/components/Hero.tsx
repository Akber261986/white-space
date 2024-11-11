import Image from 'next/image'
import Button from './buttons/Button'

const Hero = () => {
  return (
    <div className='flex 2xl:justify-center bg-[url("/pngImages/bgblue.JPG")] bg-cover bg-center' >
        <div className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          <div className='flex flex-1 flex-col justify-between items-center gap-6 md:items-start p-8'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-start '>Get More Done with whitepace</h1>
              <p className='text-center md:text-start text-[18px] font-normal '>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
              <Button 
              label='Try Whitespace free'
              />
          </div>
          <div className='flex-1 flex justify-center items-center p-5 '>
              <Image
              src={"/pngImages/bg-light-blue.png"}
              alt='image'
              width={424}
              height={549}
              />
          </div>
        </div>
    </div>
  )
}

export default Hero
