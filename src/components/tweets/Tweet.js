import React from 'react'
import LikeBtn from './LikeBtn'

const Tweet = ({ tweet }) => {
  const { id, user, likes, body, createdat} = tweet

  return (
    <div className="card w-100 mb-3">
      <div className="card-body">
        <p className="card-subtitle mb-2 text-muted">{createdat}</p>

        <p className="card-text">
          {body}
        </p>

        <LikeBtn likes={likes} tweetId={id} />

        <a href="/TODO" className="d-block">@{user.username}</a>
      </div>
    </div>
  )
}

export default Tweet
