// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {tab: null}

  render() {
    const {faqsList} = this.props
    const {tab} = this.state

    return (
      <div className="bgContainer">
        <div className="c1">
          <div className="c2">
            <h1 className="heading">Faqs</h1>
            <ul>
              {faqsList.map(each => (
                <FaqItem
                  details={each}
                  isHide={tab === each.id}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Faqs
