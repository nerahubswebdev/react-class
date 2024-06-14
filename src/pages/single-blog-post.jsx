import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const SingleBlogPost = ({ cohort2post }) => {
  //   const something = props.cohort2post;
  console.log("the posts => ", cohort2post?.User);

  return (
    <Link to={`/blog/${cohort2post?.slug}`}>
      <div className="border border-blue-300 drop-shadow-md rounded-md p-3 h-[550px]">
        <img src={cohort2post?.post_image} alt="img" className="h-60 w-full" />
        <Link
          to={`/${cohort2post?.User?.id}`}
          onClick={(e) => e.stopPropagation()}
          className="text-green-500"
        >
          {cohort2post?.title}
        </Link>
        {/* <p
          className="text-gray-600 h-56 overflow-hidden"
          dangerouslySetInnerHTML={{ __html: cohort2post?.post_content }}
        /> */}
        {/* <div>{parse(cohort2post?.post_content.slice(4, 100))}</div> */}
        <button>readmore</button>
      </div>
    </Link>
  );
};

export default SingleBlogPost;
