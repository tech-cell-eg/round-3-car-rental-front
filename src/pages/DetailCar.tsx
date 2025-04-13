import image1 from "../assets/image/image 8.png";
import image2 from "../assets/image/View 1.png";
import image3 from "../assets/image/View 2.png";
import image4 from "../assets/image/View 3.png";
import Reviews from "../components/Reviews";
const DetailCar = () => {
  return <>
    <div className="bg-gray-100 mt-5 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 max-w-7xl mx-auto">
        <div className="bg-white rounded-md p-6 flex flex-col h-full">
          <div className="w-full bg-indigo-500 rounded-md mb-5">
            <h1 className="text-2xl md:text-3xl text-white font-medium p-5 leading-relaxed">
              Sports car with the best <br /> design and acceleration
            </h1>
            <img
              className="w-3/4 mx-auto mt-4 mb-6 object-cover"
              src={image1}
              alt="Main car"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-auto">
            <img
              className="w-full h-24 object-cover rounded-md"
              src={image2}
              alt="Car side"
            />
            <img
              className="w-full h-24 object-cover rounded-md"
              src={image3}
              alt="Car front"
            />
            <img
              className="w-full h-24 object-cover rounded-md"
              src={image4}
              alt="Car rear"
            />
          </div>
        </div>


        <div className="bg-white rounded-md p-6 flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-medium">Car Name</h1>
              <p className="text-sm text-gray-500">440+ Reviewer</p>
            </div>
            <div>
              <span className="text-lg font-medium text-gray-700">Love</span>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-base md:text-lg text-gray-500 leading-7 font-light">
              NISMO has become the embodiment of Nissan's outstanding performance,
              inspired by the most unforgiving proving ground, the "race track".
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-500 text-sm md:text-base">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1>Type Car</h1>
                <p className="font-medium">Sport</p>
              </div>
              <div className="flex justify-between">
                <h1>Steering</h1>
                <p className="font-medium">Automatic</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1>Transmission</h1>
                <p className="font-medium">Manual</p>
              </div>
              <div className="flex justify-between">
                <h1>Engine</h1>
                <p className="font-medium">2.0L</p>
              </div>
            </div>
          </div>


          <div className="mt-4 flex  md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">
                $80.00/ <span className="text-gray-500 text-sm">days</span>
              </h1>
              <p className="text-gray-500 text-sm line-through">$100.00</p>
            </div>
            <button className="bg-indigo-600 px-6 py-2 text-white md:w-auto rounded-md hover:bg-indigo-700">
              Rent Now
            </button>
          </div>
        </div>
      </div>




      <Reviews />
    </div>


  </>
}

export default DetailCar