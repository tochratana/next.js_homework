import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
         <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
          <div className="pr-2 md:mb-14 py-14 md:py-0">
            <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span className="block w-full">Get a financial experience</span> for growing your business! </h1>
            <h1 className="text-3xl font-regular text-blue-900 xl:text-5xl lg:text-3xl"><span className="block w-full">និយាយជាភាសាខ្មែរ</span></h1>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
              Empowering you to make better financial decisions, We truly are professional money planners...
            </p>
            <div className="mt-4">
              <a href="#contact" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
            </div>
          </div>
  
          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <Image 
            width={500}
            height={500}
            unoptimized
            id="heroImg1" 
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
