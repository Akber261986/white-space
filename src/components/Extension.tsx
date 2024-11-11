import Image from "next/image";
import Button from "./buttons/Button";

const Extension = () => {
  return (

    <div className='flex flex-col md:flex-row justify-evenly items-center mt-4 bg-[#043873] text-white'>
    <div className='flex flex-1 flex-col justify-between items-center gap-6 md:items-start p-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-start z-10 '>Use as Extension</h1>
        <Image
          src={"/svg/yellow-line.svg"}
          alt="line"
          width={254}
          height={40}
          className="-mt-10 xl:ml-36 "
          />
          <p className='text-center md:text-start text-[18px] font-normal '>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
          <Button 
          label={`Let's Go`}
          />
    </div>
    <div className='flex-1 flex justify-center items-center p-5 '>
        <Image
        src={"/pngImages/bg-light-blue.png"}
        alt='image'
        width={448}
        height={548}
        />
    </div>
  </div>
  )
}

export default Extension
