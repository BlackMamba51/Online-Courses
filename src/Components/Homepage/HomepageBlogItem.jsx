import React from "react";

function HomepageBlogItem({blog}) {

  return (
    <div className="blog-card">
      <div style={{backgroundImage: `url(${blog.img})`}} className="blog-img">
        <div className="blog-type">{blog.blogType}
          <div style={{backgroundImage: `url(${blog.icon})`}} className="blog-type-icon"></div>
        </div>
      </div>
      <div className="blog-info">
        <div className="blog-course">{blog.course}</div>
        <div className="line"></div>
        <div className="blog-date">{blog.blogDate}</div>
        <div className="line"></div>
        <div className="blog-time">{blog.time}</div>
      </div>
      <div className="blog-title">{blog.blogTitle}</div>
      <div className="blog-text">{blog.blogText}</div>
      <div className="blog-action">{blog.action}
        <div className="blog-arrow"></div>
      </div>
    </div>
  )
}

export default HomepageBlogItem;