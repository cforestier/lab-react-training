import Rating from './Rating';

function DriverCard({
  driverCard: {
    img,
    name,
    rating,
    car: { model, licensePlate },
  },
}) {
  return (
    <div>
      <img src={img} alt={`driver ${name}`} />
      <div>{name}</div>
      <div>
        <Rating rating={rating} />
      </div>
      <div>{`${model} - ${licensePlate}`}</div>
    </div>
  );
}

export default DriverCard;
