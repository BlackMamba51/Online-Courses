import React from "react";

function HomepageCommentItem({comment}) {

  return (
    <div className="comment-card">
      <div className="braces"></div>
      <div className="comment__body">
        <div className="comment-text">{comment.text}</div>
        <div className="comment-name">{comment.name}</div>
      </div>
    </div>
  )
}

export default HomepageCommentItem;