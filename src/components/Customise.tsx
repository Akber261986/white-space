import Image from "next/image";
import Button from "./buttons/Button";

const Customise = () => {
  return (

    <div className='flex flex-col md:flex-row-reverse justify-evenly items-center mt-4'>
    <div className='flex flex-1 flex-col justify-between items-center gap-6 md:items-start p-8'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-start z-10 '>Customise it to your needs</h1>
        <Image
          src={"/svg/yellow-line.svg"}
          alt="line"
          width={254}
          height={40}
          className="-mt-10 xl:ml-96 "
          />
          <p className='text-center md:text-start text-[18px] font-normal '>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
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


    // <div className='flex 2xl:justify-center' >
    //     <div className='flex flex-col md:flex-row-reverse justify-evenly items-center 2xl:w-[1535px]  h-[813px] sm:h-[1051px] md:h-[641px] '>
    //         <div className='flex flex-1 flex-col justify-around items-center md:items-start md:h-[361px] py-2 px-8'>
    //             <h1 className='text-4xl sm:text-6xl font-bold text-center md:text-start z-10 '>
    //             </h1>
    //             <Image
                
    //             alt="line"
    //             width={254}
    //             height={40}
    //             className="ml-20 -mt-16"
    //             />
    //             <p className='text-center md:text-start text-[18px] font-normal '></p>
    //             <Button 
    //             label={`let's Go`}
    //             />
    //         </div>
    //         <div className='flex-1 px-8'>
    //             <Image
                
    //             width={748}
    //             height={548}
    //             className='max-h-[548px]'
    //             />
    //         </div>
    //     </div>
    // </div>

  )
}

export default Customise
