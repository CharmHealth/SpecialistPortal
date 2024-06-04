import React from 'react';
import DashboardProfile from './DashboardProfile';
import DashboardBills from './DashboardBills';
import DashboardAppointments from './DashboardAppointments';
const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Left side (50% width) */}
      <div className="s:w-full m:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-10">
        <div className="s:h-1/3 m:h-1/3 s:h-1/3 h-full">
          {/* Content for the left side */}
          <DashboardProfile />
        </div>
      </div>

      {/* Right side (50% width) */}
      <div className="s:w-full m:w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 p-4">
        {/* Upper right element (25% height) */}
        <div className="h-1/2 mb-4">
          <DashboardAppointments />
        </div>

        {/* Lower right element (25% height) */}
        <div className="h-1/2">
          <DashboardBills />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
