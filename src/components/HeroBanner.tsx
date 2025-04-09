function HeroBanner({ item }) {
  return (
    <div
      className={`flex flex-col gap-4 w-full md:w-1/2 mx-auto p-6 text-white ${
        item.id % 2 === 0 ? "bg-[#3563E9]" : "bg-[#54A6FF]"
      } rounded-lg select-none`}
    >
      <div className="flex flex-col items-start gap-2 md:gap-3 w-[284px]">
        <h2 className="w-[270px] font-semibold text-base md:text-3xl tracking-[-3%] leading-[150%] line-clamp-2">
          {item.heading}
        </h2>
        <p className="w-[80%] md:w-full text-xs md:text-base tracking-[-2%]">
          {item.text}
        </p>
        <button
          type="button"
          className={`mt-1 py-2.5 px-5 font-medium ${
            item.id % 2 === 0 ? "bg-[#54A6FF]" : "bg-[#3563E9]"
          } rounded-md`}
        >
          {item.buttonText}
        </button>
      </div>

      <div>
        <img
          src={item.image}
          alt="car image"
          className="w-3/4 md:w-full mx-auto"
        />
      </div>
    </div>
  );
}

export default HeroBanner;
