import React from 'react';
import { ReactComponent as MenuIcon } from '../assets/icons/burger-regular.svg';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as NotificationIcon } from '../assets/icons/bellIcon.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/profileIcon.svg';

const NavigationBar = ({ onMenuClick, isOpen }) => {
    return (
        <div className="lg:bg-gray-100 sm:bg-white shadow-md p-4 flex items-center">
            <div className="flex items-center sm:visible">
                {!isOpen && (
                    <>
                        <button onClick={onMenuClick}>
                            <MenuIcon />
                        </button>
                        <div className="sidebar-logo flex items-center ml-2">
                            <Logo />
                            <span className="ml-2">Base</span>
                        </div>
                    </>
                )}
            </div>
            <h1 className="text-2xl font-bold ml-4 hidden lg:block">Upload CSV</h1>
            <div className="flex justify-end flex-grow mr-0 space-x-4">
                <div className="flex-item"><NotificationIcon /></div>
                <div className="flex-item"><ProfileIcon /></div>
            </div>
        </div>


    );
};

export default NavigationBar;
