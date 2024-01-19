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
            <Filters filters={filters} />
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
