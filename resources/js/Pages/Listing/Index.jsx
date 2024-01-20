import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "../../Components/UI/Box";
import MainLayout from "../../Layouts/MainLayout";
import Filters from "../../Components/Filters";
import Pagination from "../../Components/UI/Pagination";

const MainListing = ({ listings, flash, success, onAlertHidden, filters }) => {
    const list = listings.data.map((listings) => (
        <Box key={listings.id}>
            <div class="">{listings.price}</div>
            {listings.city} {listings.code}
            <br />
            {listings.street} {listings.street_nr}
            {/* <div>
                <a href={`/listing/${listings.id}/edit`}>Edit</a>
            </div> */}
        </Box>
    ));

    return (
        <>
            <MainLayout />
            <div class="flex items-center justify-center">
                <Filters filters={filters} />
            </div>
            <div class="flex items-center justify-center">
                <div class=" w-[350px] h-[164px] bg-white drop-shadow-lg rounded-3xl mb-7 ml-3 mr-3"></div>
                <div class=" w-[350px] h-[164px] bg-white drop-shadow-lg rounded-3xl mb-7 ml-3 mr-3"></div>
                <div class=" w-[350px] h-[164px] bg-white drop-shadow-lg rounded-3xl mb-7 ml-3 mr-3"></div>
                <div class=" w-[350px] h-[164px] bg-white drop-shadow-lg rounded-3xl mb-7 ml-3 mr-3"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {list}
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
