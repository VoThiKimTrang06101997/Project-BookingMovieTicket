import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../../../../assets/img/web-logo.png";

export default function Header(props) {
    return (
        <header class="p-4 bg-coolGray-800 text-coolGray-100 bg-opacity-80 bg-black text-white fixed w-full z-10">
            <div class="container flex justify-between h-16 mx-auto">
                <a href="#" aria-label="Back to homepage" class="flex items-center p-2">
                    <img src={Logo} alt="Logo" />
                </a>

                <ul class="items-stretch hidden space-x-3 lg:flex">
                    <li class="flex">
                        <NavLink to="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 text-white" activeClassName="border-b-2 border-white">Home</NavLink>
                    </li>
                    <li class="flex">
                        <NavLink to="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white" activeClassName="border-b-2 border-white">Contact</NavLink>
                    </li>
                    <li class="flex">
                        <NavLink to="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white" activeClassName="border-b-2 border-white">News</NavLink>
                    </li>
                    <li class="flex">
                        <NavLink to="#" class="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent text-white" activeClassName="border-b-2 border-white">Tix App</NavLink>
                    </li>
                </ul>

                <div class="items-center flex-shrink-0 hidden lg:flex">
                    <button class="self-center px-8 py-3 rounded">Sign in</button>
                    <button class="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">Sign up</button>
                </div>
                <button class="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 dark:text-coolGray-100">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
