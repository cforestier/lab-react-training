import Rating from './Rating';

function DriverCard(props) {
  return (
    <div>
      <img src={props.driverCard.img} alt={`driver ${props.driverCard.name}`} />
      <div>{props.driverCard.name}</div>
      <div>
        <Rating>{props.driverCard.rating}</Rating>
      </div>
      <div>{`${props.driverCard.car.model} - ${props.driverCard.car.licensePlate}`}</div>
    </div>
  );
}

export default DriverCard;
