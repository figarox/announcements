import React from "react";
import { useForm } from "@inertiajs/react";
import MainLayout from "../../Layouts/MainLayout";
import picture from "../../../picture/unlock.png";

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
    });

    function submit(e) {
        e.preventDefault();
        post(route("user-account.store"));
    }
    return (
        <>
            <MainLayout />

            <form onSubmit={submit}>
                <div class=" w-full h-[700px] grid justify-center content-center">
                    <div class="grid grid-rows-12 grid-flow-col w-[66rem] h-[33rem]">
                        <div class="flex items-center justify-center row-start-2 row-span-2 w-[34rem] h-[30rem]  drop-shadow-2xl  rounded-l-3xl bg-gradient-to-r from-[#5554D4] via-[#2490F3] to-[#47018C]">
                            <img src={picture}></img>
                        </div>
                        <div class=" row-end-3 row-span-2  -ml-8 w-[34rem] h-[30rem] drop-shadow-2xl rounded-r-3xl bg-white ">
                            <div class="absolute ml-[220px] mt-[-50px] w-28 h-28  bg-bgnav rounded-full drop-shadow-2xl flex items-center justify-center">
                                <ion-icon
                                    id="person"
                                    name="people-outline"
                                ></ion-icon>
                            </div>
                            <div class="grid grid-row-2 gap-1 w-full h-14 mt-12 ">
                                <a
                                    class="w-full h-full row-end-2  border-b-2  border-gray-200 flex items-center justify-center"
                                    href="/login"
                                >
                                    <div class=" ">Zaloguj się</div>
                                </a>
                                <a
                                    class="w-full h-full row-end-2  border-b-2 border-bgnav border-gray-200 flex items-center justify-center"
                                    href="/user-account/create"
                                >
                                    <div class="text-bgnav">
                                        Zarejestruj się
                                    </div>
                                </a>
                            </div>
                            <div class=" mt-14 grid grid-cols-6 gap-6 justify-center w-full ">
                                <input
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    type="text"
                                    class="rounded-[20px] w-full col-start-2 col-span-4 drop-shadow-lg"
                                    placeholder="E-mial"
                                ></input>
                                {errors.email && (
                                    <div className="input-error">
                                        {errors.email}
                                    </div>
                                )}
                                <input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    type="text"
                                    class="rounded-[20px] w-full col-start-2 col-span-4 drop-shadow-lg"
                                    placeholder="Nick"
                                ></input>
                                {errors.name && (
                                    <div className="input-error">
                                        {errors.name}
                                    </div>
                                )}
                                <input
                                    id="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    type="password"
                                    class="rounded-[20px] col-start-2 col-span-4 drop-shadow-lg"
                                    placeholder="Hasło"
                                ></input>
                                {errors.password && (
                                    <div className="input-error">
                                        {errors.password}
                                    </div>
                                )}
                                <input
                                    id="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    type="password"
                                    class="rounded-[20px] col-start-2 col-span-4 drop-shadow-lg"
                                    placeholder="Powtorz hasło"
                                ></input>
                                {errors.password && (
                                    <div className="input-error">
                                        {errors.password}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    class="rounded-[20px] w-full h-[42px] text-white  col-start-2 col-span-4 bg-bgnav drop-shadow-lg"
                                >
                                    Zaloguj Się
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div class="w-1/2 mx-auto">
                    <div>
                        <label for="email" class="label">
                            Name
                        </label>
                        <input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            type="text"
                            class="input"
                        />
                        {errors.email && (
                            <div className="input-error">{errors.email}</div>
                        )}
                    </div>
                    <div>
                        <label for="email" class="label">
                            E-mail
                        </label>
                        <input
                            id="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            type="text"
                            class="input"
                        />
                        {errors.email && (
                            <div className="input-error">{errors.email}</div>
                        )}
                    </div>
                    <div class="mt-4">
                        <label for="password" class="label">
                            Password
                        </label>
                        <input
                            id="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                            class="input"
                        />
                        {errors.password && (
                            <div className="input-error">{errors.password}</div>
                        )}
                    </div>
                    <div class="mt-4">
                        <label for="password_confirmation" class="label">
                            Password_confirmation
                        </label>
                        <input
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            type="password"
                            class="input"
                        />
                        {errors.password && (
                            <div className="input-error">{errors.password}</div>
                        )}
                    </div>
                    <div class="mt-4">
                        <button
                            class="btn-primary"
                            type="submit"
                            disabled={processing}
                        >
                            Register
                        </button>
                    </div>
                </div> */}
            </form>
        </>
    );
};

export default Register;
