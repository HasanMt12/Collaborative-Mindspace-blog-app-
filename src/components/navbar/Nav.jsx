'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Tooltip} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import ThemeToggle from "../themeToggleButton/ThemeToggleButton";
import Link from "next/link";
import { FiEdit } from 'react-icons/fi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Image from "next/image";

const Nav =  () => {
  const { data: session , status } = useSession();
    const [toastShown, setToastShown] = useState(false);
  const CustomToast = () => (
  <div className="flex justify-center items-center gap-1"> 
    <div className="text-gray-500">😊 Write Your  Blog</div>
    <Link to="/write" href="/write"> here</Link>
  </div>
);
  // Function to show a delayed toast message
    if (!toastShown && status === "authenticated") {
      toast.info(<CustomToast />, {
        autoClose: 3000, // Auto close the toast after 3 seconds (3000 milliseconds)
        position: "top-right",
        style: {
          backgroundColor:"white",
        color: "#0A8080", // Text color
      },
      });
      setToastShown(true); // Mark the toast as shown
    }

    return (
    <Navbar className="bg-transparent rounded-lg" justify="start">
     
      <NavbarBrand  justify="start" className="">
        <Link to="/" href="/">
           <Image src="/g.png"  height={60} width={120} alt="logo" className=""></Image>
       </Link>
      </NavbarBrand>
    

      <NavbarContent className="hidden sm:flex gap-4 hover:text-cyan-600 font-merriweather" justify="center">
        <NavbarItem>
          <Link to="/blog" href="/blog"  color="foreground" >
           blog
          </Link>
        </NavbarItem>
      
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <ThemeToggle />
          {session ? (
            <>
        <Link to="/write" color="foreground" href="/write">
          <NavbarItem className="flex items-center justify-center hover:text-cyan-600">
            <FiEdit /> write
              </NavbarItem>
            </Link>
          <ToastContainer icon={false}/>
          </>
        ) : (
          <Link to="/login" color="foreground" href="/login">
            <Tooltip color="warning" closeDelay={2000} content="Please Login First" className="custom-tooltip">
            <NavbarItem className="flex items-center justify-center hover:text-cyan-600">
              <FiEdit /> write
            </NavbarItem>
            </Tooltip>
          </Link>
        )}
        {status === "unauthenticated" ? (
        <Link href="/login" className="hover:text-cyan-600">
          Login
        </Link>
      ) : (
        <>
          <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform ring-cyan-600"
              size="sm"
              src={session?.user.image}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold text-cyan-600">{session?.user.email}</p>           
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem onClick={signOut} key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </>
      )}
        
        
      </NavbarContent>
      
    </Navbar>
  );
};

export default Nav;
