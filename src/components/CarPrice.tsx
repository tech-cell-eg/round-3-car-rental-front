interface CarPriceProps {
  salePrice?: number | undefined;
  price: number | undefined;
}

function CarPrice({ salePrice, price }: CarPriceProps) {
  return (
    <div className="font-semibold text-content-dark">
      {salePrice ? (
        <div className="flex flex-col items-start">
          <p className="flex items-center gap-1 font-bold text-xl">
            ${salePrice.toFixed(2)} /
            <span className="font-bold text-xs text-content-base">day</span>
          </p>
          <span className="font-medium text-sm text-content-base line-through">
            ${price?.toFixed(2)}
          </span>
        </div>
      ) : (
        <p className="flex items-center gap-1 font-bold md:text-xl text-content-dark">
          ${price?.toFixed(2)} /
          <span className="font-medium text-sm text-content-base">day</span>
        </p>
      )}
    </div>
  );
}

export default CarPrice;