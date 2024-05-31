import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ThePost = () => {
  const params = useParams();
  const [post, setPost] = useState();
  console.log("from the post => ", params);

  // function to get the single blog post

  console.log("posts inside post data state => ", post);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://cohort2-blog-api.onrender.com/post/${params.slug}`
      );
      const fullresponse = response.json();
      return fullresponse;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData()
      .then((miles) => {
        console.log("the post => ", miles);
        setPost(miles.post);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="p-3">
        <img src={post?.post_image} alt="img" />
        <h5 className="text-green-500">{post?.title}</h5>
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: post?.post_content }}
        />
      </div>
    </div>
  );
};

export default ThePost;
