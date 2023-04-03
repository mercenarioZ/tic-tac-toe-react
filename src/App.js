import React, { useState } from "react";
import Box from "./components/Box/Box";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import ResetBtn from "./components/ResetBtn/ResetBtn";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [box, setBox] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [newGame, setNewGame] = useState(false);

  const handleBlockClick = (blockIndex) => {
    const updatedBox = box.map((value, index) => {
      if (index === blockIndex) {
        return xPlayer === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkTheWinner(updatedBox);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setBox(updatedBox);
    setXPlayer(!xPlayer);
  };

  const checkTheWinner = (box) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (box[x] && box[x] === box[y] && box[y] === box[z]) {
        // console.log(box[x])
        setNewGame(true);
        return box[z];
      }
    }
  }


  const resetBox = () => {
    setNewGame(false);
    setBox(Array(9).fill(null));
  };

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlayer={xPlayer} />

      <Box box={box} onClick={newGame ? resetBox : handleBlockClick} />

      <ResetBtn resetBox={resetBox} />
    </div>
  );
}

export default App;
