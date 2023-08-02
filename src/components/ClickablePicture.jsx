import { useState } from 'react';

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);
  const pictureName = isClicked ? 'maxence-glasses' : 'maxence';
  return (
    <img
      src={`${pictureName}.png`}
      alt={pictureName}
      onClick={() => setIsClicked(!isClicked)}
    />
  );
}

export default ClickablePicture;
