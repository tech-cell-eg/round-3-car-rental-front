type CarInfoProps = {
  carName: string;
  carType: string;
};

function CarInfo({ carName, carType }: CarInfoProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
        <h3 className="font-semibold text-content-dark">{carName}</h3>
        {/* <div className="heart-icon text-red-500">❤</div> */}
      </div>

      <h4 className="font-medium text-sm text-content-base leading-[150%]">
        {carType.toUpperCase()}
      </h4>
    </div>
  );
}

export default CarInfo;
