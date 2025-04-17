type CarImageProps = {
  carImage: string | null;
  carName: string;
};

function CarImage({ carImage, carName }: CarImageProps) {
  return (
    <div className="car-image-wrapper w-3/4 md:w-full h-48 bg-slate-200 rounded-lg overflow-hidden">
      {carImage ? (
        <img
          src={carImage}
          alt={`${carName} image`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-center text-sm text-content-base">
          No Image Available
        </div>
      )}
    </div>
  );
}

export default CarImage;
