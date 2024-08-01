import './index.css'

const NavBar = props => {
  const {currentScore, topScore} = props
  const isWon = currentScore === 12
  return (
    <nav className="navbar">
      <div className="sub-navbar">
        <div className="logo-title-container">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>

        {!isWon && (
          <div className="sub-navbar">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
