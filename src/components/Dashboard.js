import React from "react";

function DashBoard(props) {
  const handleStrike = () => {
    if (props.strikeCount < 2) {
      props.setStrikeCount(props.strikeCount + 1);
    } else if (props.strikeCount === 2) {
      props.setStrikeCount(0);
      props.setBallCount(0);
    }
  };
  const handleBall = () => {
    if (props.ballCount < 3) {
      props.setBallCount(props.ballCount + 1);
    } else if (props.ballCount === 3) {
      props.setStrikeCount(0);
      props.setBallCount(0);
    }
  };
  const handleHit = () => {
    props.setHits(props.hits + 1);
    props.setStrikeCount(0);
    props.setBallCount(0);
  };
  const handleFoul = () => {
    if (props.strikeCount < 2) {
      props.setStrikeCount(props.strikeCount + 1);
    }
  };

  return (
    <div className="button-div">
      <button onClick={handleBall}>ball</button>
      <button onClick={handleStrike}>strike</button>
      <button onClick={handleHit}>hit</button>
      <button onClick={handleFoul}>foul</button>
    </div>
  );
}
export default DashBoard;
