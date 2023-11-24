import Area from "./components/Area";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Video from "./components/Video";

export default function App() {
  return (
    <>
      <div className="flex h-screen">
        <SideBar />

        <div className="flex flex-col">
          <NavBar />
          <div className="flex">
            <div className="px-[3rem]">
              <Area />
            </div>
            <div className="flex flex-grow justify-end">
              <Video />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
