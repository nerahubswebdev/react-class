import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseapi } from "../constants";

const Profile = () => {
  const params = useParams();
  const [post, setPost] = useState();
  console.log("from the post => ", params.userid);

  console.log("the set post => ", post);

  console.log("the link => ", baseapi);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${baseapi}/post/userposts/${params?.userid}`
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
        console.log("the post => ", miles?.userdetails);
        setPost(miles?.userdetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>Profile</div>;
};

export default Profile;
