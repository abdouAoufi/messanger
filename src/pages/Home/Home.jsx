import React, { useContext, useLayoutEffect, useEffect } from "react";
import Layout from "../../components/layout/layout";
import LeftSide from "../../components/Left-side-bar/LeftSideBar";
import RightSide from "../../components/Right-side-bar/RightSideBar";
import { AuthContext } from "../../context/Auth/Auth";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const { isAuth, userInfo } = useContext(AuthContext);
  useLayoutEffect(() => {
    if (isAuth === false) {
      return history.replace("/get-started");
    }
  });
  useEffect(() => {
    console.log(userInfo);
  }, []);
  return (
    <Layout>
      <LeftSide />
      <RightSide />
    </Layout>
  );
}

export default Home;
