import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import MainLayout from "../../Layouts/MainLayout";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: null,
        password: null,
    });

    function submit(e) {
        e.preventDefault();
        post(route("login.store"));
    }
    return (
        <>
            <MainLayout />

            <form onSubmit={submit}>
                <div class="w-1/2 mx-auto">
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
                        <button class="btn-primary w-full" type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;
