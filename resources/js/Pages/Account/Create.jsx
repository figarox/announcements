import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import MainLayout from "../../Layouts/MainLayout";
import ApartmentBuilding from "../../../picture/apartment-building.svg";
import { NumericFormat } from "react-number-format";

const CreateListings = () => {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        voivodeship: null,
        city: null,
        code: null,
        street: null,
        street_nr: null,
        rooms: null,
        floor: null,
        meters: null,
        type: null,
        title: null,
        accessories: null,
        advertiser: null,
        age: null,
        price: "",
        SW: null,
    });

    const [Page, setPage] = useState(false);

    const dataVO = [
        "-- Wybierz Opcje --",
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
        post(`/account/listing`);
    }

    const witchfloor = () => {
        if (data.floor == null || data.floor == 0) {
            return 338;
        } else if (data.floor == 1) {
            return 285;
        } else if (data.floor == 2) {
            return 232;
        } else if (data.floor == 3) {
            return 179;
        } else if (data.floor == 4) {
            return 126;
        } else if (data.floor == 5) {
            return 73;
        } else if (data.floor == 6) {
            return 20;
        } else if (data.floor <= 7) {
        } else return 20;
    };

    const nextPage = () => {
        setPage(true);
    };

    const backPage = () => {
        setPage(false);
    };

    let liczbaStr = data.price;
    liczbaStr = liczbaStr.toString();
    let liczba = parseInt(liczbaStr.replace(/,/g, ""));

    const calculateMetersPrice = liczba / data.meters;

    return (
        <>
            <MainLayout />

            <form onSubmit={submit} class="flex justify-center">
                <div class="grid  grid-flow-col  grid-cols-6 grid-rows-2 custom-height w-4.5/5 ">
                    <div class=" col-span-2  ">
                        <div class="grid grid-cols-7  h-full mt-[150px] ">
                            <div class="flex justify-center col-span-4 ">
                                <svg
                                    width="249"
                                    height="408"
                                    viewBox="0 0 249 408"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="Group">
                                        <g id="background">
                                            <rect
                                                id="background_2"
                                                x="20"
                                                y={witchfloor()}
                                                width="208"
                                                height="48"
                                                fill="#3300FF"
                                                fill-opacity="0.28"
                                            />
                                        </g>
                                        <path
                                            id="Vector"
                                            d="M241.68 392.881V7.63983C241.68 3.70697 239.081 0.478258 235.759 0.115311C235.4 0.0453683 235.034 0 234.657 0H13.4986C9.88425 0 6.95382 3.38561 6.95382 7.56138C6.95382 7.57462 6.95546 7.58785 6.95546 7.60108C6.95546 7.61431 6.95382 7.62755 6.95382 7.64078V392.877H6.54478C2.93042 392.877 0 396.263 0 400.439C0 404.614 2.93042 408 6.54478 408H104.725H143.977H241.611C245.225 408 248.156 404.614 248.156 400.439C248.156 396.289 245.262 392.924 241.68 392.881ZM20.0434 15.1228H228.59V392.877H150.521V339.987C150.521 335.811 147.59 332.426 143.976 332.426H104.725C101.11 332.426 98.1798 335.811 98.1798 339.987V392.877H20.0434V15.1228ZM111.27 392.877V347.549H137.432V392.877H111.27Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_2"
                                            d="M78.5071 342.567H39.2443C35.629 342.567 32.6977 345.498 32.6977 349.114V375.061C32.6977 378.677 35.629 381.608 39.2443 381.608H78.5071C82.1225 381.608 85.0537 378.677 85.0537 375.061V349.114C85.0537 345.498 82.1225 342.567 78.5071 342.567ZM71.9604 368.515H45.791V355.661H71.9604V368.515Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_3"
                                            d="M170.177 381.609H209.44C213.056 381.609 215.987 378.678 215.987 375.062V349.114C215.987 345.499 213.056 342.568 209.44 342.568H170.177C166.562 342.568 163.631 345.499 163.631 349.114V375.062C163.631 378.678 166.562 381.609 170.177 381.609ZM176.724 355.66H202.893V368.515H176.724V355.66Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_4"
                                            d="M78.5071 290.398H39.2443C35.629 290.398 32.6977 293.33 32.6977 296.945V322.893C32.6977 326.508 35.629 329.439 39.2443 329.439H78.5071C82.1225 329.439 85.0537 326.508 85.0537 322.893V296.945C85.0537 293.33 82.1225 290.398 78.5071 290.398ZM71.9604 316.347H45.791V303.493H71.9604V316.347Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_5"
                                            d="M104.72 329.44H143.983C147.598 329.44 150.529 326.509 150.529 322.894V296.946C150.529 293.33 147.598 290.399 143.983 290.399H104.72C101.104 290.399 98.1732 293.33 98.1732 296.946V322.894C98.1732 326.509 101.104 329.44 104.72 329.44ZM111.267 303.492H137.436V316.346H111.267V303.492Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_6"
                                            d="M170.177 329.44H209.44C213.056 329.44 215.987 326.509 215.987 322.894V296.946C215.987 293.33 213.056 290.399 209.44 290.399H170.177C166.562 290.399 163.631 293.33 163.631 296.946V322.894C163.631 326.509 166.562 329.44 170.177 329.44ZM176.724 303.492H202.893V316.346H176.724V303.492Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_7"
                                            d="M78.5071 238.025H39.2443C35.629 238.025 32.6977 240.956 32.6977 244.572V270.519C32.6977 274.135 35.629 277.066 39.2443 277.066H78.5071C82.1225 277.066 85.0537 274.135 85.0537 270.519V244.572C85.0537 240.956 82.1225 238.025 78.5071 238.025ZM71.9604 263.974H45.791V251.119H71.9604V263.974Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_8"
                                            d="M104.72 277.067H143.983C147.598 277.067 150.529 274.136 150.529 270.52V244.573C150.529 240.957 147.598 238.026 143.983 238.026H104.72C101.104 238.026 98.1732 240.957 98.1732 244.573V270.52C98.1732 274.136 101.104 277.067 104.72 277.067ZM111.267 251.118H137.436V263.973H111.267V251.118Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_9"
                                            d="M170.177 277.067H209.44C213.056 277.067 215.987 274.136 215.987 270.52V244.573C215.987 240.957 213.056 238.026 209.44 238.026H170.177C166.562 238.026 163.631 240.957 163.631 244.573V270.52C163.631 274.136 166.562 277.067 170.177 277.067ZM176.724 251.118H202.893V263.973H176.724V251.118Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_10"
                                            d="M78.5071 185.857H39.2443C35.629 185.857 32.6977 188.788 32.6977 192.403V218.351C32.6977 221.966 35.629 224.897 39.2443 224.897H78.5071C82.1225 224.897 85.0537 221.966 85.0537 218.351V192.403C85.0537 188.788 82.1225 185.857 78.5071 185.857ZM71.9604 211.805H45.791V198.951H71.9604V211.805Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_11"
                                            d="M104.72 224.898H143.983C147.598 224.898 150.529 221.967 150.529 218.352V192.404C150.529 188.789 147.598 185.857 143.983 185.857H104.72C101.104 185.857 98.1732 188.789 98.1732 192.404V218.352C98.1732 221.967 101.104 224.898 104.72 224.898ZM111.267 198.95H137.436V211.804H111.267V198.95Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_12"
                                            d="M170.177 224.898H209.44C213.056 224.898 215.987 221.967 215.987 218.352V192.404C215.987 188.789 213.056 185.857 209.44 185.857H170.177C166.562 185.857 163.631 188.789 163.631 192.404V218.352C163.631 221.967 166.562 224.898 170.177 224.898ZM176.724 198.95H202.893V211.804H176.724V198.95Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_13"
                                            d="M78.5071 133.347H39.2443C35.629 133.347 32.6977 136.279 32.6977 139.894V165.842C32.6977 169.457 35.629 172.388 39.2443 172.388H78.5071C82.1225 172.388 85.0537 169.457 85.0537 165.842V139.894C85.0537 136.279 82.1225 133.347 78.5071 133.347ZM71.9604 159.295H45.791V146.441H71.9604V159.295Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_14"
                                            d="M104.72 172.388H143.983C147.598 172.388 150.529 169.457 150.529 165.842V139.894C150.529 136.279 147.598 133.347 143.983 133.347H104.72C101.104 133.347 98.1732 136.279 98.1732 139.894V165.842C98.1732 169.458 101.104 172.388 104.72 172.388ZM111.267 146.441H137.436V159.295H111.267V146.441Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_15"
                                            d="M170.177 172.388H209.44C213.056 172.388 215.987 169.457 215.987 165.842V139.894C215.987 136.279 213.056 133.347 209.44 133.347H170.177C166.562 133.347 163.631 136.279 163.631 139.894V165.842C163.631 169.458 166.562 172.388 170.177 172.388ZM176.724 146.441H202.893V159.295H176.724V146.441Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_16"
                                            d="M78.5071 81.1788H39.2443C35.629 81.1788 32.6977 84.1101 32.6977 87.7255V113.673C32.6977 117.289 35.629 120.22 39.2443 120.22H78.5071C82.1225 120.22 85.0537 117.289 85.0537 113.673V87.7255C85.0537 84.1101 82.1225 81.1788 78.5071 81.1788ZM71.9604 107.126H45.791V94.2721H71.9604V107.126Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_17"
                                            d="M104.72 120.22H143.983C147.598 120.22 150.529 117.289 150.529 113.673V87.7255C150.529 84.1101 147.598 81.1788 143.983 81.1788H104.72C101.104 81.1788 98.1732 84.1101 98.1732 87.7255V113.673C98.1732 117.289 101.104 120.22 104.72 120.22ZM111.267 94.2721H137.436V107.126H111.267V94.2721Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_18"
                                            d="M170.177 120.22H209.44C213.056 120.22 215.987 117.289 215.987 113.673V87.7255C215.987 84.1101 213.056 81.1788 209.44 81.1788H170.177C166.562 81.1788 163.631 84.1101 163.631 87.7255V113.673C163.631 117.289 166.562 120.22 170.177 120.22ZM176.724 94.2721H202.893V107.126H176.724V94.2721Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_19"
                                            d="M78.0431 29.1429H38.7804C35.165 29.1429 32.2338 32.0741 32.2338 35.6895V61.6372C32.2338 65.2526 35.165 68.1838 38.7804 68.1838H78.0431C81.6585 68.1838 84.5898 65.2526 84.5898 61.6372V35.6895C84.5898 32.0741 81.6585 29.1429 78.0431 29.1429ZM71.4965 55.0905H45.3271V42.2362H71.4965V55.0905Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_20"
                                            d="M104.256 68.1838H143.519C147.134 68.1838 150.065 65.2526 150.065 61.6372V35.6895C150.065 32.0741 147.134 29.1429 143.519 29.1429H104.256C100.641 29.1429 97.7093 32.0741 97.7093 35.6895V61.6372C97.7093 65.2526 100.641 68.1838 104.256 68.1838ZM110.803 42.2362H136.972V55.0905H110.803V42.2362Z"
                                            fill="black"
                                        />
                                        <path
                                            id="Vector_21"
                                            d="M169.713 68.1838H208.976C212.592 68.1838 215.523 65.2526 215.523 61.6372V35.6895C215.523 32.0741 212.592 29.1429 208.976 29.1429H169.713C166.098 29.1429 163.167 32.0741 163.167 35.6895V61.6372C163.167 65.2526 166.098 68.1838 169.713 68.1838ZM176.26 42.2362H202.43V55.0905H176.26V42.2362Z"
                                            fill="black"
                                        />
                                    </g>
                                </svg>
                            </div>

                            <div class="col-span-3 min-w-[161px] mt-12">
                                <div class="  grid grid-cols-1 grid-rows-4 grid-flow-col gap-4 justify-items-center items-center ">
                                    <div class=" text-[35px] text-bgnav ">
                                        Cena za m²
                                    </div>
                                    <div class="text-[25px] ">
                                        <NumericFormat
                                            value={Math.round(
                                                calculateMetersPrice
                                            )}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                        />
                                    </div>
                                    <div class="  text-[35px] text-bgnav">
                                        Pietro
                                    </div>
                                    <div class="text-[25px]">{data.floor}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-span-2  "></div>
                    <div class="row-span-3  col-span-4 p-8">
                        {Page == false && (
                            <div class="grid grid-cols-4 grid-rows-10 gap-2 mt-5 h-full items-center">
                                <div class="relative w-full col-span-4  h-10">
                                    <input
                                        class={
                                            errors.title
                                                ? "bg-red-100  w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-blue-red-500 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900"
                                                : "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        }
                                        placeholder=""
                                        type="text"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-[1.5] after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        {errors.title ? (
                                            <div className="input-error">
                                                {errors.title}
                                            </div>
                                        ) : (
                                            <p>Tytul</p>
                                        )}
                                    </label>
                                </div>

                                <div class="col-span-4 relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                    <nav class="flex min-w-[240px] flex-row gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                                        <div
                                            role="button"
                                            class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-react"
                                                class="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div class="grid mr-3 place-items-center">
                                                    <div class="inline-flex items-center">
                                                        <label
                                                            class="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-react"
                                                        >
                                                            <input
                                                                name="horizontal-list"
                                                                id="horizontal-list-react"
                                                                type="radio"
                                                                value="Mieszkanie"
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "type",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-3.5 w-3.5"
                                                                    viewBox="0 0 16 16"
                                                                    fill="currentColor"
                                                                >
                                                                    <circle
                                                                        data-name="ellipse"
                                                                        cx="8"
                                                                        cy="8"
                                                                        r="8"
                                                                    ></circle>
                                                                </svg>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Mieszkanie
                                                </p>
                                            </label>
                                        </div>
                                        <div
                                            role="button"
                                            class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-vue"
                                                class="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div class="grid mr-3 place-items-center">
                                                    <div class="inline-flex items-center">
                                                        <label
                                                            class="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-vue"
                                                        >
                                                            <input
                                                                name="horizontal-list"
                                                                id="horizontal-list-vue"
                                                                type="radio"
                                                                value="Dom"
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "type",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-3.5 w-3.5"
                                                                    viewBox="0 0 16 16"
                                                                    fill="currentColor"
                                                                >
                                                                    <circle
                                                                        data-name="ellipse"
                                                                        cx="8"
                                                                        cy="8"
                                                                        r="8"
                                                                    ></circle>
                                                                </svg>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Dom
                                                </p>
                                            </label>
                                        </div>
                                        <div
                                            role="button"
                                            class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-svelte"
                                                class="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div class="grid mr-3 place-items-center">
                                                    <div class="inline-flex items-center">
                                                        <label
                                                            class="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-svelte"
                                                        >
                                                            <input
                                                                name="horizontal-list"
                                                                id="horizontal-list-svelte"
                                                                type="radio"
                                                                value="Działka"
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "type",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-3.5 w-3.5"
                                                                    viewBox="0 0 16 16"
                                                                    fill="currentColor"
                                                                >
                                                                    <circle
                                                                        data-name="ellipse"
                                                                        cx="8"
                                                                        cy="8"
                                                                        r="8"
                                                                    ></circle>
                                                                </svg>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Działka
                                                </p>
                                            </label>
                                        </div>
                                        <div
                                            role="button"
                                            class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                                        >
                                            <label
                                                htmlFor="horizontal-list-svelte"
                                                class="flex items-center w-full px-3 py-2 cursor-pointer"
                                            >
                                                <div class="grid mr-3 place-items-center">
                                                    <div class="inline-flex items-center">
                                                        <label
                                                            class="relative flex items-center p-0 rounded-full cursor-pointer"
                                                            htmlFor="horizontal-list-svelte"
                                                        >
                                                            <input
                                                                name="horizontal-list"
                                                                id="horizontal-list-svelte"
                                                                type="radio"
                                                                value="Sklep"
                                                                onChange={(e) =>
                                                                    setData(
                                                                        "type",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                                                            />
                                                            <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="h-3.5 w-3.5"
                                                                    viewBox="0 0 16 16"
                                                                    fill="currentColor"
                                                                >
                                                                    <circle
                                                                        data-name="ellipse"
                                                                        cx="8"
                                                                        cy="8"
                                                                        r="8"
                                                                    ></circle>
                                                                </svg>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                                    Sklep
                                                </p>
                                            </label>
                                        </div>
                                    </nav>
                                </div>

                                <div class="relative w-full col-span-2  h-10">
                                    <input
                                        class={
                                            errors.meters
                                                ? "bg-red-100  w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-blue-red-500 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900"
                                                : "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        }
                                        placeholder=" "
                                        type="number"
                                        value={data.meters}
                                        onChange={(e) =>
                                            setData("meters", e.target.value)
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        {errors.meters ? (
                                            <div className="input-error">
                                                {errors.meters}
                                            </div>
                                        ) : (
                                            <p>Metraz</p>
                                        )}
                                    </label>
                                </div>
                                <div class="relative w-full   h-10">
                                    <input
                                        class={
                                            errors.title
                                                ? "bg-red-100  w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-blue-red-500 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900"
                                                : "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        }
                                        placeholder=" "
                                        type="number"
                                        value={data.rooms}
                                        onChange={(e) =>
                                            setData("rooms", e.target.value)
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        {errors.title ? (
                                            <div className="input-error">
                                                {errors.rooms}
                                            </div>
                                        ) : (
                                            <p>Liczba Pokoi</p>
                                        )}
                                    </label>
                                </div>

                                <div class="relative w-full   h-10">
                                    <input
                                        class={
                                            errors.floor
                                                ? "bg-red-100  w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-blue-red-500 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900"
                                                : "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        }
                                        placeholder=" "
                                        type="number"
                                        value={data.floor}
                                        onChange={(e) =>
                                            setData("floor", e.target.value)
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        {errors.floor ? (
                                            <div className="input-error">
                                                {errors.floor}
                                            </div>
                                        ) : (
                                            <p>Pietro</p>
                                        )}
                                    </label>
                                </div>
                                <div class="relative w-full col-span-4   h-10">
                                    <input
                                        class="  peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        type="text"
                                        value={data.accessories}
                                        onChange={(e) =>
                                            setData(
                                                "accessories",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Dodatkowe wyposazenie
                                    </label>
                                </div>

                                <div class="relative w-full    h-10">
                                    <NumericFormat
                                        class={
                                            errors.price
                                                ? "bg-red-100  w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-blue-red-500 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900"
                                                : "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        }
                                        placeholder=" "
                                        thousandSeparator={true}
                                        inputmode="numeric"
                                        value={data.price}
                                        onChange={(e) =>
                                            setData("price", e.target.value)
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        {errors.price ? (
                                            <div className="input-error">
                                                {errors.price}
                                            </div>
                                        ) : (
                                            <p>Cena w zł</p>
                                        )}
                                    </label>
                                </div>

                                <div class="relative w-full    h-10">
                                    <NumericFormat
                                        class="  peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        thousandSeparator={true}
                                        inputmode="numeric"
                                        readOnly
                                        value={
                                            liczbaStr != 0
                                                ? `${Math.round(
                                                      calculateMetersPrice
                                                  )} zł`
                                                : "0"
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Cena w zł za m²
                                    </label>
                                </div>
                                <div class="relative w-full col-span-1   h-10">
                                    <input
                                        class={
                                            errors.age
                                                ? "bg-red-100  w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-blue-red-500 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px]  focus:border-gray-900"
                                                : "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        }
                                        placeholder=" "
                                        type="date"
                                        value={data.age}
                                        onChange={(e) =>
                                            setData("age", e.target.value)
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        {errors.age ? (
                                            <div className="input-error">
                                                {errors.age}
                                            </div>
                                        ) : (
                                            <p>Data wybudowania</p>
                                        )}
                                    </label>
                                </div>

                                <div class=" text-[45px] text-bgnav row-start-9 col-start-3 col-span-2 text-right ">
                                    <NumericFormat
                                        value={data.price}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={""}
                                    />
                                    <a> zl</a>
                                </div>

                                <div class=" text-[45px] text-bgnav row-start-9 col-start-3 col-span-2 text-right ">
                                    <NumericFormat
                                        value={data.price}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={""}
                                    />
                                    <a> zl</a>
                                </div>

                                {Page != false ? (
                                    <div
                                        onClick={backPage}
                                        class="btn-outline row-start-10 col-start-3 col-span-1"
                                    >
                                        Powrot
                                    </div>
                                ) : null}

                                {Page != true ? (
                                    <div
                                        onClick={nextPage}
                                        class="btn-primary row-start-10 col-start-4 col-span-1"
                                    >
                                        Dalej
                                    </div>
                                ) : (
                                    <button
                                        onClick={nextPage}
                                        type="submit"
                                        disabled={processing}
                                        class="btn-primary row-start-10 col-start-4 col-span-1"
                                    >
                                        Stworz
                                    </button>
                                )}
                            </div>
                        )}
                        {Page == true && (
                            <div class="grid grid-cols-4 grid-rows-10 gap-2 mt-5 h-full items-center">
                                <div class=" text-[45px] text-bgnav row-start-9 col-start-3 col-span-2 text-right ">
                                    <NumericFormat
                                        value={data.price}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={""}
                                    />
                                    <a> zl</a>
                                </div>

                                <div class="relative w-full col-span-4  h-10">
                                    <select
                                        label="Wybierz wojewodztwo"
                                        value={data.voivodeship}
                                        onChange={(e) =>
                                            setData(
                                                "voivodeship",
                                                e.target.value
                                            )
                                        }
                                        class=" input-filter-r peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                    >
                                        {dataVO.map((n, index) => (
                                            <option key={index} value={n}>
                                                {n}
                                            </option>
                                        ))}
                                    </select>
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Wybierz wojewodztwo
                                    </label>
                                </div>

                                <div class="relative w-full col-span-2  h-10">
                                    <input
                                        class="  peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        type="text"
                                        value={data.city}
                                        onChange={(e) =>
                                            setData("city", e.target.value)
                                        }
                                    />

                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Miasto
                                    </label>
                                </div>
                                <div class="relative w-full col-span-2  h-10">
                                    <input
                                        class="  peer w-full h-full  bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        type="text"
                                        value={data.code}
                                        onChange={(e) =>
                                            setData("code", e.target.value)
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Kod Podcztowy
                                    </label>
                                </div>

                                <div class="relative w-full col-span-2  h-10">
                                    <input
                                        class="  peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        type="text"
                                        value={data.street}
                                        onChange={(e) =>
                                            setData("street", e.target.value)
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Ulica
                                    </label>
                                </div>
                                <div class="relative w-full   h-10">
                                    <input
                                        class="  peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        type="number"
                                        value={data.street_nr}
                                        onChange={(e) =>
                                            setData("street_nr", e.target.value)
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Numer Ulicy
                                    </label>
                                </div>

                                <div class="relative w-full    h-10">
                                    <input
                                        class="  peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        type="text"
                                        value={data.advertiser}
                                        onChange={(e) =>
                                            setData(
                                                "advertiser",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Typ
                                    </label>
                                </div>

                                <div class="relative w-full    h-10">
                                    <select
                                        class="  peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                                        placeholder=" "
                                        value={data.SW}
                                        onChange={(e) =>
                                            setData("SW", e.target.value)
                                        }
                                    >
                                        {SWOptions.map((SW) => (
                                            <option>{SW}</option>
                                        ))}
                                    </select>
                                    <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                                        Rodzaj
                                    </label>
                                </div>

                                <div class=" text-[45px] text-bgnav row-start-9 col-start-3 col-span-2 text-right ">
                                    <NumericFormat
                                        value={data.price}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={""}
                                    />
                                    <a> zl</a>
                                </div>

                                {Page != false ? (
                                    <div
                                        onClick={backPage}
                                        class="btn-outline row-start-10 col-start-3 col-span-1"
                                    >
                                        Powrot
                                    </div>
                                ) : null}

                                {Page != true ? (
                                    <div
                                        onClick={nextPage}
                                        class="btn-primary row-start-10 col-start-4 col-span-1"
                                    >
                                        Dalej
                                    </div>
                                ) : (
                                    <button
                                        onClick={nextPage}
                                        type="submit"
                                        disabled={processing}
                                        class="btn-primary row-start-10 col-start-4 col-span-1"
                                    >
                                        Stworz
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </>
    );
};

export default CreateListings;
