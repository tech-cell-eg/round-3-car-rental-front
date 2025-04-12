import bannerOneImage from "../assets/hero-banner-1.png";
import bannerTwoImage from "../assets/hero-banner-2.png";
import HeroBanner from "./HeroBanner";

type Banner = {
  id: number;
  heading: string;
  text: string;
  buttonText: string;
  image: string;
};

const banners: Banner[] = [
  {
    id: 1,
    heading: "The Best Platform for Car Rental",
    text: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    buttonText: "Rental Car",
    image: bannerOneImage,
  },
  {
    id: 2,
    heading: "Easy way to rent a car at a low price",
    text: "Providing cheap car rental services and safe and comfortable facilities.",
    buttonText: "Rental Car",
    image: bannerTwoImage,
  },
];

function HeroBannersWrapper() {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-7">
      {/* Show only the first banner on small screens */}
      <div className="absolute top-[-8%] start-1/2 -translate-x-1/2 block md:hidden w-[95%]">
        <HeroBanner banner={banners[0]} />
      </div>

      {/* Show both banners on medium and larger screens */}
      <div className="hidden md:flex w-full justify-between gap-7">
        {banners.map((banner) => (
          <HeroBanner key={banner.id} banner={banner} />
        ))}
      </div>
    </section>
  );
}

export default HeroBannersWrapper;
