import './index.css'

const ScoreCard = props => {
  const {finalScore, resetGame} = props

  const playAgain = () => resetGame()

  return (
    <div className="scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="score-label">YOUR SCORE</p>
      <p className="score-value">{finalScore}</p>
      <button type="button" className="reset-button" onClick={playAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
          className="reset-icon"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
