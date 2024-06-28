import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/auth-context.jsx";
import { baseauth } from "../constants";

const About = () => {
  const { userData } = useAuthContext();

  console.log("the validated user data from about page => ", userData);

  const [postData, setPostData] = useState([]);

  console.log("posts inside post data state from about => ", postData);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseauth}/post/all-posts`);
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
      <p>About</p>
    </div>
  );
};

export default About;
