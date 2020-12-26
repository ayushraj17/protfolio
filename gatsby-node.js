const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		{
			blogs: allStrapiBlogs {
				nodes {
					slug
				}
			}
		}
	`);

	result.data.blogs.nodes.forEach((blog) => {
		createPage({
			path: `/blog/${blog.slug}`,
			component: path.resolve(`src/templates/BlogTemplate.js`),
			context: {
				slug: blog.slug,
			},
		});
	});
};
