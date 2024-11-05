'use client'

import Image from "next/image"
import { useState } from "react"
import Button from "./buttons/Button";

const Header = () => {

  const [show, setShow] = useState<boolean> (false);

  const handleShowMenu = () => {
    setShow(!show)
  }

  return (
    <div className="bg-[#043873]">
      <div className=' flex items-center h-[56px] sm:h-[66px] md:h-[92px] px-4  md:px-8 lg:px-8 2xl:px-[110px] '>
          <div className='w-48 h-9'>
              <Image 
              src={"/Logo.png"}
              alt="logo"
              width={134}
              height={24}
              className="w-[134px] sm:w-[191px] md:w-[] h-6 sm:h-[34px]"
              />
          </div>
          <div className={`${show ? "flex" : "hidden"} flex flex-col absolute right-0 top-0 md:top-[92px] lg:top-3 lg:right-[450px] xl:right-[500px] 2xl:right-[650px] lg:flex lg:flex-row items-center lg:justify-end pt-8 lg:p-0 bg-[#212529] lg:bg-transparent gap-[60px] w-[300px] lg:w-[551px] h-[500px] lg:h-[60px]`}>
            <div>
            <ul className="flex flex-col lg:flex-row gap-8">
              <li className="flex gap-[10px] text-white">
                <span>Products</span>
                <Image 
                src={"/svg/down-arrow.svg"}
                alt="Icon"
                width={9}
                height={4}
                />
              </li>
              <li className="flex gap-[10px] text-white">
                <span>Solutions</span>
                <Image 
                src={"/svg/down-arrow.svg"}
                alt="Icon"
                width={9}
                height={4}
                />
              </li>
              <li className="flex gap-[10px] text-white">
                <span>Resources</span>
                <Image 
                src={"/svg/down-arrow.svg"}
                alt="Icon"
                width={9}
                height={4}
                />
              </li>
              <li className="flex gap-[10px] text-white">
                <span>Pricing</span>
                <Image 
                src={"/svg/down-arrow.svg"}
                alt="Icon"
                width={9}
                height={4}
                />
              </li>
            </ul>
            </div>
            <div className="flex flex-col items-center gap-6 md:hidden">
              <button className="text-center content-center text-[#043873] text-[18px] font-medium w-[126px] h-[60px] bg-[#FFE492] rounded-lg">
                Login
              </button>
              {/* <Button /> */}
            </div>
          </div>
          <Image
          src={"/svg/ham.svg"}
          alt="hamburger"
          width={42}
          height={24}
          className="w-[42px] h-6 absolute right-8 md:right-8 top-4 md:top-[34px] lg:hidden cursor-pointer"
          onClick={handleShowMenu}
          />
          <div className="hidden md:flex gap-6 absolute right-[94px] lg:right-8 2xl:right-[110px] ">
              <button className="text-center content-center text-[#043873] text-[18px] font-medium w-[126px] h-[60px] bg-[#FFE492] rounded-lg">
                Login
              </button>
              <Button 
              label="Try Whitespace free"
              />
            </div>
      </div>
    </div>
  )
}

export default Header
