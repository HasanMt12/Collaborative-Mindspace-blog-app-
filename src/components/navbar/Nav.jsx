'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import ThemeToggle from "../themeToggleButton/ThemeToggleButton";
import Link from "next/link";


const Nav = () => {
  const { status } = useSession();
  return (
    <Navbar className="bg-transparent rounded-lg" justify="start">
      <NavbarBrand  justify="start">
        <p className="font-bold text-inherit">CM</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/blog" href="/blog"  color="foreground" >
           blog
          </Link>
        </NavbarItem>
      
      </NavbarContent>

      <NavbarContent as="div" justify="end">
         <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        {status === "unauthenticated" ? (
        <Link href="/login">
          Login
        </Link>
      ) : (
        <>
          <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
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
