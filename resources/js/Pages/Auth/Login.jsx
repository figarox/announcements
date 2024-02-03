import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import MainLayout from "../../Layouts/MainLayout";
import picture from "../../../picture/unlock.png";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: null,
        password: null,
    });

    const [option, setOption] = useState();

    function submit(e) {
        e.preventDefault();
        post(route("login.store"));
    }
    return (
        <>
            <MainLayout />

            <form onSubmit={submit}>
                <div class=" w-full h-[770px] login:h-[700px] grid justify-center content-center">
                    <div class="grid justify-center content-center grid-rows-12 login:grid-rows-12  login:grid-flow-col login:w-[66rem] h-[760px] login:h-[33rem]">
                        <div class="row-start-10 flex items-center justify-center  login:row-start-2 login:row-span-2 min-w-[100px] h-[420px] loginsmall:h-[600px] login:w-[34rem] login:h-[30rem]  drop-shadow-2xl  rounded-b-3xl login:rounded-l-3xl bg-gradient-to-r from-[#5554D4] via-[#2490F3] to-[#47018C]">
                            <img
                                class="w-[100%] phonebttablet:w-[70%] login:w-[100%]"
                                src={picture}
                            ></img>
                        </div>
                        <div class=" row-start-2 login:row-end-3 login:row-span-2 m-3 login:m-0 login:-ml-8 min-w-[100px] min-h-[400px] login:w-[34rem] login:h-[30rem] drop-shadow-2xl rounded-t-3xl login:rounded-r-3xl bg-white ">
                            <div class="absolute flex items-center justify-center left-0 right-0 m-auto login:ml-[220px] mt-[-50px] w-28 h-28  bg-bgnav rounded-full drop-shadow-2xl ">
                                <ion-icon
                                    id="person"
                                    name="people-outline"
                                ></ion-icon>
                            </div>
                            <div class="grid grid-row-2 gap-1 w-full h-14 mt-12 ">
                                <div class=" min-w-[100px] login:w-full h-full row-start-1  border-b-2 border-bgnav flex items-center justify-center">
                                    <div class="text-bgnav ">Zaloguj się</div>
                                </div>
                                <a
                                    class="min-w-[100px] login:w-full h-full row-end-2  border-b-2 border-gray-200 flex items-center justify-center"
                                    href="/user-account/create"
                                >
                                    <div class="">Zarejestruj się</div>
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
                                    placeholder="e-mial"
                                ></input>
                                {errors.email && (
                                    <div className="grid input-error">
                                        {errors.email}
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
                                    placeholder="hasło"
                                ></input>
                                {errors.password && (
                                    <div className="input-error">
                                        {errors.password}
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    class="rounded-[20px] w-full h-[42px] text-white  col-start-2 col-span-4 bg-bgnav drop-shadow-lg"
                                >
                                    Zaloguj Się
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;
