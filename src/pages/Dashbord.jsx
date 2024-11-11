import React from 'react';
import Sidebar from '../components/Sidebar';
import MainComponent from '../components/MainComponent';


const Dashbord = () => {

    return (
        <>
            <div className="flex">
                <Sidebar />
                <MainComponent />
            </div>
        </>
    )
}


export default Dashbord