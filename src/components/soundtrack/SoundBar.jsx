import React, { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import music from "./audio/track-09-shinjuku.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  top: 8rem; /* Position at the top of the screen */
  left: 11%; /* Position at the left of the screen */
  transform: translateX(-50%); /* Move to the left by half of its width */
  z-index: 10;
  width: 6rem; /* Increase the width */
  height: 6rem; /* Increase the height */

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`;
const Line = styled.span`
  background: #fef6f5;
  animation: ${(props) => (props.pressButton ? play : "none")} 1s ease infinite;
  animation-play-state: ${(props) =>
    props.pressButton ? "running" : "paused"};
  height: 1.5rem; /* Increase the height */
  width: 2px; /* Keep the width */
  margin: 0 0.1rem;
`;
  // border: 1px solid ${(props) => props.theme.body};
  // This border is used for the play button in Line style file. I just removed it

const SoundBar = () => {
  const ref = useRef([]);
  const [pressButton, setPressButton] = useState(false);

  const handleClick = () => {
    setPressButton(!pressButton);

    if (!pressButton) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <>
      <Box onClick={() => handleClick()}>
        <Line pressButton={pressButton} />
        <Line pressButton={pressButton} />
        <Line pressButton={pressButton} />
        <Line pressButton={pressButton} />
        <Line pressButton={pressButton} />
        <Line pressButton={pressButton} />

        <audio src={music} ref={ref} loop />
      </Box>
    </>
  );
};

export default SoundBar;
