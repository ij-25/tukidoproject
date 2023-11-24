import React from "react";
import { motion } from "framer-motion";

const Header = () => {
    const links = [
        { name: "Classroom", hash: "#home" },
        { name: "Whiteboard", hash: "#about" },
        { name: "Videos", hash: "#about" },
        { name: "Slideshow", hash: "#about" },
        { name: "Documents", hash: "#services" },
        { name: "Doc Came", hash: "#services" },
        // Add more links as needed
    ];

    return (
        <header className="z-[999]  relative">
            <motion.div
                className="fixed top-20 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-[8rem] sm:h-[3.25rem] sm:w-[80rem] sm:rounded-full dark:bg-gray-300 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[8rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-around gap-y-1 text-[1.2rem] font-medium text-black sm:w-[initial] sm:flex-nowrap sm:gap-20">
                    {links.map((link) => (
                        <li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            style={{
                                transform: "translateY(0)",
                                opacity: 1,
                            }}
                        >
                            <span
                                className="bg-gray-200 rounded-full absolute inset-0 -z-10 "
                            ></span>
                            <a
                                className="flex w-[8rem] items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-800"
                                href={link.hash}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
