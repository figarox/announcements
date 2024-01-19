import React, { useState, useEffect, usePage } from "react";
import Box from "../../Components/UI/Box";
import MainLayout from "../../Layouts/MainLayout";

const Main = ({ listings, flash, success, onAlertHidden }) => {
    return (
        <>
            <div className="w-96 h-96 relative bg-slate-50">
                <div className="w-96 h-16 left-0 top-[85px] absolute bg-white rounded-bl-3xl rounded-br-3xl border border-neutral-400 border-opacity-25" />
                <div className="w-96 h-10 left-[610px] top-[33px] absolute">
                    <div className="w-96 h-10 left-0 top-0 absolute bg-white rounded-3xl border border-zinc-800 border-opacity-25" />
                    <div className="w-14 h-4 left-[222px] top-[11px] absolute text-neutral-500 text-base font-normal font-['Inter']">
                        Szukaj
                    </div>
                </div>
                <div className="w-56 h-14 left-[1495px] top-[14px] absolute">
                    <div className="w-48 h-14 left-0 top-0 absolute bg-indigo-600 rounded-3xl" />
                    <div className="w-14 h-14 left-[4px] top-[3px] absolute bg-white rounded-full border border-indigo-600" />
                    <div className="w-36 h-7 left-[68px] top-[4px] absolute text-white text-xl font-normal font-['Inria Sans']">
                        Figarox
                    </div>
                    <div className="w-40 h-7 left-[68px] top-[30px] absolute text-neutral-100 text-base font-normal font-['Inria Sans']">
                        Intro202@wp.pl
                    </div>
                </div>
                <div className="w-14 h-14 left-[1413px] top-[17px] absolute bg-indigo-600 rounded-full" />
                <div className="w-14 h-14 left-[1413px] top-[14px] absolute bg-indigo-600 rounded-full" />
                <div className="w-96 h-14 left-[973px] top-[93px] absolute">
                    <div className="w-44 h-9 left-[28.80px] top-[15.54px] absolute text-center text-indigo-600 text-xl font-normal font-['Inria Sans']">
                        Moja Ogłoszenia
                    </div>
                    <div className="w-60 h-14 left-[230px] top-0 absolute bg-indigo-600 rounded-3xl" />
                    <div className="w-44 h-9 left-[267px] top-[15px] absolute text-center text-white text-xl font-normal font-['Inria Sans']">
                        Ogłoszenia
                    </div>
                    <div className="w-44 h-9 left-[526px] top-[16px] absolute text-center text-indigo-600 text-xl font-normal font-['Inria Sans']">
                        O nas
                    </div>
                </div>
                <div className="w-96 h-60 left-[240px] top-[540px] absolute">
                    <div className="w-96 h-60 left-0 top-0 absolute bg-white border border-zinc-300" />
                    <img
                        className="w-96 h-60 left-0 top-0 absolute"
                        src="https://via.placeholder.com/355x233"
                    />
                    <div className="w-96 h-14 left-[387.13px] top-[26px] absolute text-black text-2xl font-normal font-['Inria Sans']">
                        Mieszkanie Na 2 pietrze !!!
                        <br />
                    </div>
                    <div className="w-28 h-8 left-[387px] top-[96.55px] absolute text-black text-3xl font-normal font-['Inria Sans']">
                        2500 zł
                    </div>
                    <div className="w-96 h-9 left-[387.35px] top-[62.31px] absolute text-neutral-400 text-xl font-normal font-['Inria Sans']">
                        Słupsk, Agnieszki Osickiej
                    </div>
                    <div className="w-80 h-12 left-[387px] top-[156.55px] absolute">
                        <div className="w-24 h-8 left-[130.57px] top-0 absolute text-black text-base font-normal font-['Inria Sans']">
                            Liczba Pokoi
                            <br />
                        </div>
                        <div className="w-11 h-4 left-[260.07px] top-0 absolute text-black text-base font-normal font-['Inria Sans']">
                            Pietro
                        </div>
                        <div className="w-28 h-10 left-0 top-0 absolute text-black text-base font-normal font-['Inria Sans']">
                            Powiechrznia
                            <br />
                        </div>
                        <div className="w-16 h-6 left-[8.98px] top-[27.13px] absolute text-center text-neutral-400 text-xl font-bold font-['Inria Sans']">
                            65 m2
                        </div>
                        <div className="w-16 h-6 left-[137.01px] top-[27.13px] absolute text-center text-neutral-400 text-xl font-bold font-['Inria Sans']">
                            4
                        </div>
                        <div className="w-16 h-6 left-[249.82px] top-[27.13px] absolute text-center text-neutral-400 text-xl font-bold font-['Inria Sans']">
                            2
                        </div>
                    </div>
                </div>
                <div className="w-96 h-60 left-[239px] top-[799px] absolute">
                    <div className="w-96 h-60 left-0 top-0 absolute bg-white border border-zinc-300" />
                    <div className="w-96 h-14 left-[387.13px] top-[26px] absolute text-black text-2xl font-normal font-['Inria Sans']">
                        Wynajmę dwupokojowe mieszkanie na osiedlu antoniuk
                        <br />
                        <br />
                    </div>
                    <div className="w-28 h-8 left-[387px] top-[96.55px] absolute text-black text-3xl font-normal font-['Inria Sans']">
                        1900 zł
                    </div>
                    <div className="w-96 h-9 left-[387.35px] top-[62.31px] absolute text-neutral-400 text-xl font-normal font-['Inria Sans']">
                        Słupsk, Agnieszki Osickiej
                    </div>
                    <div className="w-80 h-12 left-[387px] top-[156.55px] absolute">
                        <div className="w-24 h-8 left-[130.57px] top-0 absolute text-black text-base font-normal font-['Inria Sans']">
                            Liczba Pokoi
                            <br />
                        </div>
                        <div className="w-11 h-4 left-[260.07px] top-0 absolute text-black text-base font-normal font-['Inria Sans']">
                            Pietro
                        </div>
                        <div className="w-28 h-10 left-0 top-0 absolute text-black text-base font-normal font-['Inria Sans']">
                            Powiechrznia
                            <br />
                        </div>
                        <div className="w-16 h-6 left-[8.98px] top-[27.13px] absolute text-center text-neutral-400 text-xl font-bold font-['Inria Sans']">
                            35 m2
                        </div>
                        <div className="w-16 h-6 left-[137.01px] top-[27.13px] absolute text-center text-neutral-400 text-xl font-bold font-['Inria Sans']">
                            1
                        </div>
                        <div className="w-16 h-6 left-[249.82px] top-[27.13px] absolute text-center text-neutral-400 text-xl font-bold font-['Inria Sans']">
                            3
                        </div>
                    </div>
                </div>
                <div className="w-96 h-32 left-[240px] top-[178px] absolute bg-indigo-600 rounded-3xl shadow" />
                <div className="w-24 h-7 left-[333px] top-[204px] absolute bg-white rounded" />
                <div className="w-24 h-7 left-[439px] top-[204px] absolute bg-white rounded" />
                <div className="w-24 h-7 left-[574px] top-[204px] absolute bg-white rounded" />
                <div className="w-24 h-7 left-[680px] top-[204px] absolute bg-white rounded" />
                <div className="w-16 h-5 left-[333px] top-[180px] absolute text-white text-lg font-normal font-['Inria Sans']">
                    Cena
                </div>
                <div className="w-44 h-5 left-[333px] top-[240px] absolute text-white text-lg font-normal font-['Inria Sans']">
                    Rodzaj nieruchomoci
                </div>
                <div className="w-44 h-5 left-[574px] top-[238px] absolute text-white text-lg font-normal font-['Inria Sans']">
                    Województwo
                </div>
                <div className="w-44 h-5 left-[815px] top-[238px] absolute text-white text-lg font-normal font-['Inria Sans']">
                    Miasto
                </div>
                <div className="w-28 h-5 left-[574px] top-[182px] absolute text-white text-lg font-normal font-['Inria Sans']">
                    Powiechrznia
                </div>
                <div className="w-6 h-4 left-[341px] top-[208px] absolute text-zinc-500 text-base font-normal font-['Inria Sans']">
                    Od
                </div>
                <div className="w-52 h-7 left-[333px] top-[260px] absolute bg-white rounded" />
                <div className="w-52 h-7 left-[574px] top-[261px] absolute bg-white rounded" />
                <div className="w-52 h-7 left-[811px] top-[260px] absolute bg-white rounded" />
                <div className="w-6 h-4 left-[341px] top-[266px] absolute text-zinc-500 text-base font-normal font-['Inria Sans']">
                    Od
                </div>
                <div className="w-6 h-4 left-[449px] top-[208px] absolute text-zinc-500 text-base font-normal font-['Inria Sans']">
                    Do
                </div>
                <div className="w-6 h-4 left-[582px] top-[208px] absolute text-zinc-500 text-base font-normal font-['Inria Sans']">
                    Od
                </div>
                <div className="w-6 h-4 left-[690px] top-[208px] absolute text-zinc-500 text-base font-normal font-['Inria Sans']">
                    Do
                </div>
                <div className="w-80 h-7 left-[1129px] top-[261px] absolute">
                    <div className="w-40 h-7 left-[173px] top-0 absolute bg-gradient-to-l from-sky-500 to-cyan-500 rounded-xl" />
                    <div className="w-40 h-7 left-0 top-0 absolute rounded-xl border-2 border-sky-500" />
                    <div className="w-32 h-4 left-[188px] top-[3px] absolute text-center text-white text-lg font-normal font-['Inria Sans']">
                        WYSZUKAJ
                    </div>
                    <div className="w-32 h-4 left-[19px] top-[3px] absolute text-center text-white text-lg font-normal font-['Inria Sans']">
                        WYCZYŚĆ
                    </div>
                </div>
                <div className="w-10 h-10 left-[1429px] top-[186px] absolute justify-center items-center inline-flex">
                    <div className="w-10 h-10 relative"></div>
                </div>
                <div className="w-12 h-12 left-[1137px] top-[-8px] absolute flex-col justify-center items-center inline-flex" />
                <div className="w-80 h-40 left-[487px] top-[335px] absolute bg-white rounded-3xl shadow" />
                <div className="w-80 h-40 left-[89px] top-[336px] absolute bg-white rounded-3xl shadow" />
                <div className="w-80 h-40 left-[885px] top-[336px] absolute bg-white rounded-3xl shadow" />
                <div className="w-80 h-40 left-[1283px] top-[341px] absolute bg-white rounded-3xl shadow" />
                <div className="w-9 h-9 left-[1651px] top-[13px] absolute">
                    <div className="w-6 h-6 left-[7px] top-[7px] absolute bg-neutral-200 rounded-full border border-white" />
                </div>
                <div className="w-96 h-60 left-[239px] top-[1058px] absolute">
                    <div className="w-96 h-60 left-0 top-0 absolute bg-white border border-zinc-300" />
                    <img
                        className="w-96 h-60 left-0 top-0 absolute"
                        src="https://via.placeholder.com/355x233"
                    />
                    <div className="w-96 h-14 left-[387.13px] top-[26px] absolute text-black text-2xl font-normal font-['Inria Sans']">
                        Mieszkanie Na 2 pietrze !!!
                        <br />
                    </div>
                    <div className="w-28 h-8 left-[387px] top-[96.55px] absolute text-black text-3xl font-normal font-['Inria Sans']">
                        2500 zł
                    </div>
                    <div className="w-96 h-9 left-[387.35px] top-[62.31px] absolute text-neutral-400 text-xl font-normal font-['Inria Sans']">
                        Słupsk, Agnieszki Osickiej
                    </div>
                    <div className="w-80 h-12 left-[387px] top-[156.55px] absolute">
                        <div className="w-24 h-8 left-[130.57px] top-0 absolute text-black text-base font-normal font-['Inria Sans']">
                            Liczba Pokoi
                            <br />
                        </div>
                        <div className="w-11 h-4 left-[260.07px] top-0 absolute text-black text-base font-normal font-['Inria Sans']">
                            Pietro
                        </div>
                        <div className="w-28 h-10 left-0 top-0 absolute text-black text-base font-normal font-['Inria Sans']">
                            Powiechrznia
                            <br />
                        </div>
                        <div className="w-16 h-6 left-[8.98px] top-[27.13px] absolute text-center text-neutral-400 text-xl font-bold font-['Inria Sans']">
                            65 m2
                        </div>
                        <div className="w-16 h-6 left-[137.01px] top-[27.13px] absolute text-center text-neutral-400 text-xl font-bold font-['Inria Sans']">
                            4
                        </div>
                        <div className="w-16 h-6 left-[249.82px] top-[27.13px] absolute text-center text-neutral-400 text-xl font-bold font-['Inria Sans']">
                            2
                        </div>
                    </div>
                </div>
                <img
                    className="w-96 h-60 left-[240px] top-[799px] absolute"
                    src="https://via.placeholder.com/360x233"
                />
            </div>
        </>
    );
};

export default Main;
