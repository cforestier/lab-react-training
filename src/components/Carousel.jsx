import { Button } from 'antd';
import { useState } from 'react';

function Carousel({ images }) {
  const [indexOfImages, setIndexOfImages] = useState(0);
  return (
    <div>
      <img src={images[indexOfImages]} alt={images[indexOfImages]} />
      <Button
        onClick={() =>
          indexOfImages === 0
            ? setIndexOfImages(images.length - 1)
            : setIndexOfImages(indexOfImages - 1)
        }
      >
        Left
      </Button>
      <Button
        onClick={() =>
          indexOfImages === 3
            ? setIndexOfImages(0)
            : setIndexOfImages(indexOfImages + 1)
        }
      >
        Right
      </Button>
    </div>
  );
}

export default Carousel;
