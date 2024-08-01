import {Component} from 'react'
import Popup from 'reactjs-popup'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    selectEmojisList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  finishGame = curScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (curScore > topScore) {
      newTopScore = curScore
    }

    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  onSelectingEmoji = id => {
    const {selectEmojisList} = this.state
    if (selectEmojisList.includes(id)) {
      this.finishGame(selectEmojisList.length)
    } else {
      const newSelectedEmojisList = [...selectEmojisList, id]

      if (newSelectedEmojisList.length === 12) {
        this.setState({selectEmojisList: newSelectedEmojisList}, () => {
          this.finishGame(12)
        })
      } else {
        this.setState({
          selectEmojisList: newSelectedEmojisList,
          isGameInProgress: true,
        })
      }
    }
  }

  resetGame = () => {
    const {selectEmojisList, topScore} = this.state
    const userScore = selectEmojisList.length

    if (userScore >= topScore) {
      this.setState({topScore: userScore})
    }

    this.setState({selectEmojisList: [], isGameInProgress: true})
  }

  render() {
    const {selectEmojisList, topScore, isGameInProgress} = this.state
    const selectEmojisListLength = selectEmojisList
      ? selectEmojisList.length
      : 0
    const isWon = selectEmojisListLength === 12
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    return (
      <div className="bgContainer">
        <NavBar currentScore={selectEmojisList.length} topScore={topScore} />
        <div className="container">
          <div className="popupContainer">
            <Popup
              modal
              trigger={
                <button type="button" className="closeButton" id="trigger">
                  Instructions
                </button>
              }
            >
              {close => (
                <>
                  <div className="instructionsContainer">
                    <h2 className="instructionsHeading">How to Play</h2>
                    <ol className="instructionsListContainer">
                      <li>
                        Click on each emoji once. Clicking the same emoji more
                        than once will end the game.
                      </li>
                      <li>
                        Each correct click will shuffle the emojis. Try to
                        remember which ones you clicked!
                      </li>
                      <li>
                        The game ends when you either click all emojis without
                        repeating or accidentally click a duplicate.
                      </li>
                      <li>
                        Your score is based on the number of unique emojis you
                        click.
                      </li>
                    </ol>
                  </div>
                  <button
                    type="button"
                    className="closeButton"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </>
              )}
            </Popup>
          </div>
          {isGameInProgress ? (
            <ul className="emojiContainer">
              {shuffledEmojisList().map(eachEmoji => (
                <EmojiCard
                  emojisList={eachEmoji}
                  key={eachEmoji.id}
                  onSelectingEmoji={this.onSelectingEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              isWon={isWon}
              gameScore={selectEmojisList.length}
              resetGame={this.resetGame}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
