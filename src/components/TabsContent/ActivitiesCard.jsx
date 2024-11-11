import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';

import {
    faComments,
    faEnvelope,
    faStickyNote
} from "@fortawesome/free-solid-svg-icons";

const ActivitiesCard = () => {
    return (
        <>
            <div className="mx-0 ">

                <div className="top-header flex justify-between border-b">
                    <h4 className=" text-2xl font-semibold text-gray-700 mb-2 px-8 pb-4 ">
                        <i class="fa-solid fa-clock text-[#6D96F1] mr-3"></i>
                        Activities</h4>

                </div>

                {/* Post Feed */}
                <div className=" p-4">
                    <div className=" p-2 rounded-lg ">
                        <span className="text-sm bg-gray-200 text-purple-600   font-semibold px-[10px] py-[2px] rounded-sm ">
                            <i class="fa-regular fa-calendar-days mr-2"></i>
                            29 Aug 2023
                        </span>
                        <div className="flex items-start space-x-2 border rounded mt-4 p-3">
                            <FontAwesomeIcon icon={faEnvelope} className="text-white text-[10px] rounded-sm mt-1 bg-purple-500 p-3" />
                            <div>
                                <p className="text-gray-700">You sent 1 message to the contact.</p>
                                <p className="text-sm text-gray-500">10:25 pm</p>
                            </div>
                        </div>
                    </div>

                    <div className=" p-2 rounded-lg">
                        <div className="flex items-start space-x-2  border rounded p-3">
                            <FontAwesomeIcon icon={faComments} className="text-white text-[10px] rounded-sm mt-1 bg-green-500 p-3  " />
                            <div>
                                <p className="text-gray-700">
                                    Denwar responded to your appointment schedule question by call at 09:30pm.
                                </p>
                                <p className="text-sm text-gray-500">9:25 pm</p>
                            </div>
                        </div>
                    </div>

                    <div className=" p-2 rounded-lg">
                        <div className="flex items-start space-x-2  border rounded p-3">
                            <FontAwesomeIcon icon={faStickyNote} className="text-white text-[10px] rounded-sm mt-1 bg-orange-500 p-3" />
                            <div>
                                <p className="text-gray-700 font-semibold">Notes added by Antony</p>
                                <p className="text-gray-700">
                                    Please accept my apologies for the inconvenience caused. It would be much appreciated if it’s possible to
                                    reschedule to 6:00 PM, or any other day that week.
                                </p>
                                <p className="text-sm text-gray-500">10:00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivitiesCard