function Random({ min, max }) {
  const randomNumber = (minimum, maximum) => {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
  };
  return (
    <div>
      <p>
        Random value between {min} and {max} ={'>'}
        {randomNumber(min, max)}
      </p>
    </div>
  );
}

export default Random;
