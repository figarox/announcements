import React from "react";
import { useForm } from "@inertiajs/react";
import { Select, Option, Input } from "@material-tailwind/react";

const Filters = () => {
    const { data, setData, get, processing, errors } = useForm({
        priceFrom: null,
        priceTo: null,
        rooms: null,
        floor: null,
        voivodeship: null,
        city: null,
        SW: null,
    });
    function submit(e) {
        e.preventDefault();
        filter();
    }

    const filter = () => {
        get(route("listing.index"), {
            preserveState: true,
            preserveScroll: true,
        });
    };
    const clear = () => {
        data.priceFrom = null;
        data.priceTo = null;
        data.rooms = null;
        data.floor = null;
        data.voivodeship = null;
        data.city = null;
        data.SW = null;
        filter();
    };

    const RoomOptions = [1, 2, 3, 4, 5, "6+"];
    const LevelOptions = [1, 2, 3, 4, 5, "6+"];
    const VoivodeshipOptions = [
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
    const SROptions = ["Sprzedaz", "Wynajem"];

    return (
        <form onSubmit={submit}>
            <div class="mb-8 mt-4 flex flex-wrap gap-2">
                <div class="flex flex-nowrap items-center">
                    <div className="w-18">
                        <Input
                            label="Cena Od"
                            type="number"
                            value={data.priceFrom}
                            onChange={(e) =>
                                setData("priceFrom", e.target.value)
                            }
                        />
                    </div>
                    <div className="w-18">
                        <Input
                            label="Cena Do"
                            type="number"
                            value={data.priceTo}
                            onChange={(e) => setData("priceTo", e.target.value)}
                        />
                    </div>
                </div>
                <div className="w-25">
                    <Select
                        label="Pokoje"
                        value={data.rooms}
                        onChange={(e) => setData("rooms", e.target.value)}
                    >
                        {RoomOptions.map((n, index) => (
                            <Option key={index} value={n === "6+" ? 6 : n}>
                                {n}
                            </Option>
                        ))}
                    </Select>
                </div>
                <div class="flex flex-nowrap items-center">
                    <Select
                        label="Piętro"
                        value={data.floor}
                        onChange={(e) => setData("floor", e.target.value)}
                    >
                        {LevelOptions.map((n, index) => (
                            <Option key={index} value={n === "6+" ? 6 : n}>
                                {n}
                            </Option>
                        ))}
                    </Select>
                </div>

                <div class="flex flex-nowrap items-center">
                    <Select
                        label="Wojewodztwo"
                        value={data.voivodeship}
                        onChange={(e) => setData("voivodeship", e.target.value)}
                    >
                        {VoivodeshipOptions.map((n, index) => (
                            <Option key={index} value={n === "6+" ? 6 : n}>
                                {n}
                            </Option>
                        ))}
                    </Select>

                    <input
                        type="text"
                        placeholder="Miasto"
                        value={data.city}
                        onChange={(e) => setData("city", e.target.value)}
                        className="input-filter-r w-28"
                    />
                </div>
                <div class="flex flex-nowrap items-center">
                    <select
                        class="input-filter-r w-28"
                        value={data.SW}
                        onChange={(e) => setData("SW", e.target.value)}
                    >
                        <option value="">S/W</option>
                        {SROptions.map((n, index) => (
                            <option key={index} value={n === "6+" ? 6 : n}>
                                {n}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" class="btn-normal">
                    Filter
                </button>
                <button type="reset" onClick={clear}>
                    Wyczyść
                </button>
            </div>
        </form>
    );
};

export default Filters;
