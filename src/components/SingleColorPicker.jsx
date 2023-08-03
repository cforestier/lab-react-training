function SingleColorPicker({ color, value, onChange, backgroundColor }) {
  return (
    <div className="single-color-container">
      <div style={{ width: 10, height: '10px', backgroundColor }}></div>
      <label>{color}:</label>
      <input
        type="number"
        max={255}
        min={0}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SingleColorPicker;
