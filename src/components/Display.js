import React from "react";

function Display(props) {
  return (
    <div className="display-div">
      <div>{props.ballCount}</div>
      <p>ball</p>
      <div>{props.strikeCount}</div>
      <p>Strike</p>
      <div>{props.hits}</div>
      <p>Hits</p>
    </div>
  );
}
export default Display;
