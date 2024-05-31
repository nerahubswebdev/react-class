import React from "react";
import { useParams } from "react-router-dom";
import { BlogPostsArray } from "../helper";

const ThePost = () => {
  const params = useParams();
  console.log("from the post => ", params);

  console.log("the array => ", BlogPostsArray);

  // the singlepost
  const post = BlogPostsArray.filter((post) => post.id === +params.id);

  console.log("the clicked post => ", post);

  return (
    <div>
      <div className="p-3">
        <h5 className="text-green-500">{post[0]?.title}</h5>
        <p className="text-gray-600">{post[0]?.postContent}</p>
      </div>
    </div>
  );
};

export default ThePost;
