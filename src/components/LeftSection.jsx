import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faStar
} from "@fortawesome/free-solid-svg-icons";

const LeftSection = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-64 text-gray-700">
      {/* Basic Information */}
      <div className="mb-4 border-b">
        <h2 className="font-semibold text-gray-800">Basic Information</h2>
        <div className="mt-2">
          <div className=" text-gray-500">
            <div className="flex items-center space-x-2 text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="text-[8px] p-1 bg-gray-200 rounded-3xl" />
              <span>NovaW@example.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mt-2">
              <FontAwesomeIcon icon={faPhone} className="text-[8px] p-1 bg-gray-200 rounded-3xl" />
              <span>+1 12445-47878</span>
            </div>
            <div className="flex items-center space-x-2 text-sm mt-2 p-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-[8px] p-1 bg-gray-200 rounded-3xl" />
              <span>Created on 5 Jan 2024, 10:30 am</span>
            </div>
          </div>
        </div>
      </div>

      {/* Other Information */}
      <div className="mb-4 border-b pb-4">
        <h2 className="font-semibold text-gray-800">Other Information</h2>
        <div className="mt-2 text-sm  space-y-4 text-gray-500">
          <div className="flex justify-between">
            <span>Language</span>
            <span className="">English</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Currency</span>
            <span className="">United States dollar</span>
          </div>
          <div className="flex justify-between mt-1">
            <span className="">Last Modified</span>
            <span className="">27 Sep 2023, 11:45 pm</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Source</span>
            <span className="">Paid Campaign</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <h2 className="font-semibold text-gray-800">Tags</h2>
        <div className="flex space-x-2 mt-2">
          <span className="px-2 py-1 text-xs  text-green-700 bg-green-100 rounded-md">Collab</span>
          <span className="px-2 py-1 text-xs  text-yellow-700 bg-yellow-100 rounded-md">Rated</span>
        </div>
      </div>

      {/* Company */}
      <div className="border-b pb-5">
        <div className="flex justify-between">
          <h2 className="font-semibold text-gray-800">Company</h2>
          <div className="mt-2 text-xs text-purple-600 font-semibold cursor-pointer hover:underline">
            + Add New
          </div>
        </div>


        <div className="flex flex-col space-y-2 mt-2 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="https://via.placeholder.com/24" alt="Company Logo" className="w-6 h-6 rounded-full" />
              <span>NovaWaveLLC</span>
            </div>
            <div className="flex items-center text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
              <span className="ml-1 ">3.5</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="https://via.placeholder.com/24" alt="Company Logo" className="w-6 h-6 rounded-full" />
              <span>BlueSky Industries</span>
            </div>
            <div className="flex items-center text-yellow-500">
              <FontAwesomeIcon icon={faStar} />
              <span className="ml-1 ">4.2</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeftSection;
