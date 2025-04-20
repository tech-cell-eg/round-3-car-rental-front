import { Link } from "react-router-dom"
import ROUTES from "../routes/routes"
import { CarDetails } from "../types/cardetails"
import CarPrice from "./CarPrice"
import useFetchCarDetails from "../hooks/useFetchCarDetails"

interface InfoCarDetailsProps {
    id: number | null
    name: string | undefined
    review: number | undefined
    TypeCar: string | undefined
    Steering: string | undefined
    Transmission: string | undefined
    Engine: string | undefined
    state: CarDetails | null
}
const InfoCarDetails: React.FC<InfoCarDetailsProps> = ({ id, state, name, review, TypeCar, Steering, Transmission, Engine }) => {
    const { carDetails } = useFetchCarDetails(Number(id));
    return (
        <div className="bg-white rounded-md p-6 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <h1 className="text-2xl md:text-3xl font-medium">{name}</h1>
                    <p className="text-sm text-gray-500">{review} Reviewer</p>
                </div>
                <div>
                    <span className="text-lg font-medium text-gray-700">Love</span>
                </div>
            </div>

            <div className="mt-3">
                <p className="text-base md:text-lg text-gray-500 leading-7 font-light">
                    NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the inspired by the most unforgiving proving
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 text-gray-500 text-sm md:text-base">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h1>Type Car</h1>
                        <p className="font-medium">{TypeCar}</p>
                    </div>
                    <div className="flex justify-between">
                        <h1>Steering</h1>
                        <p className="font-medium">{Steering}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h1>Transmission</h1>
                        <p className="font-medium">{Transmission}</p>
                    </div>
                    <div className="flex justify-between">
                        <h1>Engine</h1>
                        <p className="font-medium">{Engine}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex  md:flex-row justify-between items-center gap-4">
                <CarPrice salePrice={Number(carDetails?.sale_price)} price={Number(carDetails?.price)} />
                <Link state={state} to={ROUTES.PAYMENT} className="bg-indigo-600 px-6 py-2 text-white md:w-auto rounded-md hover:bg-indigo-700">
                    Rent Now
                </Link>
            </div>
        </div>
    )
}

export default InfoCarDetails