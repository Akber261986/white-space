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
    <section className="bg-[#043873]">
      <div className=' flex items-center justify-between h-[56px] sm:h-[66px] md:h-[92px] px-4  md:px-8 lg:px-8 2xl:px-[110px] '>
          <div>
              <Image 
              src={"/pngImages/Logo.png"}
              alt="logo"
              width={134}
              height={24}
              className="w-[134px] sm:w-[191px] md:w-[] h-6 sm:h-[34px]"
              />
          </div>
          <div className={`${show ? "flex" : "hidden"} flex-col items-center max-lg:absolute  right-0 top-14 max-lg:bg-[#043873] p-4
          md:top-20 md:px-16
          lg:flex lg:flex-row lg:p-0`}>
            <div>
              <ul className="flex flex-col gap-7 py-4 lg:flex-row">
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
            <div className="flex flex-col lg:flex-row items-center gap-6 
            md:hidden">
              <button className="text-center content-center text-[#043873] text-[18px] font-medium w-[126px] h-[60px] bg-[#FFE492] rounded-lg">
                Login
              </button>
              <Button label="Try it now" />
            </div>
          </div>
          <div className="flex gap-8">
            <div className=" hidden items-center justify-end gap-6  md:flex">
                <button className="text-center content-center text-[#043873] text-[18px] font-medium w-[126px] h-[60px] bg-[#FFE492] rounded-lg">
                  Login
                </button>
                <Button label="Try it now" />
            </div>
              <Image
              src={"/svg/ham.svg"}
              alt="hamburger"
              width={36}
              height={24}
              className=" float-right lg:hidden cursor-pointer"
              onClick={handleShowMenu}
              />
          </div>
      </div>
    </section>
  )
}

export default Header
