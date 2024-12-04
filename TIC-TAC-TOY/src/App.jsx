import React, { useState } from 'react';
import './App.css';

// const App = () => {
//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [isXNext, setIsXNext] = useState(true);
//   const [winner, setWinner] = useState(null);
//   const [score, setScore] = useState({ X: 0, O: 0, Draws: 0 });

//   const handleClick = (index) => {
//     if (board[index] || winner) return;

//     const newBoard = board.slice();
//     newBoard[index] = isXNext ? 'X' : 'O';
//     setBoard(newBoard);
//     setIsXNext(!isXNext);

//     const winningPlayer = calculateWinner(newBoard);
//     if (winningPlayer) {
//       if (winningPlayer === 'Draw') {
//         setScore((prev) => ({ ...prev, Draws: prev.Draws + 1 }));
//       } else {
//         setScore((prev) => ({
//           ...prev,
//           [winningPlayer]: prev[winningPlayer] + 1,
//         }));
//       }
//       setWinner(winningPlayer);
//     }
//   };

//   const calculateWinner = (board) => {
//     const winningCombinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let combination of winningCombinations) {
//       const [a, b, c] = combination;
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         return board[a];
//       }
//     }

//     if (board.every((cell) => cell)) {
//       return 'Draw';
//     }

//     return null;
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setIsXNext(true);
//     setWinner(null);
//   };

//   return (
//     <div className="tic-tac-toe">
//       <h1>Tic Tac Toe</h1>
//       <div className="board">
//         {board.map((cell, index) => (
//           <div
//             key={index}
//             className="cell"
//             onClick={() => handleClick(index)}
//           >
//             {cell}
//           </div>
//         ))}
//       </div>
//       <div className="status">
//         {winner
//           ? winner === 'Draw'
//             ? "It's a Draw!"
//             : `Winner: ${winner}`
//           : 'Game in Progress'}
//       </div>
//       <div className="scoreboard">
//         <h2>Scoreboard</h2>
//         <p>X Wins: {score.X}</p>
//         <p>O Wins: {score.O}</p>
//         <p>Draws: {score.Draws}</p>
//       </div>
//       <button className="reset-button" onClick={resetGame}>
//         Reset Game
//       </button>
//     </div>
//   );
// };

function App(){
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
    Draws: 0
  });

  function handleClick(index){
     if(board[index] || winner) return;

     const newBoard = board.slice();
     newBoard[index] = isNext ? 'X' : 'O';
     setBoard(newBoard);
     setIsNext(!isNext);

     const winningPlayer = calculateWinningPlayer(newBoard);
     if(winningPlayer){
      setScore((prevScore)=>{
        if(winningPlayer === 'Draw') return {...prevScore, Draws: prevScore.Draws + 1}
        else return {...prevScore, [winningPlayer]: prevScore[winningPlayer] + 1}
      })
      setWinner(winningPlayer);
     }
  }

  function calculateWinningPlayer(board){
     const winningCombinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
     ];

     for(let combination of winningCombinations){
      const [a,b,c] = combination;
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        return board[a];
      }
     }

     if(board.every((cell) => cell)) return 'Draw';

     return null;
  }

  function handleReset(){
    setBoard(Array(9).fill(null));
    setIsNext(true);
    setWinner(null);
  }

  return(
    <div className='tic-tac-toe'>
         <h1>TIC TAC TOE GAME</h1>
         <div className='Scoreboard'>
         <div className="status">
         {winner
           ? winner === 'Draw'
             ? "OOp, It's a Draw!"
             : `Congratulations, Winner is ${winner}`
          : 'Game in Progress'}
       </div>
          <div>
            <h4>X = {score.X} wins</h4>
            <h4>O = {score.O} wins</h4>
            <h4>Draws = {score.Draws} Draws</h4>
          </div>
         </div>
         <div className='board'>
              {board.map((cell,index) => (
                <div className='cell'
                     key={index}
                     onClick={()=>handleClick(index)}>
                  {cell}
                </div>
              ))}
         </div>
         <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  )
}

export default App;
