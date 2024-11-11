import Image from "next/image";
import Button from "./buttons/Button";

const ProjectManagement = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse justify-evenly items-center mt-4'>
      <div className='flex flex-1 flex-col justify-between items-center gap-6 md:items-start p-8'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-start '>Project Management</h1>
             <Image
            src={"/svg/yellow-line.svg"}
            alt="line"
            width={254}
            height={40}
            className="-mt-10 lg:ml-60 -z-10"
            />
          <p className='text-center md:text-start text-[18px] font-normal '>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          <Button 
          label='Get Started'
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

export default ProjectManagement
