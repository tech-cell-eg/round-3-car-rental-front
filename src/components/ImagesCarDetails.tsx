
interface ImagesCarDetailsProps {
    image1: string | undefined;
    image2: string | undefined;
    image3: string | undefined;
    image4: string | undefined;
}
const ImagesCarDetails: React.FC<ImagesCarDetailsProps> = ({ image1, image2, image3, image4 }) => {
    return (
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
    )
}

export default ImagesCarDetails