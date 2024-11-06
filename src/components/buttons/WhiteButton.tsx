import Image from "next/image"
interface Prop {
  label:string
}

const WhiteButton = ({label}:Prop) => {
  return (
    <div className="flex justify-center gap-4 w-[227px] h-[60px] border-[2px] group-hover:border-none border-[#FFE492] group-hover:bg-[#4F9CF9] rounded-lg">
                <button className="group-hover:text-[#FFFFFF] text-[18px] font-medium">
                {label}
                </button>
                <Image 
                src={"/svg/right-arrow.svg"}
                alt="icon"
                width={12}
                height={12}
                />
            </div>
  )
}

export default WhiteButton
