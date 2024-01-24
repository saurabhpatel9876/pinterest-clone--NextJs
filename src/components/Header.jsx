"use client"
// components/Header.js
import Link from 'next/link';
import { useState } from 'react';
import { GoSearch } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { HiSearch } from "react-icons/hi";
import { MdNotifications } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { useSession, signIn, signOut } from "next-auth/react"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession()

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className=" p-2">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo or brand */}
                <Link className="text-black text-lg font-bold hover:bg-gray-400 rounded-lg p-2 " href="/">
                    Your Log
                </Link>

                <div className="hidden lg:flex space-x-3">
                    <Link className="text-black hover:bg-gray-400 rounded-lg p-2 " href="/">
                        Home
                    </Link>
                    <Link className="text-black hover:bg-gray-400 rounded-lg p-2 " href="/about">
                        Explore
                    </Link>
                    <Link className="text-black hover:bg-gray-400 rounded-lg p-2 " href="/contact">
                        Create
                    </Link>
                    <Link className="text-black text-lg font-bold hover:bg-gray-400 rounded-lg p-2 " href="/login">
                    login
                </Link>
                </div>
                {/* <GoSearch/> */}
                <div className='bg-[#e9e9e9] p-1 px-1
         gap-3 items-center rounded-full  hidden md:flex '>
                    <HiSearch size={20}  className='text-[34px] 
        text-gray-500'/>
                    <input type="text" placeholder='Search'
                        className='bg-transparent outline-none w-full text-[15px]' />

                </div>

                <MdNotifications size={50} className='hover:bg-gray-400 rounded-lg'/>
                <MdMessage size={50} className='hover:bg-gray-400 rounded-lg'/>
                {/* Responsive toggle button */}
                <button
                    className="lg:hidden text-black focus:outline-none"
                    onClick={toggleNavbar}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>




                {/* Responsive Navbar links */}
                {isOpen && (


                    <div className="lg:hidden absolute top-16 left-0 right-0  p-2">

                        <div className='bg-[#e9e9e9] p-3 px-6
         gap-3 items-center rounded-full w-full md:flex'>
                            <HiSearch className='text-[10px] 
        text-gray-500'/>
                            <input type="text" placeholder='Search'
                                className='bg-transparent outline-none w-full text-[25px]' />

                        </div>



                        <Link className="block text-black mb-2" href="/">
                            Home
                        </Link>



                        <Link className="block text-black mb-2" href="/about">
                            About
                        </Link>
                        <Link className="block text-black" href="/contact">
                            Contact
                        </Link>
                        <Link className="text-black text-lg font-bold hover:bg-gray-400 rounded-lg p-2 " href="/">
                    logIn
                </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;



