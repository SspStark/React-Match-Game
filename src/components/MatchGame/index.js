import {Component} from 'react'

import NavBar from '../NavBar'
import TabItem from '../TabItem'
import ThumbNailItem from '../ThumbNailItem'
import ScoreCard from '../ScoreCard'

import './index.css'

const initialState = {
  activeImageIndex: 0,
  activeTabId: 'FRUIT',
  score: 0,
  time: 60,
  isTimerRunning: true,
}

class MatchGame extends Component {
  state = initialState

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  timer = () => {
    const {time} = this.state
    if (time === 0) {
      clearInterval(this.intervalId)
      this.setState({isTimerRunning: false})
    } else {
      this.setState(prevState => ({time: prevState.time - 1}))
    }
  }

  resetGame = () => {
    this.setState(initialState)
    this.intervalId = setInterval(this.timer, 1000)
  }

  onClickThumbNail = id => {
    const {activeImageIndex} = this.state
    const {imagesList} = this.props
    const matchImageId = imagesList[activeImageIndex].id
    const randomImageIndex = Math.ceil(Math.random() * imagesList.length)

    if (id === matchImageId) {
      this.setState(prevState => ({
        activeImageIndex: randomImageIndex,
        score: prevState.score + 1,
      }))
    } else {
      clearInterval(this.intervalId)
      this.setState({isTimerRunning: false, time: 0})
    }
  }

  getSelectedTabImages = tabId => {
    const {imagesList} = this.props
    const filteredList = imagesList.filter(each => each.category === tabId)

    return filteredList
  }

  changeTab = id => this.setState({activeTabId: id})

  render() {
    const {tabsList, imagesList} = this.props
    const {
      score,
      time,
      activeImageIndex,
      activeTabId,
      isTimerRunning,
    } = this.state
    const {imageUrl} = imagesList[activeImageIndex]
    const filteredImages = this.getSelectedTabImages(activeTabId)
    return (
      <div className="app-container">
        <NavBar score={score} time={time} />
        {isTimerRunning ? (
          <div className="match-game-container">
            <img src={imageUrl} alt="match" className="image" />
            <ul className="tabs-container">
              {tabsList.map(eachTab => (
                <TabItem
                  tabDetails={eachTab}
                  key={eachTab.tabId}
                  changeTab={this.changeTab}
                  isActive={eachTab.tabId === activeTabId}
                />
              ))}
            </ul>
            <ul className="thumbnails-container">
              {filteredImages.map(eachItem => (
                <ThumbNailItem
                  details={eachItem}
                  key={eachItem.id}
                  onClickThumbNail={this.onClickThumbNail}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="match-game-container">
            <ScoreCard finalScore={score} resetGame={this.resetGame} />
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
