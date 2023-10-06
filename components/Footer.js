import Image from "next/image"
import { Link } from "react-scroll"

export const Footer = () => {
    return (
        <footer>
            <div className="bg-white py-10 px-8 sm:px-8 md:px-20 lg:px-8 xl:px-12 2xl:px-96">
                <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:justify-items-center lg:grid-cols-4">
                    <div className="flex flex-col">
                        <Link 
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={1500} 
                            to="Home" 
                            className="flex items-center py-1 cursor-pointer"
                        >
                            <Image src="/logo.png" alt="Westscience-press logo" height={72} width={100}/>
                        </Link>
                        <div className="font-semibold text-lg mt-2">Jakarta, Indonesia</div>
                        <div className="font-semibold text-base mt-2">Phone: <span className="font-normal">+62 821 1557 5700</span></div>
                        <div className="font-semibold text-base">Email: <span className="font-normal">info@westscience-press.com</span></div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold text-lg">Useful Links</div>
                        <div>
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1500} 
                                to="Home" 
                                className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                Home
                            </Link>
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1500} 
                                to="About" 
                                className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                About
                            </Link>
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1500} 
                                to="Service" 
                                className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                Services
                            </Link>
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1500} 
                                to="Journals" 
                                className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                Journals
                            </Link>
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={1500} 
                                to="Contact" 
                                className="flex flex-row items-center hover:text-blue-400 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold text-lg">Our Services</div>
                        <div>
                            <a href="https://wsj.westscience-press.com/" className="flex flex-row items-center hover:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                National Journals
                            </a>
                            <a href="https://wnj.westscience-press.com/" className="flex flex-row items-center hover:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                International Journals
                            </a>
                            <a href="#" className="flex flex-row items-center hover:text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-400 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                Proceedings
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <div className="font-semibold text-lg">Our Social Network</div>
                        <div className="mt-3 flex flex-row space-x-1">
                            <a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                            </a>
                            <a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="4" y="4" width="16" height="16" rx="4" />
                                    <circle cx="12" cy="12" r="3" />
                                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                </svg>
                            </a>
                            <a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                </svg>
                            </a>
                            <a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                    <line x1="8" y1="11" x2="8" y2="16" />
                                    <line x1="8" y1="8" x2="8" y2="8.01" />
                                    <line x1="12" y1="16" x2="12" y2="11" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </a>
                            <a href="#" className="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center p-2 hover:bg-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="3" y="5" width="18" height="14" rx="4" />
                                    <path d="M10 9l5 3l-5 3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center bg-blue-50 py-4">
                &copy; Copyright <span className="font-semibold">Westscience Press</span> {(new Date().getFullYear())}. All Rights Reserved
            </div>
        </footer>
    )
}