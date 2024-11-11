import Image from 'next/image';
import Button from './buttons/Button';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-[#043873] text-white'>
      <div className='flex w-full 
      md:justify-center'>
        <div className='w-72 h-[464px] flex flex-col justify-around p-6
        sm:w-[608px]
        md:items-center md:px-36'>
            <h1 className='text-4xl md:text-center'>Try Whitespace today</h1>
            <p className='md:text-center'>Get started for free. Add your whole team as your needs grow.</p>
            <Button label='Try taskey free' />
            <p>On a big team? Contact sales</p>
            <div className='w-[185px] flex justify-between'>
                <Link href={""}>
                    <Image 
                    src={"/pngImages/apple-white.png"}
                    alt='Apple'
                    width={35}
                    height={1}
                    />
                </Link>
                <Link href={""}>
                    <Image 
                    src={"/pngImages/windows-logo.png"}
                    alt='Apple'
                    width={35}
                    height={1}
                    />
                </Link>
                <Link href={""}>
                    <Image 
                    src={"/pngImages/android-logo.png"}
                    alt='Apple'
                    width={35}
                    height={1}
                    />
                </Link>
            </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col justify-around items-center h-[76rem] px-6
        sm:items-start
        md:flex-row md:h-auto'>
            <div className='flex flex-col justify-between items-center h-[160px]
            sm:items-start sm:pr-48
            md:pr-0 md:w-60'>
            <Image 
                src={"/pngImages/Logo.png"}
                alt='logo'
                width={191}
                height={34}
                />
                <p className='text-center sm:text-start py-4 px-8 sm:px-0'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
            </div>
            <div className='flex flex-col justify-around items-center h-[160px]
            sm:items-start'>
                <h1 className='text-lg font-bold'>Product</h1>
                <Link href={""} className='hover:text-[#FFE492]'>Overview</Link>
                <Link href={""} className='hover:text-[#FFE492]'>Pricing</Link>
                <Link href={""} className='hover:text-[#FFE492]'>Customer stories</Link>
            </div>
            <div className='flex flex-col justify-around items-center h-[160px]
            sm:items-start'>
                <h1 className='text-lg font-bold'>Resources</h1>
                <Link href={""} className='hover:text-[#FFE492]'>Blog</Link>
                <Link href={""} className='hover:text-[#FFE492]'>Guides & tutorials</Link>
                <Link href={""} className='hover:text-[#FFE492]'>Help center</Link>
            </div>
            <div className='flex flex-col justify-around items-center h-[160px]
            sm:items-start'>
                <h1 className='text-lg font-bold'>Company</h1>
                <Link href={""} className='hover:text-[#FFE492]'>About us</Link>
                <Link href={""} className='hover:text-[#FFE492]'>Careers</Link>
                <Link href={""} className='hover:text-[#FFE492]'>Media kit</Link>
            </div>
            <div className='flex flex-col justify-around items-center w-[200px] h-[242px]
            sm:items-start'>
                <h1 className='text-3xl font-bold'>Try it Today</h1>
                <p className='text-center sm:text-start'>Get started for free. Add your whole team as your needs grow.</p>
                <Button label='Start today' />
            </div>
        </div>  
        <div className=' flex flex-col items-center justify-around h-[268px] px-6
        sm:items-start sm:h-[150px]
        md:flex-row md:items-center md:justify-between md:h-6'>
            <div className='flex flex-col items-center justify-between h-[200px]
            sm:flex-row sm:h-10 sm:w-full
            md:w-3/4'>
                <div className='flex gap-2'>
                <Image 
                    src={"/svg/world.svg"}
                    alt='world'
                    width={19}
                    height={19}
                    />
                    <p>English</p>
                    <Image 
                    src={"/svg/down-arrow.svg"}
                    alt='Arrow'
                    width={12}
                    height={12}
                    />
                </div>
                <p>Terms & privacy</p>
                <p>Security</p>
                <p>Status</p>
                <p>©2024 Whitepace LLC.</p>
            </div>
            <div className='w-[105px] flex justify-between items-center pb-8 md:pb-0'>
                <Link href={""}>
                    <Image
                    src={"/svg/Facebook.svg"}
                    alt='facebook'
                    width={9}
                    height={16}
                    />
                </Link>
                <Link href={""}>
                    <Image
                    src={"/svg/Twitter.svg"}
                    alt='twitter'
                    width={17}
                    height={13}
                    />
                </Link>
                <Link href={""}>
                    <Image
                    src={"/svg/Linkedin.svg"}
                    alt='Linkedin'
                    width={15}
                    height={15}
                    />
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
