function Rating({ children }) {
  const stars = parseInt(Math.round(children));
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
