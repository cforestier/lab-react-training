function Random(props) {
  const randomNumber = (minimum, maximum) => {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
  };
  return (
    <div>
      <p>
        Random value between {props.min} and {props.max} ={'>'}
        {randomNumber(props.min, props.max)}
      </p>
    </div>
  );
}

export default Random;
