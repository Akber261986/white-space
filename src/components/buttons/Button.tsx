import Image from "next/image"
interface Prop {
  label:string
}

const Button = ({label}:Prop) => {
  return (
    <div className="flex justify-center gap-4 w-[227px] h-[60px] bg-[#4F9CF9] rounded-lg">
                <button className="text-[#FFFFFF] text-[18px] font-medium">
                {label}
                </button>
                <Image 
                src={"/svg/right-arrow.svg"}
                alt="icon"
                width={10}
                height={10}
                />
            </div>
  )
}

export default Button
