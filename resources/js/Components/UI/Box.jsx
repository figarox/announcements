import React from "react";

const Box = ({ children }) => {
    return (
        <div class="relative border w-[370px] md:w-[600px] lg:w-[950px] xl:w-[1100px] h-[333px] md:h-[233px]   mb-6 border-gray-200 dark:border-gray-800 rounded-[20px] p-2 shadow-lg shadow-[#ECF0FB] dark:text-gray-300">
            {children}
        </div>
    );
};
export default Box;
