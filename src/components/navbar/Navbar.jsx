import React from "react";
import"./Navbar.css"


function Navbar(){



    return(

        <>     
            <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between  ">
                    <a href="https://flowbite.com/" class="flex items-center ml-5 ">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo"></img>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div class="flex md:order-2 p-2">
                        <button type="button" class="text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Shop Now</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-10" id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ml-10">
                            <li className="bg-white-500 my-0 py-6 hover:bg-yellow-400">
                                <a href="{}" class="block my-0 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent ">HOME</a>
                            </li>
                            <li className="bg-white-500 my-0 py-6 hover:bg-yellow-400">
                                <a href="{}" class="block my-0 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent ">ABOUT US</a>
                            </li>
                            <li className="bg-white-500 my-0 py-6 hover:bg-yellow-400">
                                <a href="{}" class="block my-0 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent ">PRODUCT</a>
                            </li>
                            <li className="bg-white-500 my-0 py-6 hover:bg-yellow-400">
                                <a href="{}" class="block my-0 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent ">CATEGORIES</a>
                            </li>
                            <li className="bg-white-500 my-0 py-6 hover:bg-yellow-400">
                                <a href="{}" class="block my-0 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent ">BLOG</a>
                            </li>
                            <li className="bg-white-500 my-0 py-6 hover:bg-yellow-400">
                                <a href="{}" class="block my-0 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent ">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;