import Rating from './Rating';

function DriverCard(props) {
  return (
    <div>
      <img src={props.img} alt={`driver ${props.name}`} />
      <div>{props.name}</div>
      <div>
        <Rating>{props.rating}</Rating>
      </div>
      <div>{`${props.car.model} - ${props.car.licensePlate}`}</div>
    </div>
  );
}

export default DriverCard;
