type Banner = {
  id: number;
  heading: string;
  text: string;
  buttonText: string;
  image: string;
};

interface HeroBannerProps {
  banner: Banner;
}

function HeroBanner({ banner }: HeroBannerProps) {
  return (
    <div
      className={`flex flex-col justify-between gap-4 w-full md:w-1/2 mx-auto p-6 text-white ${
        banner.id % 2 === 0 ? "bg-[#3563E9]" : "bg-[#54A6FF]"
      } rounded-lg select-none`}
    >
      <div className="flex flex-col items-start gap-2 md:gap-3 w-[284px]">
        <h2 className="w-[270px] font-semibold text-base md:text-3xl tracking-[-3%] leading-[150%] line-clamp-2">
          {banner.heading}
        </h2>
        <p className="w-[80%] md:w-full text-xs md:text-base tracking-[-2%]">
          {banner.text}
        </p>
        <button
          type="button"
          className={`mt-1 py-2.5 px-5 font-medium ${
            banner.id % 2 === 0 ? "bg-[#54A6FF]" : "bg-[#3563E9]"
          } rounded-md`}
        >
          {banner.buttonText}
        </button>
      </div>

      <div className="w-3/4 mx-auto">
        <img src={banner.image} alt="car image" className="w-full mx-auto" />
      </div>
    </div>
  );
}

export default HeroBanner;
