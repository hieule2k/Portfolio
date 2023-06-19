import { useSelector } from "react-redux";
import Aboutme from "./module/Aboutme";
import Contact from "./module/Contact";
import DevProfile from "./module/DevProfile";
import Navbar from "./module/Navbar";
import Projects from "./module/Projects";
import pic from "./assets/images/schedule-table.png";
import car from "./assets/images/carRental2.png";

const projectData = [
  {
    name: "Car Rental ",
    img: car,
    desc: "A website that let customer buy their own wanted car, post and react to blog about car",
    mainFeature: [
      "Add To Cart",
      "Post-Delete-Update Blog",
      "Add React To Post",
      "Responsive",
    ],
    tech: ["React", "Redux", "Tailwind"],
    linkDemo:
      "https://car-rental-qjqv232nf-hieulequang455-gmailcom.vercel.app/",
    linkGithub: "https://github.com/hieule2k/CarRental.git",
  },
  {
    name: "Schedule Table",
    img: pic,
    desc: "A Schedule table with drag and drop subject, Add new Subject",
    mainFeature: [
      "Drag and Drop Subject",
      "Add New Subject with color",
      "Export Json File",
    ],
    tech: ["html", "css", "Vanilla Js"],
    linkDemo:
      "https://schedule-table-8lkropcej-hieulequang455-gmailcom.vercel.app/",
    linkGithub: "https://github.com/hieule2k/schedule-table.git",
  },
];

function App() {
  const burger = useSelector((state) => state.burger.boolean);

  return (
    <div>
      <Navbar></Navbar>
      <div
        className={` flex-col items-center justify-center w-full px-4 ${
          burger ? "hidden" : "flex"
        } `}
      >
        <DevProfile></DevProfile>
        <Aboutme></Aboutme>
        <h2 className="self-start mt-40 mb-12 text-2xl font-bold ">
          My personal Projects
        </h2>
        <div className="flex flex-col items-center justify-center w-full gap-8 px-4 xl:gap-20 ">
          {projectData.map((item) => (
            <Projects item={item}></Projects>
          ))}
        </div>
        <h2 className="self-start mt-40 mb-12 text-2xl font-bold ">
          Contact Me
        </h2>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
