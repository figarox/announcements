import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import MainLayout from "../../Layouts/MainLayout";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        voivodeship: null,
        city: null,
        code: 0,
        street: null,
        street_nr: 0,
        rooms: 0,
        floor: 0,
        price: 0,
        street_nr: null,
        SW: null,
    });

    const dataVO = [
        "-- wojewodztwo --",
        "dolnośląskie",
        "kujawsko-pomorskie",
        "lubelskie",
        "lubuskie",
        "łódzkie",
        "małopolskie",
        "mazowieckie",
        "opolskie",
        "podkarpackie",
        "podlaskie",
        "pomorskie",
        "śląskie",
        "świętokrzyskie",
        "warmińsko-mazurskie",
        "wielkopolskie",
        "zachodniopomorskie",
    ];
    const SWOptions = ["-- Wybierz Opcje --", "Sprzedaz", "Wynajem"];

    function submit(e) {
        e.preventDefault();
        post(`/listing`);
    }

    return (
        <>
            <MainLayout />

            <form onSubmit={submit}>
                <div>
                    <table>
                        <select
                            value={data.voivodeship}
                            onChange={(e) =>
                                setData("voivodeship", e.target.value)
                            }
                            class="input-filter-r w-28"
                        >
                            {dataVO.map((vo) => (
                                <option>{vo}</option>
                            ))}
                        </select>
                        <tr>
                            <td>miasto</td>
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
                            <td>Numer Ulicy</td>
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
                            <td>Liczba Pokoi</td>
                            <td>
                                <input
                                    type="number"
                                    value={data.rooms}
                                    onChange={(e) =>
                                        setData("rooms", e.target.value)
                                    }
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Pietro</td>
                            <td>
                                <input
                                    type="number"
                                    value={data.floor}
                                    onChange={(e) =>
                                        setData("floor", e.target.value)
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
                        <select
                            value={data.SW}
                            onChange={(e) => setData("SW", e.target.value)}
                            class="input-filter-r w-28"
                        >
                            {SWOptions.map((SW) => (
                                <option>{SW}</option>
                            ))}
                        </select>
                    </table>
                    <button type="submit" disabled={processing}>
                        Stworz
                    </button>
                </div>
            </form>
        </>
    );
};

export default Create;
