import React from "react";
import { Link } from "react-router-dom";

const SingleBlogPost = ({ cohort2post }) => {
  //   const something = props.cohort2post;

  return (
    <Link to={`/blog/${cohort2post?.slug}`}>
      <div className="border border-blue-300 drop-shadow-md rounded-md p-3">
        <img src={cohort2post?.post_image} alt="img" />
        <h5 className="text-green-500">{cohort2post?.title}</h5>
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: cohort2post?.post_content }}
        />
      </div>
    </Link>
  );
};

export default SingleBlogPost;
