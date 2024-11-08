import Image from "next/image";
import Button from "./buttons/Button";

const WorkTogether = () => {
  return (
<div className='flex 2xl:justify-center' >
        <div className='flex flex-col md:flex-row-reverse justify-evenly items-center 2xl:w-[1535px]  h-[813px] sm:h-[1051px] md:h-[641px] '>
        <div className='flex flex-1 flex-col justify-around items-center md:items-start md:h-[361px] py-2 px-8'>
            <h1 className='text-4xl sm:text-6xl font-bold text-center md:text-start z-10 '>Work Together
            </h1>
            <Image
            src={"/svg/yellow-line.svg"}
            alt="line"
            width={254}
            height={40}
            className="-mt-16 xl:ml-60"
            />
            <p className='text-center md:text-start text-[18px] font-normal '>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
            <Button 
            label='Try it now'
            />
        </div>
        <div className='flex-1 px-8'>
            <Image
            src={"/pngImages/Work Together Image.png"}
            alt='image'
            width={580}
            height={1}
            className='w-[28rem]'
            />
        </div>
        </div>
    </div>
  )
}

export default WorkTogether
