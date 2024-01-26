/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    theme: {
        colors: {
            bgnav: "#5554D4",
            hbg: "#5656af",
        },
        screens: {
            phone: "375px",
            // => @media (min-width: 375px) { ... }

            phonebttablet: "747px",

            nav: "900px",

            listing: "960px",

            tablet: "640px",
            // => @media (min-width: 640px) { ... }

            laptop: "1024px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [require("@tailwindcss/forms")],
});
