import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './css/dashboard.css';

import {
    faComments,
    faEnvelope,
    faStar,
    faStickyNote
} from "@fortawesome/free-solid-svg-icons";
import OverviewCard from './TabsContent/OverviewCard';
import BranchesCard from './TabsContent/BranchesCard';
import ServiceCard from './TabsContent/ServiceCard';
import ProductCard from './TabsContent/ProductCard';
import PostCard from './TabsContent/PostCard';
import TimingCard from './TabsContent/TimingCard';
import ActivitiesCard from './TabsContent/ActivitiesCard';

const RightSection = () => {

    const [toggle, setToggle] = useState(1)

    const updateToggle = (id) => {
        setToggle(id)
    }

    return (
        <div className="right-section min-w-[100%]">
            <div className="flex border-b mb-4 rounded-lg px-10 pt-4 gap-6 bg-white">
                <button onClick={() => updateToggle(1)}
                    className={`text-gray-800 border-b-2 border-white hover:border-[#6D96F1] pb-2 font-semibold flex items-center `}>
                    <i class="fa-solid fa-clock text-[11px] mr-1 text-[#6D96F1] "></i> Activities</button>
                    
                <button onClick={() => updateToggle(2)}
                    className={`text-gray-500 pb-2 flex items-center border-b-2 border-white hover:border-[#6D96F1]`}>
                    <i class="fa-solid fa-clipboard text-[11px] mr-1 text-[#6D96F1]"></i>Overview</button>
                    
                <button onClick={() => updateToggle(3)}
                    className={`text-gray-500 pb-2 flex items-center border-b-2 border-white hover:border-[#6D96F1]`}>
                    <i class="fa-solid fa-location-dot text-[11px] mr-1 text-[#6D96F1]"></i>Branches</button>
                    
                <button onClick={() => updateToggle(4)}
                    className={`text-gray-500 pb-2 flex items-center border-b-2 border-white hover:border-[#6D96F1]`}>
                    <i class="fa-solid fa-cart-shopping text-[11px] mr-1 text-[#6D96F1]"></i>Service</button>
                    
                <button onClick={() => updateToggle(5)}
                    className={`text-gray-500 pb-2 flex items-center border-b-2 border-white hover:border-[#6D96F1]`}>
                    <i class="fa-solid fa-bookmark text-[11px] mr-1 text-[#6D96F1]"></i>Products</button>
                    
                <button onClick={() => updateToggle(6)}
                    className={`text-gray-500 pb-2 flex items-center border-b-2 border-white hover:border-[#6D96F1]`}>
                    <i class="fa-solid fa-blog text-[11px] mr-1 text-[#6D96F1]"></i>Post</button>
                    
                <button onClick={() => updateToggle(7)}
                    className={`text-gray-500 pb-2 flex items-center border-b-2 border-white hover:border-[#6D96F1]`}>
                    <i class="fa-solid fa-clock text-[11px] mr-1 text-[#6D96F1]"></i>Timing</button>
                    
            </div>

            {/* Activities Section */}
            <div className={`bg-white py-4 ${toggle === 1 ? 'show-content' : 'hide-content'}`}>
                <ActivitiesCard />
            </div>
            {/* Overview Section */}
            <div className={`bg-white py-4 ${toggle === 2 ? 'show-content' : 'hide-content'}`}>
                <OverviewCard />
            </div>
            {/* Branchase Section */}
            <div className={`bg-white py-4 ${toggle === 3 ? 'show-content' : 'hide-content'}`}>
                <BranchesCard />
            </div>
            {/* Service Section */}
            <div className={`bg-white py-4 ${toggle === 4 ? 'show-content' : 'hide-content'}`}>
                <ServiceCard />
            </div>
            {/* Product Section */}
            <div className={`bg-white py-4 ${toggle === 5 ? 'show-content' : 'hide-content'}`}>
                <ProductCard />
            </div>
            {/* Post Section */}
            <div className={`bg-white py-4 ${toggle === 6 ? 'show-content' : 'hide-content'}`}>
                <PostCard />
            </div>
            {/* Timing Section */}
            <div className={`bg-white py-4 ${toggle === 7 ? 'show-content' : 'hide-content'}`}>
                <TimingCard />
            </div>
        </div>
    )
}

export default RightSection