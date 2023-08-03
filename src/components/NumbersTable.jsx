function NumbersTable({ limit }) {
  let limitArray = [];
  let i = 0;
  while (i <= limit) {
    limitArray.push(i);
    i++;
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
