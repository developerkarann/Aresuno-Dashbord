import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import './css/dashboard.css';

import {
    faStar
} from "@fortawesome/free-solid-svg-icons";

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const MainComponent = () => {
    return (
        <>
            {/* Header */}

            <div className="header w-full ">

                <div className="header-left">
                    <img src="./assest/logo.png" alt="Logo" className="w-30 h-11" />
                    {/* <h1 className="text-xl font-bold text-gray-800">CRMS</h1> */}
                    <i class="fa-solid fa-arrow-left"></i>
                </div>

                <div className="header-user">
                    <div className="user-menu">
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none w-full text-gray-700"
                        />
                        {/* <FontAwesomeIcon icon={faTh} className="text-gray-400" /> */}


                    </div>

                </div>

                <div className="header-icons flex items-center float-end ml-60">
                    <div className="colorMode flex items-center gap-3">
                        <div className="colorBox flex border rounded gap-2 p-[5px]  text-[14px]">
                            <i class="fa-regular fa-sun p-2 rounded bg-green-500 text-white"></i>
                            <i class="fa-solid fa-moon p-2"></i>
                        </div>

                        <div className=" p-[5px] rounded bg-green-100 text-green-800 px-3 border border-green-600">
                            <i class="fa-brands fa-windows"></i>

                        </div>
                        <div className="p-[5px] rounded bg-purple-100 text-purple-800 px-3 border">
                            <i class="fa-solid fa-question"></i>

                        </div>

                        <div className=" p-[5px] rounded bg-orange-100 text-orange-400 px-3 border-e">
                            <i class="fa-solid fa-cookie-bite"></i>

                        </div>

                        <div className="flex items-center space-x-2 mr-2">
                            <button className="bg-gray-100 text-[12px] p-3 rounded relative hover:bg-red-300">
                                <i class="fa-regular fa-message"></i>
                                <span className="absolute -top-0 -right-0 bg-[#3B82F6] hover:bg-[#3674da] font-bold text-white text-xs rounded-full px-1">14</span>
                            </button>
                            <button className="bg-gray-100 text-[12px] p-3 rounded relative hover:bg-blue-300">
                                <i class="fa-regular fa-bell"></i>
                                <span className="absolute -top-0 -right-0 bg-[#3B82F6] hover:bg-[#3674da] font-bold text-white text-xs rounded-full px-1">13</span>
                            </button>
                        </div>

                    </div>

                    {/* Profile Section */}
                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                </div>

            </div>


            {/* Main Component  */}

            <div className="main-component">
                <div className="p-6 bg-gray-100 min-h-screen mt-14">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-[20px] font-bold text-gray-700">Company Overview</h2>

                        <div className="icons">
                            <i class="fa-solid fa-rotate text-[10px] p-2 bg-white rounded-sm mr-3"></i>
                            <i class="fa-solid fa-angle-up text-[10px] p-2 bg-white  rounded-sm"></i>
                        </div>
                    </div>
                    <div className="navigation flex mb-4 justify-between ">
                        <div className=" flex route-content items-center">
                            <i class="fa-solid fa-arrow-left mr-3 text-red-500 text-[10px]"></i>
                            <h2 className="text-1xl text-gray-500">Company / NovaWave LLC</h2>
                        </div>

                        <div className="pegination flex items-center  text-gray-500 ">
                            <div className="current-page text-[14px] ">
                                1
                            </div>
                            <p className="mx-1 text-[14px]">of</p>
                            <div className="total-page text-[14px]">40 </div>
                            <div className="icons px-2 ">
                                <i class="fa-solid fa-chevron-left text-[10px] p-2 bg-white mr-2 rounded-full" ></i>
                                <i class="fa-solid fa-chevron-right text-[10px] p-2 bg-white rounded-full " ></i>
                            </div>
                        </div>
                    </div>


                    <div className="rounded-lg">
                        {/* Company Info Section */}
                        <div className="flex items-center pb-4 mb-5 rounded-lg p-4 bg-white">
                            <div className="flex items-center space-x-4">
                                {/* <img src="https://via.placeholder.com/60" alt="Company Logo" className="w-16 h-16 rounded-full" /> */}
                                <img src="./assest/companyLogo.png" alt="Company Logo" className=" border w-16 h-16 rounded" />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-700">NovaWave LLC</h3>
                                    <p className="text-sm text-gray-500">22, Ave Street, New York, USA</p>
                                    <div className="flex items-center space-x-1 text-yellow-500">
                                        <FontAwesomeIcon icon={faStar} />
                                        <span>5.0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto flex space-x-2 ">
                                <div className="flex items-center space-x-1 text-[20px] border p-2 rounded-full text-yellow-500">
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <button className="bg-[#3B82F6] hover:bg-[#3674da] text-white px-4 py-2 rounded-lg"> <i class="fa-solid fa-plus"></i> Add Deal</button>
                                <button className="bg-[#3B82F6] hover:bg-[#3674da] text-white px-4 py-2 rounded-lg"> <i class="fa-regular fa-envelope"></i>  Send Email</button>

                                <div className="icons gap-2 flex  rounded-lg">
                                    <i class="fa-regular fa-comment bg-gray-100 text-[12px] p-3 rounded" ></i>
                                    <i class="fa-regular fa-pen-to-square bg-gray-100 text-[12px] p-3 rounded"></i>
                                    <i class="fa-solid fa-ellipsis-vertical bg-gray-100 text-[12px] p-3 rounded" ></i>
                                </div>
                            </div>
                        </div>

                        <div className="main-container flex">

                            <div className="left-section">
                                <LeftSection />
                            </div>
                            <div className="right-section ml-3 rounded-lg px-4">
                                <RightSection />
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default MainComponent