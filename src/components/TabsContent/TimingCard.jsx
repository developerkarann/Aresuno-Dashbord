import React from 'react'

const TimingCard = () => {
    return (
        <>
            <div className="mx-0 ">

                <div className="top-header flex justify-between border-b">
                    <h4 className=" text-2xl font-semibold text-gray-700 mb-2 px-8 pb-4 ">
                        <i class="fa-solid fa-clock text-[#6D96F1] mr-3"></i>
                        Business Timings</h4>

                </div>

                {/* Branshes Feed */}
                <div className=" p-4">
                    <div className="timings grid grid-cols-2 gap-5 ">
                        <div className="time-1 bg-[#D9E9FE] w-80 flex justify-center items-center p-1 rounded flex-col cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div className="day text-[#315EDC] font-bold">Monday</div>
                            <div className="time text-[#4874eb]">10:00 - 21:00</div>
                        </div>
                        <div className="time-1 bg-[#D9E9FE] w-80 flex justify-center items-center p-1 rounded flex-col cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div className="day text-[#315EDC] font-bold">Tuesday</div>
                            <div className="time text-[#4874eb]">10:00 - 21:00</div>
                        </div>
                        <div className="time-1 bg-[#D9E9FE] w-80 flex justify-center items-center p-1 rounded flex-col cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div className="day text-[#315EDC] font-bold">Wednesday</div>
                            <div className="time text-[#4874eb]">10:00 - 21:00</div>
                        </div>
                        <div className="time-1 bg-[#D9E9FE] w-80 flex justify-center items-center p-1 rounded flex-col cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div className="day text-[#315EDC] font-bold">Thursday</div>
                            <div className="time text-[#4874eb]">10:00 - 21:00</div>
                        </div>
                        <div className="time-1 bg-[#D9E9FE] w-80 flex justify-center items-center p-1 rounded flex-col cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div className="day text-[#315EDC] font-bold">Friday</div>
                            <div className="time text-[#4874eb]">10:00 - 21:00</div>
                        </div>
                        <div className="time-1 bg-[#D9E9FE] w-80 flex justify-center items-center p-1 rounded flex-col cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div className="day text-[#315EDC] font-bold">Saterday</div>
                            <div className="time text-[#4874eb]">10:00 - 21:00</div>
                        </div>
                        <div className="time-1 bg-[#D9E9FE] w-80 flex justify-center items-center p-1 rounded flex-col cursor-pointer transform duration-500 hover:-translate-y-1">
                            <div className="day text-[#315EDC] font-bold">Sunday</div>
                            <div className="time text-[#4874eb]">10:00 - 21:00</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default TimingCard