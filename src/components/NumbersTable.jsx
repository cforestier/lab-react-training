function NumbersTable({ limit }) {
  let limitArray = [];
  for (let i = 1; i <= limit; i++) {
    limitArray.push(i);
  }
  return (
    <div style={{ display: 'flex' }}>
      {limitArray.map((number, index) => (
        <div key={`number ${index}`} className="square">
          {number}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
