import Reviews from "../components/Reviews";
import TitledCarsSection from "../components/TitledCarsSection";
import useFetchRecentCars from "../hooks/useFetchRecentCars";
import useFetchRecommendedCars from "../hooks/useFetchRecommendedCars";
import ImagesCarDetails from "../components/ImagesCarDetails";
import InfoCarDetails from "../components/InfoCarDetails";
import useFetchCarDetails from "../hooks/useFetchCarDetails";
import { useParams } from "react-router-dom";

const DetailCar = () => {
const { id } = useParams<{ id: string  }>();

  const { carDetails, error: errorOfCarDetails, loading } = useFetchCarDetails(Number(id));


  const { recentCars, error: errorOfRecent } = useFetchRecentCars();
  const { recommendedCars, error: errorOfRecommended } =
    useFetchRecommendedCars();

  if (errorOfRecent || errorOfRecommended || errorOfCarDetails) {
    return <p>Error: {errorOfRecent || errorOfRecommended || errorOfCarDetails}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }



  return (
    <section className="flex flex-col">
      <div className="bg-gray-100 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 max-w-7xl mx-auto">
          <ImagesCarDetails image1={carDetails?.mainImage} image2={carDetails?.images[0]} image3={carDetails?.images[1]} image4={carDetails?.images[2]}  />
          <InfoCarDetails id={Number(id)} state={carDetails} name={carDetails?.name} review={carDetails?.reviews.total}  TypeCar={carDetails?.type} Steering={carDetails?.steering} Transmission={carDetails?.steering} Engine={carDetails?.steering} />
        </div>
        <Reviews id={Number(id)} />
      </div>

      <div className="flex flex-col gap-5">
        <TitledCarsSection
          carList={recentCars}
          headingTitle="Recent Cars"
          gridCols="md:grid-cols-3"
        />

        <TitledCarsSection
          carList={recommendedCars}
          headingTitle="Recommendation Cars"
          gridCols="md:grid-cols-3"
        />
      </div>
    </section>
  );
};

export default DetailCar;
