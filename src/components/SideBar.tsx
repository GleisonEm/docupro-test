
import React from 'react';

interface MenuItem {
  icon: string;
  label: string;
  active?: boolean;
}

const SideBar: React.FC = () => {
  const menuItems: MenuItem[] = [
    { icon: 'House', label: 'Home' },
    { icon: 'Calendar', label: 'Appointments' },
    { icon: 'FileText', label: 'Documents', active: true },
    { icon: 'Laptop', label: 'Notes' },
    { icon: 'Flask', label: 'Labs' },
    { icon: 'User', label: 'Profile' },
  ];

  return (
    <div className="layout-content-container flex flex-col w-80 md:w-64 sm:w-full">
      <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#FFFFFF] p-4">
        <div className="flex flex-col gap-4">
          {/* User profile */}
          <div className="flex gap-3">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/4e071187-1213-4783-a013-5e9da9a35fa5.png")' }}
            />
            <div className="flex flex-col">
              <h1 className="text-black text-base font-medium leading-normal">User's Name</h1>
              <p className="text-[#6B6B6B] text-sm font-normal leading-normal">View Profile</p>
            </div>
          </div>
          {/* Menu items */}
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <div key={item.label} className={`flex items-center gap-3 px-3 py-2 ${item.active ? 'rounded-full bg-[#EEEEEE]' : ''}`}>
                <div className="text-black">
                  {/* Add icon SVG here */}
                </div>
                <p className="text-black text-sm font-medium leading-normal">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;