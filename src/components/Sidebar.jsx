import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as UploadIcon } from '../assets/icons/upload.svg';
import { ReactComponent as InvoiceIcon } from '../assets/icons/invoice.svg';
import { ReactComponent as ScheduleIcon } from '../assets/icons/schedule.svg';
import { ReactComponent as CalendarIcon } from '../assets/icons/calendar.svg';
import { ReactComponent as NotificationIcon } from '../assets/icons/notification.svg';
import { ReactComponent as SettingsIcon } from '../assets/icons/settings.svg';
import { ReactComponent as CloseIcon } from '../assets/icons/close-icon.svg';

const navItems = [
    { to: "/dashboard", icon: <DashboardIcon />, label: "Dashboard" },
    { to: "/dashboard", icon: <UploadIcon />, label: "Upload" },
    { to: "/dashboard", icon: <InvoiceIcon />, label: "Invoice" },
    { to: "/dashboard", icon: <ScheduleIcon />, label: "Schedule" },
    { to: "/dashboard", icon: <CalendarIcon />, label: "Calendar" },
    { to: "/dashboard", icon: <NotificationIcon />, label: "Notification" },
    { to: "/dashboard", icon: <SettingsIcon />, label: "Settings" },
];

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header min-w-52">
                <div className="sidebar-logo">
                    <Logo />
                    <span>Base</span>
                </div>
                {
                    <button onClick={onClose} className="close-button lg:hidden">
                        <CloseIcon className="h-10 w-10 mr-0" />
                    </button>
                }
            </div>
            <nav className="sidebar-nav">
                {navItems.map((item, index) => (
                    <Link key={index} to={item.to} className="sidebar-link">
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
