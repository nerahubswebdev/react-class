import React from "react";
import { Link } from "react-router-dom";

const SingleBlogPost = ({ cohort2post }) => {
  //   const something = props.cohort2post;

  return (
    <Link to={`/blog/${cohort2post?.slug}`}>
      <div className="border border-blue-300 drop-shadow-md rounded-md p-3 h-[550px]">
        <img src={cohort2post?.post_image} alt="img" className="h-60 w-full" />
        <h5 className="text-green-500">{cohort2post?.title}</h5>
        <p
          className="text-gray-600 h-56 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: cohort2post?.post_content }}
        />
        <button>readmore</button>
      </div>
    </Link>
  );
};

export default SingleBlogPost;
