import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Bars3BottomLeftIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Transition } from '@headlessui/react'
import { useMediaQuery } from '@react-hook/media-query';

const Navbar = () => {
    // const isMobile = useMediaQuery('(max-width: 1440px)');
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    // const isDesktop = useMediaQuery('(min-width: 1024px)');
    const [isCollapsed, setIsCollapsed] = useState(false)

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 navbar-fixed">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
                    <button
                        onClick={() => setIsCollapsed(true)}

                        type="button"
                        className={`lg:hidden ${isCollapsed ? 'hidden' : ''}`}

                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button
                        onClick={() => setIsCollapsed(false)}

                        type="button"
                        className={`lg:hidden ${isCollapsed ? '' : "hidden"}`}

                    >
                        <span className="sr-only">Open main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <Link to="/" className="flex items-center">
                        <img
                            src="/src/assets/logo.svg"
                            className="h-8 mr-3"
                            alt=""
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/"
                            className="block py-2 pl-3 pr-4 text-center text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary  dark:text-white lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                        </Link>


                        <DropdownMenu>
                            <DropdownMenuTrigger> <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>P</AvatarFallback>
                            </Avatar></DropdownMenuTrigger>
                            <DropdownMenuContent className='m-2  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'>
                                <DropdownMenuLabel>
                                    <div className="px-10 py-3">
                                        <Link to='/' className="block text-sm text-gray-500 truncate dark:text-gray-400 lg:hover:text-primary lg:dark:hover:text-primary">
                                            Dashboard
                                        </Link>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem> <div className="px-4 py-3">
                                    <Link to='/' className="block text-sm text-gray-500 truncate dark:text-gray-400 lg:hover:text-primary lg:dark:hover:text-primary">
                                        Profile
                                    </Link>
                                </div></DropdownMenuItem>
                                <DropdownMenuItem><div className="px-4 py-3">
                                    <Link to='/' className="block text-sm text-gray-500 truncate dark:text-gray-400
                                    lg:hover:text-primary lg:dark:hover:text-primary">
                                        WishList
                                    </Link>
                                </div></DropdownMenuItem>
                                <DropdownMenuItem><div className="px-4 py-3">
                                    <Link to='/' className="block text-sm text-gray-500 truncate dark:text-gray-400
                                    lg:hover:text-primary lg:dark:hover:text-primary">
                                        Order
                                    </Link>
                                </div></DropdownMenuItem>
                                <DropdownMenuItem><div className="px-4 py-3">
                                    <Link to='/' className="block text-sm text-gray-500 truncate dark:text-gray-400
                                    lg:hover:text-primary lg:dark:hover:text-primary">
                                        Log Out
                                    </Link>
                                </div></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div
                        className={`items-center justify-between ease-in-out duration-300 ${isCollapsed ? '' : 'hidden'}  w-full lg:flex lg:w-auto lg:order-1`}
                    >
                        {
                            isTablet || isMobile ?
                                <Transition show={isCollapsed}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full">
                                    <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                                        <li>
                                            <Link
                                                to="/"
                                                className="block py-2 pl-3 pr-4 text-center text-white bg-primary rounded lg:bg-transparent lg:text-primary lg:p-0 lg:dark:text-primary "
                                                aria-current="page"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                className="block py-2 pl-3 pr-4 text-center text-black_text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 dark:text-white lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                className="block py-2 pl-3 pr-4 text-center text-black_text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 dark:text-white lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Product
                                            </Link>
                                        </li>

                                        <li>
                                            <Link
                                                to="/"
                                                className="block py-2 pl-3 pr-4 text-center text-black_text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 dark:text-white lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                className="block py-2 pl-3 pr-4 text-center text-black_text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 dark:text-white lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                            >
                                                Contact
                                            </Link>
                                        </li>

                                    </ul>
                                </Transition>
                                :
                                 <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <Link
                                            to="/"
                                            className="block py-2 pl-3 pr-4 text-center text-white bg-primary rounded lg:bg-transparent lg:text-primary lg:p-0 lg:dark:text-primary "
                                            aria-current="page"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="block py-2 pl-3 pr-4 text-center text-black_text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 dark:text-white lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="block py-2 pl-3 pr-4 text-center text-black_text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 dark:text-white lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Product
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/"
                                            className="block py-2 pl-3 pr-4 text-center text-black_text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 dark:text-white lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/"
                                            className="block py-2 pl-3 pr-4 text-center text-black_text rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-primary lg:p-0 dark:text-white lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            Contact
                                        </Link>
                                    </li>

                                </ul>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;