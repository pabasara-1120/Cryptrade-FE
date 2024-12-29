import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {DragHandleHorizontalIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import bitcoin from "@/assets/bitcoin.avif";
import Sidebar from "./Sidebar";
import {Button} from "@/components/ui/button.jsx";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="flex justify-between items-center h-16">
                {/* Left Section */}
                <div className="flex items-center gap-6">
                    <Sheet>
                        <SheetTrigger className="rounded-full p-2 hover:bg-gray-700 transition-colors">
                            <DragHandleHorizontalIcon className="h-6 w-6 text-white"/>
                        </SheetTrigger>
                        <SheetContent className="w-72 flex flex-col gap-5 bg-gray-900 text-white" side="left">
                            <SheetHeader>
                                <SheetTitle className="text-2xl flex justify-center items-center gap-3">
                                    <Avatar>
                                        <AvatarImage className="w-12 h-12 rounded-full" src={bitcoin} alt="Bitcoin Logo"/>
                                    </Avatar>
                                    <span className="font-bold text-indigo-300">CrypTrade</span>
                                </SheetTitle>
                            </SheetHeader>
                            <Sidebar/>
                        </SheetContent>
                    </Sheet>
                    <p className="text-sm lg:text-base font-medium">CrypTrade</p>
                </div>

                {/* Center Section */}
                <div className="flex-1 max-w-2xl px-4">
                    <Button variant="outlined" className="w-full flex items-center gap-2 justify-start px-4">
                        <MagnifyingGlassIcon className="h-4 w-4"/>
                        <span>Search</span>
                    </Button>
                </div>

                {/* Right Section */}
                <div>
                    <Avatar>
                        <AvatarFallback className="rounded-full p-2 hover:bg-gray-700 transition-colors h-10 w-10">
                            C
                        </AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;