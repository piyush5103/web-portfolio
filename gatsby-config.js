module.exports = {
	siteMetadata: {
		title: `Speaker Series: India at Berkeley`,
		description: `Speaker Series: India at Berkeley`,
		author: `Piyush Pahuja`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-image`,
		`gatsby-plugin-catch-links`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-resolve-src`,
		`gatsby-plugin-remove-trailing-slashes`,
		`gatsby-plugin-emotion`, 'gatsby-plugin-antd',
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
			resolve: '@prismicio/gatsby-source-prismic-graphql',
			options: {
				repositoryName: 'piyushpahujaportfolio', // (REQUIRED, replace with your own)
				linkResolver: () => post => `/${post.uid}`,
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-prismic-starter-prist`,
				short_name: `prist`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
			},
		},
		// https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-183926068-1",
				head: true,
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
