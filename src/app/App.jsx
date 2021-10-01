import Layout from "../components/layout/layout";
import RightSideBar from "../components/Right-side-bar/RightSideBar";
import LeftSideBar from "../components/Left-side-bar/LeftSideBar";

function App() {
  return (
    <>
      <Layout>
        <LeftSideBar />
        <RightSideBar />
      </Layout>
    </>
  );
}

export default App;
