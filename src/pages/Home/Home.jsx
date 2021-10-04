import React from "react";
import Layout from "../../components/layout/layout";
import LeftSide from "../../components/Left-side-bar/LeftSideBar";
import RightSide from "../../components/Right-side-bar/RightSideBar";

function Home() {
  return (
    <Layout>
      <LeftSide />
      <RightSide />
    </Layout>
  );
}

export default Home;
