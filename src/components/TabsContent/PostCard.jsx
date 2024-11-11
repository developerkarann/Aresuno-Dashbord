import React from 'react'

const PostCard = () => {
    return (
        <>
            <div className="mx-0 ">

                <div className="top-header flex justify-between border-b">
                    <h4 className=" text-2xl font-semibold text-gray-700 mb-2 px-8 pb-4 ">
                        <i class="fa-solid fa-blog text-[#6D96F1] mr-3"></i>
                        Posts</h4>

                </div>

                {/* Post Feed */}
                <div className=" p-4">
                    <div class="max-w-screen-xl">
                        <div className="post">
                            <div class="sm:grid lg:grid-cols-2 sm:grid-cols-2 gap-10">
                                <div class=" w-80 hover:bg-[#3B82F6] hover:text-white transition duration-500 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1">
                                    <div class="py-2 px-4">
                                        <a href="#">
                                            <h4 class="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
                                        </a>
                                        <p class="mb-2 text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                        <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-100" />

                                        <hr class="mt-4" />
                                        <span class="text-xs">Read more</span>
                                    </div>
                                </div>
                                <div class=" w-80 hover:bg-[#3B82F6] hover:text-white transition duration-500 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1">
                                    <div class="py-2 px-4">
                                        <a href="#">
                                            <h4 class="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
                                        </a>
                                        <p class="mb-2 text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                        <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-100" />

                                        <hr class="mt-4" />
                                        <span class="text-xs">Read more</span>
                                    </div>
                                </div>
                                <div class=" w-80 hover:bg-[#3B82F6] hover:text-white transition duration-500 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1">
                                    <div class="py-2 px-4">
                                        <a href="#">
                                            <h4 class="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
                                        </a>
                                        <p class="mb-2 text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                        <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-100" />

                                        <hr class="mt-4" />
                                        <span class="text-xs">Read more</span>
                                    </div>
                                </div>
                                <div class=" w-80 hover:bg-[#3B82F6] hover:text-white transition duration-500 max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-1">
                                    <div class="py-2 px-4">
                                        <a href="#">
                                            <h4 class="text-lg mb-3 font-semibold">How to be effective at working remotely?</h4>
                                        </a>
                                        <p class="mb-2 text-sm text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                        <img src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-100" />

                                        <hr class="mt-4" />
                                        <span class="text-xs">Read more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard