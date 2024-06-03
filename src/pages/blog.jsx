import React, { useEffect, useState } from "react";
import SingleBlogPost from "./single-blog-post";
import { baseapi } from "../constants";

const Blog = () => {
  // const baseapi = import.meta.env.VITE_BASE_API_LINK;
  // our api link
  // https://cohort2-blog-api.onrender.com/post/all-posts

  const [postData, setPostData] = useState([]);

  console.log("posts inside post data state => ", postData);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseapi}/post/all-posts`);
      const fullresponse = response.json();
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((miles) => {
        console.log("the posts => ", miles);
        setPostData(miles.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h4 className="text-blue-700 mb-5">All Blog Posts</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {postData?.map((post) => (
          <SingleBlogPost key={post.id} cohort2post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
