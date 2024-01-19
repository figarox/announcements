import React from "react";
import { useForm } from "@inertiajs/react";
import MainLayout from "../../Layouts/MainLayout";

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
                <div class="w-1/2 mx-auto">
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
                </div>
            </form>
        </>
    );
};

export default Register;
