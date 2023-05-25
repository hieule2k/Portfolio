import Aboutme from "./module/Aboutme";
import DevProfile from "./module/DevProfile";
import Navbar from "./module/Navbar";
import Projects from "./module/Projects";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center w-full px-4">
        <DevProfile></DevProfile>
        <Aboutme></Aboutme>
        <h2 className="self-start mt-40 mb-12 text-2xl font-bold ">
          My personal Projects
        </h2>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
