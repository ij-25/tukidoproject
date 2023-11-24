import { VscBellDot } from "react-icons/vsc";
import { LuListTodo } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { FaRegEye } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const SideBar = () => {
    return (
        <div>
            <div className="flex bg-gray-100 text-gray-900">
                <aside className="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-gray-100">
                    <div className="flex h-[4.5rem] w-full items-center justify-center  p-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsapwuIZ2JPUVRaWSoX_xoEIOHWxneY7EupS8gsFriA&s" />
                    </div>
                    <nav className="flex flex-1 flex-col gap-y-8 pt-10">
                        <a
                            href="#"
                            className="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50"
                        >
                            <RxHamburgerMenu size={30} />

                        </a>

                        <a
                            href="#"
                            className="text-gary-400 group relative rounded-xl p-2 hover:bg-gray-50"
                        >
                            <VscBellDot size={25} />
                            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                    <div className="absolute inset-0 -left-1 flex items-center">
                                        <div className="h-2 w-2 rotate-45 bg-white" />
                                    </div>
                                    Color Scheme <span className="text-gray-400">(Y)</span>
                                </div>
                            </div>
                        </a>


                        <a
                            href="#"
                            className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
                        >
                            <IoSpeedometerOutline size={25} style={{ color: "gray" }} />

                            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                    <div className="absolute inset-0 -left-1 flex items-center">
                                        <div className="h-2 w-2 rotate-45 bg-white" />
                                    </div>
                                    Layouts <span className="text-gray-400">(Y)</span>
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
                        >
                            <LuListTodo size={25} style={{ color: "gray" }} />

                            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                    <div className="absolute inset-0 -left-1 flex items-center">
                                        <div className="h-2 w-2 rotate-45 bg-white" />
                                    </div>
                                    Layouts <span className="text-gray-400">(Y)</span>
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
                        >
                            <FaRegEye size={25} style={{ color: "gray" }} />

                            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                    <div className="absolute inset-0 -left-1 flex items-center">
                                        <div className="h-2 w-2 rotate-45 bg-white" />
                                    </div>
                                    Layouts <span className="text-gray-400">(Y)</span>
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
                        >
                            <MdPeopleAlt size={25} style={{ color: "gray" }} />

                            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                    <div className="absolute inset-0 -left-1 flex items-center">
                                        <div className="h-2 w-2 rotate-45 bg-white" />
                                    </div>
                                    Layouts <span className="text-gray-400">(Y)</span>
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50"
                        >
                            <VscGraph size={25} style={{ color: "gray" }} />

                            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
                                <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                                    <div className="absolute inset-0 -left-1 flex items-center">
                                        <div className="h-2 w-2 rotate-45 bg-white" />
                                    </div>
                                    Layouts <span className="text-gray-400">(Y)</span>
                                </div>
                            </div>
                        </a>

                    </nav>
                    <div className="flex flex-col items-center gap-y-4 py-10">

                        <button className="mt-2 rounded-full bg-gray-100">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://avatars.githubusercontent.com/u/35387401?v=4"
                                alt=""
                            />
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default SideBar
