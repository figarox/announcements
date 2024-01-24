import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import Box from "../../Components/UI/Box";
import { useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";

const mywebsite = ({ listings, listing, id }) => {
    const list = listings.map((listings) => (
        <Box key={listings.id}>
            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 w-[330px]">
                    <img class="relative top-[8px] left-[10px] w-[330px] h-[200px]" />
                </div>
                <div class="col-span-1 row-span-2 w-[800px] p-5">
                    <div class=" text-[22px]">{listings.title}</div>
                    <p class=" text-[14px] text-gray-600">{listings.street}</p>
                    <p>{listings.price} zł</p>
                    <p>{listings.street_}</p>
                    ID {listings.by_user_id}
                </div>
                <div class="row-span-1 w-[800px] col-span-2  p-5 ">
                    <div>
                        <a href={`/account/listing/${listings.id}/edit`}>
                            Edit
                        </a>
                    </div>
                    <div>
                        <Link
                            href={`/account/listing/${listings.id}`}
                            method="delete"
                            as="button"
                            type="button"
                        >
                            Usuń
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div>
                <a href={`/listing/${listings.id}/edit`}>Edit</a>
            </div> */}
        </Box>
    ));

    return (
        <>
            <MainLayout />
            <div class="relative flex justify-center ">
                <div>{list}</div>
            </div>
        </>
    );
};

export default mywebsite;
