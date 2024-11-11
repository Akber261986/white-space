import Image from "next/image"
import Button from "./buttons/Button"
import Link from "next/link"

const CombinedSection = () => {
  return (
    <div>
      {/* section-1 */}
      <section>
          <div className=' bg-[url(/pngImages/bg-blue-2.png)] bg-center px-2 sm:px-4 md:px-8 lg:px-40'>
            <div
            className="work sm:w-3/4 md:w-1/2 lg:w-full h-[35.8rem] flex flex-col justify-center lg:items-center"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white lg:text-center z-10">Your work, everywhere you are</h1>
                <Image 
                src={"/pngImages/blueLine.png"}
                alt="Line"
                width={274}
                height={1}
                className="h-8 -mt-4 lg:ml-[30rem] "
                />
                <p className="lg:text-center text-white mt-6 mb-16">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                <Button label="Try Today" />
            </div>
          </div>
      </section>
      {/* section-2 */}
      <section>
        <div className='p-8'>
          <div className='flex flex-col-reverse md:flex-row items-center'>
              <div className='flex flex-1 flex-col gap-8 items-center lg:justify-center md:items-start'>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-start z-10 '>100% your data
                  </h1>
                  <Image
                  src={"/svg/yellow-line.svg"}
                  alt="line"
                  width={254}
                  height={40}
                  className="-mt-12 xl:ml-60"
                  />
                  <p className='text-center md:text-start text-[18px] font-normal '>The app is open source and your notes are saved to an open format, so you shall always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                  <Button 
                  label={`Read more`}
                  />
              </div>
              <div className='flex-1'>
                  <Image
                  src={"/pngImages/your-data.png"}
                  alt='image'
                  width={748}
                  height={548}
              
                  />
              </div>
          </div>
        </div>
      </section>
      {/* section-3 */}
      <section>
        <div className="py-20 px-8">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center z-10">Our sponsors</h1>
          <Image 
          src={"/svg/yellow-line.svg"}
          alt="Line"
          width={280}
          height={1}
          className="max-sm:w-40 -mt-4 ml-36"
          />
        </div>
        <div
        className="flex flex-col justify-between items-center gap-12 md:flex-row md:gap-0"
        >
          <Link target="blank" href={"https://www.apple.com"}>
            <Image 
            src={"/pngImages/Apple.png"}
            alt="Apple"
            width={55}
            height={62}
            className="w-12 lg:w-[55px]"
            />
          </Link>
          <Link target="blank" href={"https://www.microsoft.com"}>
            <Image 
            src={"/pngImages/Microsoft.png"}
            alt="Microsoft"
            width={287}
            height={62}
            className="w-40 lg:w-[287px]"
            />
          </Link>
          <Link target="blank" href={"https://slack.com"}>
            <Image 
            src={"/pngImages/Slack.png"}
            alt="Slack"
            width={280}
            height={71}
            className="w-40 lg:w-[280px]"
            />
          </Link>
          <Link target="blank" href={"https://google.com"}>
            <Image 
            src={"/pngImages/Google.png"}
            alt="Google"
            width={211}
            height={69}
            className="w-36 lg:w-[211px]"
            />
          </Link>
        </div>
        </div>
      </section>
      {/* section-4 */}
      <section>
        <div className='flex justify-between flex-col md:flex-row items-center py-8 bg-[url(/pngImages/bgblue.JPG)] bg-center  '>
            <div className='flex justify-center flex-1 p-12'>
                <Image
                src={"/pngImages/Apps.png"}
                alt='image'
                width={528}
                height={427}
                />
            </div>
            <div className='flex flex-1 flex-col gap-8 items-center justify-end lg:justify-center md:items-start text-white px-8'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center md:text-start'>Work with Your Favorite Apps Using whitepace
                </h1>
                <p className='text-center md:text-start text-[18px] font-normal '>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
                <Button 
                label={`Read more`}
                />
            </div>
        </div>
      </section>
    </div>
  )
}

export default CombinedSection
