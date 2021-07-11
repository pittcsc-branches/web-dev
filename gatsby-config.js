module.exports = {
	siteMetadata: {
		title: `Pitt CSC Web-Dev Branch`,
		description: `Website for the web development branch of Pitt CSC`,
		author: `Pitt CSC`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-emoji-favicon`,
			options: {
				emoji: `👩‍💻`,
			},
		},
		`gatsby-plugin-image`, // https://www.gatsbyjs.com/plugins/gatsby-plugin-image
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-emotion`,
		`gatsby-plugin-react-helmet`,
	],
};
