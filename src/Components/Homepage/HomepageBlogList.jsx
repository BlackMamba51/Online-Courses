import React from "react";
import { blogList } from '../../utils/blog';
import HomepageBlogItem from "./HomepageBlogItem";
function HomepageBlogList() {

  return (
    <div className="homepage-blog-list">
      {blogList.filter(item => item.id < 4).map(blog => <HomepageBlogItem blog={blog} key={blog.id}/>
       
      )}
    </div>
  )
}

export default HomepageBlogList;