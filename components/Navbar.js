import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from 'react-scroll/modules/components/Link'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@/components/Material";


function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="h6" color="blue-gray" className="p-1 font-normal">
                <Link 
                    activeClass="active"
                    spy={true}
                    smooth
                    offset={-80}
                    duration={1500}
                    to='About'  
                    className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
                >
                    About
                </Link>
            </Typography>
            <Typography as="li" variant="h6" color="blue-gray" className="p-1 font-normal">
                <Link 
                    activeClass="active"
                    spy={true}
                    smooth
                    offset={-80}
                    duration={1500}
                    to='Service'  
                    className="flex items-center hover:text-blue-500 transition-colors cursor-pointer"
                >
                    Services
                </Link>
            </Typography>
            <Menu placement="bottom-start" offset={40} dismiss="itemPress">
                <MenuHandler>
                    <Typography as="li" variant="h6" color="blue-gray" className="p-1 font-normal cursor-pointer">
                        Journals
                    </Typography>
                </MenuHandler>
                <MenuList>
                    <MenuItem>
                        <Link 
                            activeClass="active"
                            spy={true}
                            smooth
                            offset={-80}
                            duration={1500}
                            to='IJournal'
                        >
                            International
                        </Link>  
                    </MenuItem>
                    <MenuItem>
                        <Link 
                            activeClass="active"
                            spy={true}
                            smooth
                            offset={-80}
                            duration={1500}
                            to='NJournal'
                        >
                            National
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </ul>
    );
}

export function NavbarSimple() {
const [openNav, setOpenNav] = React.useState(false);

const handleWindowResize = () =>
window.innerWidth >= 960 && setOpenNav(false);

React.useEffect(() => {
window.addEventListener("resize", handleWindowResize);

return () => {
window.removeEventListener("resize", handleWindowResize);
};
}, []);

return (
    <Navbar className="sticky top-0 z-10 p-1" fullWidth color="">
        <div className="flex items-center justify-between text-blue-gray-900 px-4  lg:max-w-screen-2xl lg:mx-auto">

            <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1500}
                to="Home" 
                className="flex items-center py-1 px-2 cursor-pointer"
            >
                <Image src="/logo.png" alt="Westscience Press logo" height={72} width={100} />
            </Link>

            <div className="hidden lg:flex lg:gap-16">
                <NavList />
                <form action="https://wa.me/6282115575700">
                    <Button type="submit" variant="gradient" color="blue" size="lg" className="hidden lg:inline-block">
                        <span>Contact Us</span>
                    </Button>
                </form>
            </div>
            <IconButton variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false} onClick={()=> setOpenNav(!openNav)}
                >
                {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
            </IconButton>
        </div>
        <Collapse open={openNav}>
            <NavList />
        </Collapse>
    </Navbar>
    );
}
