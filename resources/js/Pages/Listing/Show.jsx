import React, { useState } from "react";

const listingShow = ({ listings }) => {
    const { data, setData, put, processing, errors } = useForm({
        voivodeship: listing.voivodeship,
        city: listing.city,
        code: listing.code,
        street: listing.street,
        street_nr: listing.street_nr,
        price: listing.price,
    });

    return (
        <div>
            <a>produkty dwa</a> {listings.city}
        </div>
    );
};

export default listingShow;
