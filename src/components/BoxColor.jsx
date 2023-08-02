function BoxColor(props) {
  function rgbToHex(r, g, b) {
    // Convertir chaque composante en valeur hexadécimale
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');

    // Combiner les valeurs hexadécimales pour obtenir le code hexadécimal complet
    const hexValue = `#${rHex}${gHex}${bHex}`;

    return hexValue;
  }
  return (
    <div
      style={{
        width: '500px',
        height: '100px',
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
      }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
      <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </div>
  );
}

export default BoxColor;
