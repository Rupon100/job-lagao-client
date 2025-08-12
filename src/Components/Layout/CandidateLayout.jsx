import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard';

const CandidateLayout = () => {
    return (
        <div className='flex gap-4' >
            <Dashboard ></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default CandidateLayout;