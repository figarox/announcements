import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "../../Components/UI/Box";
import MainLayout from "../../Layouts/MainLayout";
import Filters from "../../Components/Filters";
import Pagination from "../../Components/UI/Pagination";
import test from "../../../picture/picture.webp";

const MainListing = ({
    listings,
    flash,
    success,
    onAlertHidden,
    filters,
    auth,
}) => {
    const list = listings.data.map((listings) => (
        <a href={`/listing/show/${listings.id}`}>
            <Box key={listings.id}>
                <div class="grid gap-6 md:grid-cols-2 listing:grid-cols-3 items-center">
                    <div class="">
                        <img
                            class="relative top-[8px] left-[10px] w-[330px] h-[200px] "
                            src={test}
                        />
                    </div>
                    <div class="listing:grid-cols-3 listing:col-span-2">
                        <div class=" text-[22px]">{listings.title}</div>
                        <p class=" text-[14px] text-gray-600">
                            {listings.street} {listings.street_nr} ,{" "}
                            {listings.city}
                        </p>
                        <p>{listings.price} zł</p>
                        <p>{listings.street_}</p>
                    </div>
                </div>

                {/* <div>
                <a href={`/listing/${listings.id}/edit`}>Edit</a>
            </div> */}
            </Box>
        </a>
    ));

    return (
        <>
            <MainLayout />
            <div class="relative flex items-center justify-center z-20 ">
                <Filters filters={filters} />
            </div>
            <div class=" flex flex-wrap items-center justify-center h-[400px] phone:h-[800px]  sm:h-[800px] md:h-[760px] phonebttablet:h-[480px] lg:h-[450px] 2xl:h-[400px] bigMonittor:h-[230px]">
                <div class=" min-w-[350px] h-[164px] shadow-[#ECF0FB] bg-white drop-shadow-lg rounded-3xl mb-7 ml-3 mr-3"></div>
                <div class=" min-w-[350px] h-[164px] shadow-[#ECF0FB] bg-white drop-shadow-lg rounded-3xl mb-7 ml-3 mr-3"></div>
                <div class=" min-w-[350px] h-[164px] shadow-[#ECF0FB] bg-white drop-shadow-lg rounded-3xl mb-7 ml-3 mr-3"></div>
                <div class=" min-w-[350px] h-[164px] shadow-[#ECF0FB] bg-white drop-shadow-lg rounded-3xl mb-7 ml-3 mr-3"></div>
            </div>

            <div class="relative flex justify-center items-center ">
                <div>{list}</div>
            </div>

            {listings.data.length > 0 && (
                <div className="w-full flex justify-center mt-8 mb-8">
                    <Pagination links={listings.links} />
                </div>
            )}

            {/* <div class="container mx-auto p-4">
                <div class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2">
                    i'm flash
                </div>
            </div> */}
        </>
    );
};

export default MainListing;
