import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState(generateGrid());
  const [isLock, setIsLock] = useState(false);
  const [flippedCard, setFlippedCard] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  function generateGrid() { 
    const symbols = [
      '🍇', '🍉', '🚗', '🍌', '🏠', '🥭', '🍎', '🐯',
      '🍒', '🍓', '🐵', '🥝', '🍿', '🏀', '🎱', '🐻',
      '🍜', '🍢', '🎓', '🍤', '🦀', '🍦', '🍩', '🎂',
      '🍫', '🍭', '🍼', '🪔', '🍺', '🐱', '🐶'
    ];


    // const selectedSymbols = symbols.sort(() => Math.random() - 0.5).slice(0, 8);

    // const grid = [...selectedSymbols, ...selectedSymbols].sort(() => Math.random() - 0.5);

    function shuffleArray(array) {
      const copy = [...array];
      for (let i = copy.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
      }
      return copy;
    }

    const shuffledSymbols = shuffleArray(symbols);
    const selectedSymbols = shuffledSymbols.slice(0, 8);

    const grid = [...selectedSymbols, ...selectedSymbols];
    const shuffledGrid = shuffleArray(grid);

    return shuffledGrid.map((item, index) => {
      return { id: index, symbol: item, isFlipped: false };
    });
  }

  useEffect(() => {
    if (flippedCard.length === 2) {
      setAttempt((prev) => prev + 1);
      setIsLock(true);
      setTimeout(() => {
        if (cards[flippedCard[0]].symbol !== cards[flippedCard[1]].symbol) {
          setCards((prevCards) => {
            const copyCards = [...prevCards];
            copyCards[flippedCard[0]].isFlipped = false;
            copyCards[flippedCard[1]].isFlipped = false;
            return copyCards;
          });
        }
        setIsLock(false);
        setFlippedCard([]);
      }, 1000);
    }
  }, [flippedCard, cards]);

  useEffect(() => {
    if (cards.every(card => card.isFlipped)) {
      setHasWon(true);
    }
  }, [cards]);

  function handleClick(index) {
    if (cards[index].isFlipped || isLock || hasWon) return;

    const copyCards = [...cards];
    copyCards[index].isFlipped = true;
    setCards(copyCards);
    setFlippedCard([...flippedCard, index]);
  }

  function handleReset() {
    setCards(generateGrid());
    setFlippedCard([]);
    setAttempt(0);
    setIsLock(false);
    setHasWon(false);
  }

  return (
    <div className='wrapper'>
      <h2>Match Pair Game</h2>
      {hasWon && <h3>Congratulations, you won!</h3>}
      <div className='grid-container'>
        {cards.map((card, index) => (
          <button
            key={index}
            id={index}
            className={`card ${card.isFlipped ? 'flipped' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="front"></div>
            <div className="back">{card.isFlipped && card.symbol}</div>
          </button>
        ))}
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
        <h3>Attempts: {attempt}</h3>
      </div>
    </div>
  );
}

export default App;
