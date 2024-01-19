import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const Test2 = ({ listing, success }) => {
    const { data, setData, put, processing, errors } = useForm({
        voivodeship: listing.voivodeship,
        city: listing.city,
        code: listing.code,
        street: listing.street,
        street_nr: listing.street_nr,
        price: listing.price,
    });

    function submit(e) {
        e.preventDefault();
        put(`/listing/${listing.id}`);
    }

    return (
        <>
            <form onSubmit={submit}>
                <div>
                    <table>
                        <tr>
                            <td>wojewodztwo</td>
                            <td>
                                <input
                                    type="text"
                                    value={data.voivodeship}
                                    onChange={(e) =>
                                        setData("voivodeship", e.target.value)
                                    }
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Miasto</td>
                            <td>
                                <input
                                    type="text"
                                    value={data.city}
                                    onChange={(e) =>
                                        setData("city", e.target.value)
                                    }
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Kod pocztowy</td>
                            <td>
                                <input
                                    type="text"
                                    value={data.code}
                                    onChange={(e) =>
                                        setData("code", e.target.value)
                                    }
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Ulica</td>
                            <td>
                                <input
                                    type="text"
                                    value={data.street}
                                    onChange={(e) =>
                                        setData("street", e.target.value)
                                    }
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Numer ulicy</td>
                            <td>
                                <input
                                    type="text"
                                    value={data.street_nr}
                                    onChange={(e) =>
                                        setData("street_nr", e.target.value)
                                    }
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Cena</td>
                            <td>
                                <input
                                    type="text"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                ></input>
                            </td>
                        </tr>
                    </table>
                    <button type="submit" disabled={processing}>
                        edit
                    </button>
                </div>
            </form>
        </>
    );
};

export default Test2;
