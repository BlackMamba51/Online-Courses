import React from "react";
import OrangeButton from '../UI/OrangeButton/OrangeButton';
import HomepageBlogList from "./HomepageBlogList";
function HomepageBlog() {

  return (
    <div className="homepage-blog">
      <div className="container">
        <div className="homepage-blog__body">
          <div className="subtitle">Our blog</div>
          <div className="flex-group">
            <div className="title">Latest posts</div>
            <OrangeButton>Go to blog</OrangeButton>
          </div>
          <HomepageBlogList/>
        </div>
      </div>
    </div>
  )
}

export default HomepageBlog;