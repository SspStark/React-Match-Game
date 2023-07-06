import './index.css'

const NavBar = props => {
  const {score, time} = props

  return (
    <nav className="navbar">
      <div className="nav-items">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="navbar-logo"
        />
        <ul className="navbar-details">
          <li className="score-container">
            <p className="score-label">Score: </p>
            <p className="score">{score}</p>
          </li>
          <li className="time-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-logo"
            />
            <p className="time">{time} sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
