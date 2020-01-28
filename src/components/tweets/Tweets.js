import React from 'react'
import Spinner from '../misc/Spinner'
import Tweet from './Tweet'
import TweetHackService from '../../services/TweetHackService'

class Tweets extends React.Component {
  state = {
    tweets: [],
    loading: true
  }

  componentDidMount() {
    TweetHackService.getTweets()
      .then(tweets => {
        this.setState({ tweets, loading: false })
      })
  }

  render() {
    if (this.state.loading) {
      return <Spinner/>
    }

    return (
      <div className="Tweets">
        {this.state.tweets.map((tweet, i) => (
          <Tweet tweet={tweet} key={i}/>
        ))}
      </div>
    )
  }
}

export default Tweets
