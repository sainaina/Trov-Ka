import { Carousel } from "flowbite-react";

const SlideService = () => {
  return (
    <div className="sm:h-64 xl:h-80 2xl:h-96 relative">
      <Carousel pauseOnHover>
        <div className="relative h-full">
          <img className="w-full h-full object-cover" src={"https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150359022.jpg?t=st=1721617628~exp=1721621228~hmac=7d7fdc34c091c455f8a34f7fad275edfa0c5be2110e52f0f10dfbfa434885700&w=996"} alt="Home Services" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-Secondary">Home Service</p>
        </div>
        <div className="relative h-full">
          <img className="w-full h-full object-cover" src={"https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150359022.jpg?t=st=1721617628~exp=1721621228~hmac=7d7fdc34c091c455f8a34f7fad275edfa0c5be2110e52f0f10dfbfa434885700&w=996"} alt="auto service" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-yellow-400">Auto Service</p>
        </div>
        <div className="relative h-full">
          <img className="w-full h-full object-cover" src={"https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150359022.jpg?t=st=1721617628~exp=1721621228~hmac=7d7fdc34c091c455f8a34f7fad275edfa0c5be2110e52f0f10dfbfa434885700&w=996"} alt="restaurant" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-yellow-400">Restaurant</p>
        </div>
        <div className="relative h-full">
          <img className="w-full h-full object-cover" src={"https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150359022.jpg?t=st=1721617628~exp=1721621228~hmac=7d7fdc34c091c455f8a34f7fad275edfa0c5be2110e52f0f10dfbfa434885700&w=996"} alt="education" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-yellow-400">Education</p>
        </div>
        <div className="relative h-full">
          <img className="w-full h-full object-cover " src={"https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150359022.jpg?t=st=1721617628~exp=1721621228~hmac=7d7fdc34c091c455f8a34f7fad275edfa0c5be2110e52f0f10dfbfa434885700&w=996"} alt="electronic" />
          <p className="absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 transition-colors duration-300 hover:text-yellow-400">Electronic</p>
        </div>
      </Carousel>
    </div>
  );
};

export default SlideService;
