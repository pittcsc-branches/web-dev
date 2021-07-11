const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#243E8B",
				secondary: {
					100: "#FFB81C",
					200: "#F8E3B4",
				},
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			textColor: {
				primary: "#243E8B",
				secondary: {
					100: "#FFB81C",
					200: "#F8E3B4",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
