import React from 'react'
import TweetHackService from '../../services/TweetHackService'

class LikeBtn extends React.Component {
  state = {
    likes: this.props.likes.length
  }

  handleClick = (event) => {
    TweetHackService.likeTweet(this.props.tweetId)
      .then(response => {
        this.setState({
          likes: this.state.likes + response.data.likes
        })
      })
  }

  render() {
    return (
      <div className="LikeBtn">
        <button className="btn btn-sm mb-2 btn-outline-danger" onClick={this.handleClick}>
          <i className="fa fa-heart mr-2"></i>
          <span className="likes-count">{this.state.likes}</span> likes
            </button>
      </div>
    )
  }
}

export default LikeBtn
