import React from 'react'

const OverviewCard = () => {
    return (
        <>
            <div className="mx-0 ">

                <div className="top-header flex justify-between border-b">
                    <h4 className=" text-2xl font-semibold text-gray-700 mb-2 px-8 pb-4 ">
                        <i class="fa-solid fa-clipboard text-[#6D96F1] mr-3"></i>
                        Overview</h4>


                </div>

                {/* Overview Feed */}
                <div className=" p-5">
                    <div className="sub-heading ">
                        <p className='text-gray-600 text-lg text-justify'>
                            Transform your car with professional detailing that goes beyond a standard wash. Our comprehensive car detailing services include precision interior cleaning, paint restoration, and protective treatments to bring back the showroom shine.
                        </p>

                    </div>

                    <div className="title my-6 ">
                        <h5 className='text-gray-900 text-2xl'>We offer</h5>
                    </div>

                    <div className="tabs flex justify-between">
                        <div className="tab-1 flex gap-4 items-center cursor-pointer bg-[#F9FAFB] text-[#6D96F1] w-52 p-3 rounded transform duration-500 hover:-translate-y-1">
                            <i class="fa-solid fa-arrow-right text-[#F97B24]"></i>
                            Car Paint
                        </div>
                        <div className="tab-2 flex gap-4 items-center cursor-pointer bg-[#F9FAFB] text-[#6D96F1] w-52 p-3 rounded transform duration-500 hover:-translate-y-1">
                            <i class="fa-solid fa-arrow-right text-[#F97B24]"></i>
                            PPF
                        </div>
                        <div className="tab-3 flex gap-4 items-center cursor-pointer bg-[#F9FAFB] text-[#6D96F1] w-52 p-3 rounded transform duration-500 hover:-translate-y-1">
                            <i class="fa-solid fa-arrow-right text-[#F97B24]"></i>
                            Car Repair
                        </div>
                    </div>

                    <div className="newsletter cursor-pointer transform duration-500 hover:-translate-y-1">
                        <div className="text my-10  space-y-2 bg-[#3B82F6] p-5 rounded">
                            <div className="sub-heading text-xl text-white font-bold">Why Choose Us?</div>
                            <div className="description text-base text-white">We provide the best services that meet your needs with a commitment to excellence.</div>
                        </div>
                        <div className="logo">
                            <img src="./assest/companyLogo" alt="" />
                        </div>
                    </div>

                    <div className="title-2 my-6 ">
                        <h5 className='text-gray-900 text-2xl'>We Accept</h5>
                    </div>



                </div>
            </div>
        </>
    )
}

export default OverviewCard