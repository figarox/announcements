import { useForm, usePage } from "@inertiajs/react";
import React, { children, useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Filters from "../Components/Filters";
import { Alert, Button } from "@material-tailwind/react";

const MainLayout = () => {
    const { auth, flash } = usePage().props;

    const handleLogout = () => {
        Inertia.delete("logout");
    };

    function Icon() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
            >
                <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }

    return (
        <>
            <header class="relative flex w-full flex-wrap items-center justify-center bg-[#F6FBFF] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
                <div class="w-1/3 h-auto flex p-4 ">
                    <div class="ml-6 flex items-center justify-center">
                        <ion-icon id="facebook" name="logo-facebook"></ion-icon>
                    </div>
                    <div class="ml-6 flex items-center justify-center">
                        <ion-icon id="mail" name="mail-outline"></ion-icon>
                    </div>
                </div>

                <div class="w-1/3 h-auto  flex items-center justify-center">
                    <input type="text" class="h-10 w-[500px] rounded-3xl" />
                </div>

                <div class="w-1/3 h-auto flex items-center justify-end">
                    <div
                        id="circle-notifications"
                        class="w-16 h-16 mr-5 rounded-full bg-bgnav"
                    >
                        <div class="flex items-center justify-center">
                            <div class="relative top-5">
                                <ion-icon
                                    id="notifications"
                                    name="notifications-outline"
                                ></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col gap-4  items-center pl-2 w-[200px] h-16 bg-bgnav rounded-3xl mr-5">
                        <div class="relative row-span-3 w-[50px] h-[50px] rounded-full bg-white"></div>
                        <div class="relative row-span-1 top-3 text-white">
                            Figarox
                        </div>
                        <div class="relative row-span-2   text-white">
                            Intro202@wp.pl
                        </div>
                        <div class="relative top-[15px] right-[40px] w-[25px] h-[25px] rounded-full bg-[#E7E7E7] ring-1 ring-white">
                            <button class="relative left-1 top-1">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <nav>
                <div class="relative h-[75px] w-full rounded-br-[45px] rounded-bl-[45px]   bg-white py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
                    <div className="relative flex justify-end top-[-5px] right-[20px]">
                        <div class=" w-[250px] h-14 mr-4 text-bgnav rounded-3xl flex justify-center items-center ">
                            Moje Ołoszenia
                        </div>
                        <div class=" w-[250px] h-14 mr-4 bg-bgnav text-white rounded-3xl flex justify-center items-center ">
                            Ołoszenia
                        </div>
                        <div class=" w-[250px] h-14 mr-4 text-bgnav rounded-3xl flex justify-center items-center ">
                            O nas
                        </div>
                    </div>
                </div>
            </nav>
            {/* <nav class="border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-black w-full h-15">
                <div class="container mx-auto">
                    <nav class="p-3 flex items-center justify-between">
                        <a href="/" class="font-medium">
                            Strona Główna
                        </a>
                        <a href="/" class="font-medium">
                            Moje Ogłoszenia
                        </a>
                        <a href="/listing" class="font-medium">
                            Mieszkania
                        </a>
                        <div class="font-medium">Domy</div>
                        <div class="font-medium">O nas</div>

                        {auth.user != null ? (
                            <div class="flex items-center gap-4">
                                <div class="w-16 h-16 bg-zinc-300 rounded-full flex-1">
                                    <div class="flex-initial w-64">
                                        {auth.user.name}
                                    </div>
                                </div>
                                <a href="/listing/create" class="btn-primary">
                                    + Dodaj Ogłoszenie
                                </a>
                                <div>
                                    <button
                                        onClick={handleLogout}
                                        class="font-medium"
                                    >
                                        Wyloguj
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <a
                                    href="/user-account/create"
                                    class="btn-primary m-4"
                                >
                                    Rejestracja
                                </a>
                                <a href="/login">Zaloguj się</a>
                            </div>
                        )}
                    </nav>
                </div>
            </nav> */}

            {flash.success && (
                <Alert
                    icon={<Icon />}
                    className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                >
                    {flash.success}
                </Alert>
            )}

            {children}
        </>
    );
};

export default MainLayout;
