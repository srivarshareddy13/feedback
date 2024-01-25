// Write your React code here.
import {Component} from 'react'
import './index.css'
class Feedback extends Component {
  state = {isClick: false}

  onClick = () => {
    this.setState({isClick: true})
  }
  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="card">
        <h1>How satisfied are you with our customer support performance </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" onClick={this.onClick}>
                <img src={emoji.imageUrl} alt={emoji.name} />
                <br />
                <span>{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  renderLoveFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="love-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you">Thank You!</h1>
        <P>
          We will use your feddback to improve our customer support performance.
        </P>
      </div>
    )
  }
  render() {
    const {isClick} = this.state

    return (
      <div className="app-container">
        <div className="container">
          {isClick ? this.renderLoveFeedback() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback;
