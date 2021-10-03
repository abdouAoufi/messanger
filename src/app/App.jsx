import Layout from "../components/layout/layout";
import RightSideBar from "../components/Right-side-bar/RightSideBar";
import LeftSideBar from "../components/Left-side-bar/LeftSideBar";

function App() {
  return (
    <div>
      <Layout>
        <LeftSideBar />
        <RightSideBar />
      </Layout>
    </div>
  );
}

export default App;

