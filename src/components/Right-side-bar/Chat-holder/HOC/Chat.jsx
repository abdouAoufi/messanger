import React, { useState, useEffect, useLayoutEffect } from "react";
import { randomUserList } from "../../../../assests";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

const WithCurrentUser = (WrappedComponent) => {
  const Chat = (props) => {
    const id = useParams().userID;
    const [loading, setLoading] = useState(false);
    console.log(id);
    const [user, setUser] = useState({
      user: {
        name: "",
        occupation: "Student",
      },
    });

    useLayoutEffect(() => {
      setLoading(true);
      console.log("getting user");
      getUser();
    }, [id]);

    const getUser = () => {
      const name =
        randomUserList[Math.floor(Math.random() * randomUserList.length)];
      setTimeout(() => {
        setUser({ name: name, occupation: "student" });
        setLoading(false);
      }, 3000);
    };

    return (
      <>
        {loading ? (
          <Box component="div" sx={{ textAlign: "center", mt: 4 }}>
            Loading ... 
          </Box>
        ) : (
          <WrappedComponent {...props} currentUser={user} />
        )}
      </>
    );
  };
  return Chat;
};

export default WithCurrentUser;
