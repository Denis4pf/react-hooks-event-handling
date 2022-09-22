import React from "react";

function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }

  // return <button>Tickle me!</button>;
  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
