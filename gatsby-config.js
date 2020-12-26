module.exports = {
	siteMetadata: {
		title: `Ayush Raj`,
		description: `A dev who can be trusted to deliver under minimal supervision but it's also not shy to ask help. My strength lies in team management, ability to coordinate and pay extreme attention to little nuisances in work.`,
		author: `Ayush Raj`,
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `ayush`,
				short_name: `ayush`,
				start_url: `/`,
				background_color: `#41aea9`,
				theme_color: `#41aea9`,
				display: `minimal-ui`,
				icon: `src/images/ayush.jpg`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `https://ayush-strapi.herokuapp.com`,
				queryLimit: 1000, // Default to 100
				contentTypes: [`jobs`, `projects`, `blogs`, `timelines`],
				singleTypes: [`about`],
			},
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `IBM Plex Sans`,
						variants: [`700`],
					},
					{
						family: `Poppins`,
						variants: [
							`100`,
							`200`,
							`300`,
							`400`,
							`500`,
							`600`,
							`700`,
							`800`,
							`900`,
						],
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
