/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            height: {
                "--player-height": "var(--player-height)",
            },
            colors: {
                "primary-color": "var(--primary-color)",
            },
            backgroundColor: {
                "bg-color": "var(--bg-color)",
            },
        },
    },
    plugins: [],
};
