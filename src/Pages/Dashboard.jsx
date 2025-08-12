import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='bg-slate-100 p-4 flex flex-col space-y-4'>
            <NavLink to={'/dashboard/candidate_profile'} className={({isActive}) => 
            isActive ? 'btn bg-black text-white' : 'btn bg-transparent'
            } >Profile</NavLink>
            <NavLink to={'/dashboard/applications'} className={({isActive}) => 
            isActive ? 'btn bg-black text-white' : 'btn bg-transparent'
            } >Applications</NavLink>
        </div>
    );
};

export default Dashboard;