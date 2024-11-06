import Image from "next/image";
import Button from "./buttons/Button";

const Extension = () => {
  return (
    <div className='flex 2xl:justify-center bg-[#043873]' >
        <div className='flex flex-col md:flex-row justify-evenly items-center 2xl:w-[1535px]  h-[813px] sm:h-[1051px] md:h-[641px] '>
        <div className='flex flex-1 flex-col gap-12 items-center md:items-start md:h-[361px] py-2 px-8'>
            <h1 className='text-4xl sm:text-6xl font-bold text-center md:text-start z-10 '>Use as Extension
            </h1>
            <Image
            src={"/svg/yellow-line.svg"}
            alt="line"
            width={254}
            height={40}
            className="-mt-16 xl:ml-60"
            />
            <p className='text-center md:text-start text-[18px] font-normal '>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
            <Button 
            label={`Let's Go`}
            />
        </div>
        <div className='flex-1 px-8'>
            <Image
            src={"/pngImages/bg-light-blue.png"}
            alt='image'
            width={748}
            height={548}
        
            />
        </div>
        </div>
    </div>
  )
}

export default Extension
