import Image from "next/image";
import Button from "./buttons/Button";

const WorkTogether = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse justify-evenly items-center mt-4'>
      <div className='flex flex-1 flex-col justify-between items-center gap-6 md:items-start p-8'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-start '>Work Together</h1>
          <Image
            src={"/svg/yellow-line.svg"}
            alt="line"
            width={254}
            height={40}
            className="-mt-10 lg:ml-36 -z-10"
            />
            <p className='text-center md:text-start text-[18px] font-normal '>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
            <Button 
            label='Try it now'
            />
      </div>
      <div className='flex-1 flex justify-center items-center p-5 '>
      <Image
            src={"/pngImages/Work Together Image.png"}
            alt='image'
            width={380}
            height={1}
            />
      </div>
    </div>
  )
}

export default WorkTogether
