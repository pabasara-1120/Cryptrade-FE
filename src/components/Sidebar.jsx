import React from 'react';
import {
    ArrowUpCircleIcon,
    BriefcaseIcon,
    CreditCardIcon,
    EyeIcon,
    HomeIcon,
    ListIcon, LogOutIcon,
    UserIcon,
    WalletIcon
} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router";

const menu = [
    { name: 'Home', path: "/", icon: <HomeIcon /> },
    { name: 'Watchlist', path: "/watchlist", icon: <EyeIcon /> }, // Replace with your preferred icon
    { name: 'Portfolio', path: "/portfolio", icon: <BriefcaseIcon /> }, // Replace with your preferred icon
    { name: 'Activity', path: "/activity", icon: <ListIcon /> }, // Replace with your preferred icon
    { name: 'Wallet', path: "/wallet", icon: <WalletIcon /> }, // Replace with your preferred icon
    { name: 'Payment Details', path: "/payment-details", icon: <CreditCardIcon /> }, // Replace with your preferred icon
    { name: 'Withdrawal', path: "/withdrawal", icon: <ArrowUpCircleIcon /> }, // Replace with your preferred icon
    { name: 'Profile', path: "/profile", icon: <UserIcon /> }, // Replace with your preferred icon
    { name: 'Logout', path: "/logout", icon: <LogOutIcon /> }, // Replace with your preferred icon
];




const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className={"mt-5 space-y-3"}>
            {menu.map((item, index) => (
                <Button variant={"outlined"}
                    key={index}
                    className="flex justify-items-start gap-3 py-3 px-4 w-full hover:bg-gray-700 rounded-lg transition-colors text-left"
                    onClick={() => navigate(item.path)}>
                    <span className="text-cyan-300">{item.icon}</span>
                    <p className={"text-xl"}>{item.name}</p>
                </Button>
            ))}
        </div>
    );
};

export default Sidebar;
