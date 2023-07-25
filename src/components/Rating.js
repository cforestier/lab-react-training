function Rating(props) {
  const stars = parseInt(Math.round(props.children));
  const fullStars = '★'.repeat(stars);
  const emptyStars = '☆'.repeat(5 - stars);

  return (
    <p>
      {fullStars}
      {emptyStars}
    </p>
  );
}

export default Rating;
