// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscriptionStatus = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  renderSubscribeButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return (
        <button
          onClick={this.subscriptionStatus}
          type="button"
          className="butt"
        >
          subscribed
        </button>
      )
    }
    return (
      <button onClick={this.subscriptionStatus} type="button" className="butt">
        subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {this.renderSubscribeButton()}
      </div>
    )
  }
}

export default Welcome
