import React from 'react'
import { PiWebcamLight } from "react-icons/pi";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { MdOutlineTimeToLeave } from "react-icons/md";

const Area = () => {
    return (
        <div className='flex flex-col max-w-[18rem]' >
            <div className="max-w-[15rem] rounded-lg bg-white  dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                        alt=""
                    />
                </div>

            </div>
            <div className="max-w-[15rem] my-10 rounded-lg bg-white  dark:bg-neutral-700">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className='flex gap-8 flex-wrap'>
                <p>
                    <PiWebcamLight size={50} className='bg-gray-300 rounded' />
                    Cam
                </p>
                <p>
                    <CiMicrophoneOn size={50} className='bg-gray-300 rounded' />
                    Cam
                </p>
                <p>
                    <FaRegShareSquare size={50} className='bg-gray-300 rounded' />
                    Cam
                </p>
                <p>
                    <FaRocketchat size={50} className='bg-gray-300 rounded' />
                    Cam
                </p>
                <p>
                    <MdOutlineTimeToLeave size={50} className='bg-gray-300 rounded' />
                    Cam
                </p>
            </div>




        </div>
    )
}

export default Area
