import React from "react";
import './ScoreBoard.css'

function ScoreBoard({scores, xPlayer}) {
      const {xScore, oScore} = scores
      return (
            <div className="score-board">
                  <span className={`score x-score ${!xPlayer && "inactive"}`}>X: {xScore}</span>
                  <span className={`score o-score ${xPlayer && "inactive"}`}>O: {oScore}</span>
            </div>
      )
}

export default ScoreBoard;