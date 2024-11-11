import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBoxOpen, faUserFriends, faBuilding, faHandshake, faBullseye, faChartLine, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <>
            <div className=" min-w-72 bg-white shadow-md h-screen p-2">
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-8">
                    <img src="https://via.placeholder.com/40" alt="Logo" className="w-10 h-10" />
                    <h1 className="text-xl font-bold text-gray-800">CRMS</h1>
                </div>

                {/* Profile Section */}
                <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-8">
                    <img src="https://via.placeholder.com/40" alt="Adrian Davies" className="w-10 h-10 rounded-full" />
                    <div className="ml-3">
                        <p className="text-gray-800 font-semibold">Adrian Davies</p>
                        <p className="text-gray-500 text-sm">Tech Lead</p>
                    </div>
                </div>

                {/* Main Menu */}
                <div>
                    <p className="text-gray-500 text-sm font-bold mb-3 ml-2">MAIN MENU</p>
                    <ul className='ml-3'>
                        <li className="flex items-center space-x-2 px-2 text-gray-800 py-2 hover:text-[#3B82F6] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faTachometerAlt} className="text-gray-500 bg-[#F6F6F6]" />
                            <span>Dashboard</span>
                        </li>
                        <li className="flex items-center space-x-2 px-2 text-gray-800 py-2 hover:text-[#3B82F6] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faBoxOpen} className="text-gray-500 icon" />
                            <span>Application</span>
                        </li>
                    </ul>
                </div>

                {/* CRM Menu */}
                <div className="mt-6">
                    <p className="text-gray-500 text-sm font-bold mb-3 ml-3">CRM</p>
                    <ul className='ml-3'>
                        <li className="flex items-center space-x-2 px-2 text-gray-800 py-2 hover:text-[#3B82F6] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faUserFriends} className="text-gray-500" />
                            <span>Contacts</span>
                        </li>
                        <li className="flex items-center space-x-2 px-2 text-[#3B82F6] hover:text-[#3B82F6] bg-blue-50 py-2 rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faBuilding} className="text-[#3B82F6] hover:text-[#3B82F6] bg-[#F6F6F6] " />
                            <span>Companies</span>
                        </li>
                        <li className="flex items-center space-x-2 px-2 text-gray-800 py-2 hover:text-[#3B82F6] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faHandshake} className="text-gray-500" />
                            <span>Deals</span>
                        </li>
                        <li className="flex items-center space-x-2 px-2 text-gray-800 py-2 hover:text-[#3B82F6] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faBullseye} className="text-gray-500" />
                            <span>Leads</span>
                        </li> 
                        <li className="flex items-center space-x-2 px-2 text-gray-800 py-2 hover:text-[#3B82F6] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faChartLine} className="text-gray-500" />
                            <span>Pipeline</span>
                        </li>
                        <li className="flex items-center space-x-2 px-2 text-gray-800 py-2 hover:text-[#3B82F6] rounded-lg cursor-pointer">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
                            <span>Campaign</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar