module.exports = {
	pathPrefix: "/drafts",
	plugins: [
		{
			resolve: `gatsby-theme-blog`,
			options: {},
		},
	],
	// Customize your site metadata:
	siteMetadata: {
		title: `My Drafts`,
		author: `griimick`,
		description: `About things I want to understand`,
		social: [
			{
				name: `twitter`,
				url: `https://twitter.com/griimick`,
			},
			{
				name: `github`,
				url: `https://github.com/griimick`,
			},
		],
	},
}
