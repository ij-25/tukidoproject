import { FaSquarePhone } from "react-icons/fa6";
import { FcOnlineSupport } from "react-icons/fc";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Header from "./Header";
import Area from "./Area";
import Video from "./Video";

const NavBar = () => {
    return (
        <>

            <div className="flex flex-col">
                <div className="flex justify-between px-20 py-5 items-center bg-white">
                    <div className="flex items-center  space-x-4">
                        <MdOutlineArrowBackIosNew size={25} style={{ padding: "1px" }} className="rounded bg-gray-200" />
                        <h1 className="text-3xl text-gray-800 font-bold ml-2">Basic Mathematics 101</h1>
                    </div>

                    <div className="flex items-center">
                        <ul className="flex items-center space-x-2">
                            <FaSquarePhone size={25} style={{ color: "skyblue" }} className="rounded" />
                            <li className="font-semibold text-gray-700">Call Teacher</li>
                            <FcOnlineSupport size={25} className="rounded" />
                            <li className="font-semibold text-gray-700">Support</li>
                        </ul>
                    </div>
                </div>
                <div className="my-20">
                    <Header />
                </div>


            </div >
        </>
    );
}


export default NavBar
