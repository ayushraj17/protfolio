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

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
// 	if (stage === "build-html") {
// 		actions.setWebpackConfig({
// 			module: {
// 				rules: [
// 					{
// 						test: "node_modules/particles-bg",
// 						use: loaders.null(),
// 					},
// 				],
// 			},
// 		});
// 	}
// };
