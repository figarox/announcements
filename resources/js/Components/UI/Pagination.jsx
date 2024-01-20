import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react"; // Assuming similar Inertia package exists for React

const Pagination = ({ links }) => (
    <div className="flex gap-1">
        {links.map((link, index) => (
            <a
                key={index}
                className={`py-2 px-4 rounded-md ${
                    link.active
                        ? "bg-bgnav dark:bg-indigo-800 text-gray-300"
                        : ""
                }`}
                href={link.url}
                dangerouslySetInnerHTML={{ __html: link.label }}
            />
        ))}
    </div>
);

export default Pagination;
