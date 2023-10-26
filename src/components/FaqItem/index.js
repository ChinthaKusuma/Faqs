// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isHide: false}

  getQuestion1 = () => {
    this.setState({
      isHide: true,
    })
  }

  getAnswer1 = () => {
    this.setState({
      isHide: false,
    })
  }

  getQuestion = () => {
    const {details} = this.props
    const {questionText} = details
    return (
      <div className="q">
        <h1 className="h11">{questionText}</h1>
        <button className="btn1" type="button" onClick={this.getQuestion1}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
            className="img1"
          />
        </button>
      </div>
    )
  }

  getAnswer = () => {
    const {details} = this.props
    const {questionText, answerText} = details
    return (
      <div className="a">
        <div className="q">
          <h1 className="h11">{questionText}</h1>
          <button className="btn1" type="button" onClick={this.getAnswer1}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
              className="img1"
            />
          </button>
        </div>
        <hr />

        <p className="h11">{answerText}</p>
      </div>
    )
  }

  render() {
    const {isHide} = this.state
    return (
      <li className="li1">
        {isHide !== true && <>{this.getQuestion()}</>}
        {isHide && <>{this.getAnswer()}</>}
      </li>
    )
  }
}

export default FaqItem
