import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, NavbarContent, NavbarItem } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


const AuthOption = () => {
    const { data: session, status } = useSession();
    console.log(session)
    return (
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
              <p className="font-semibold">{session.user.email}</p>
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
    );
};

export default AuthOption;