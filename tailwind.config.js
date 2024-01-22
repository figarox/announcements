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
    },
    plugins: [require("@tailwindcss/forms")],
});
