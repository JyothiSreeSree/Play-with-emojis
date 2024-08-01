import './index.css'

const WinOrLoseCard = props => {
  const {gameScore, resetGame, isWon} = props
  const imgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const text = isWon ? 'You Won' : 'You Lose'
  const score = isWon ? 'Best Score' : 'Score'
  const scoreValue = isWon ? '12/12' : `${gameScore}/12`

  console.log(scoreValue)
  const onClickReset = () => {
    resetGame()
  }
  return (
    <div className="win-lose-container">
      <div className="score-details">
        <h1 className="result">{text}</h1>
        <p className="score">{score}</p>

        <p className="score-value">{scoreValue}</p>
        <button
          type="button"
          onClick={onClickReset}
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="win-lose-image" />
    </div>
  )
}

export default WinOrLoseCard
