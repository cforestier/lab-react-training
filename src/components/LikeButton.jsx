import { Button, Space } from 'antd';
import { useState } from 'react';

function LikeButton() {
  const listOfColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const increaseClicks = () => setNumberOfClicks(numberOfClicks + 1);
  const changeBackGroundColor = () => {
    const colorIndex = numberOfClicks % listOfColors.length;
    return listOfColors[colorIndex];
  };
  return (
    <div>
      <Button
        type="primary"
        className="like-button"
        onClick={increaseClicks}
        style={{ backgroundColor: changeBackGroundColor() }}
      >
        {numberOfClicks} Like
      </Button>
    </div>
  );
}

export default LikeButton;
