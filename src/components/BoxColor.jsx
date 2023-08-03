function BoxColor({ r, g, b }) {
  function rgbToHex(r, g, b) {
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');

    const hexValue = `#${rHex}${gHex}${bHex}`;

    return hexValue;
  }
  return (
    <div
      style={{
        width: '500px',
        height: '100px',
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}

export default BoxColor;
