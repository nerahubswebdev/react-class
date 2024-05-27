import React from "react";
import SingleBlogPost from "./single-blog-post";
import { BlogPostsArray } from "../helper";

const Blog = () => {
  return (
    <div>
      <h4 className="text-blue-700 mb-5">All Blog Posts</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {BlogPostsArray?.map((post) => (
          <SingleBlogPost key={post.id} cohort2post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
