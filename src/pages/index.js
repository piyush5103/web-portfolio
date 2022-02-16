import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import About from "components/About"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import PostCard from "components/PostCard"

const AboutTitle = styled("h1")`
  margin-bottom: 0.25em;
    font-family: 'Inter var', sans-serif;

`

const Section = styled("div")`
  margin-bottom: 10em;
    font-family: 'Inter var', sans-serif;

  display: flex;
  flex-direction: column;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`

const BlogTitle = styled("h2")`
  text-align: center;
margin-top: 1em;
margin-bottom: 2em;
    font-family: 'Inter var', sans-serif;

`

const BlogGrid = styled("div")`
  font-family: 'Inter var', sans-serif;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5em;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5em;
  }
`

const RenderBody = ({ home, projects, meta }) => (
	<>
		<Helmet
			title={`Piyush Pahuja's Web Development Portfolio`}
			titleTemplate={`%s Piyush Pahuja's Web Development Portfolio`}
			meta={[
				{
					name: `description`,
					content: meta.description,
				},
				{
					property: `og:title`,
					content: `Piyush Pahuja's Web Development Portfolio`,
				},
				{
					property: `og:description`,
					content: meta.description,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: meta.author,
				},
				{
					name: `twitter:title`,
					content: meta.title,
				},
				{
					name: `twitter:description`,
					content: meta.description,
				},
			].concat(meta)}
		/>



	</>
)

const Blog = ({ posts }) => (
	<>
		<BlogTitle>Piyush Pahuja's Web Development Portfolio</BlogTitle>
		<BlogGrid>
			{posts.map((post, i) => (
				<PostCard
					key={i}
					title={post.node.post_title}
					date={post.node.post_date}
					description={post.node.post_preview_description}
					uid={post.node._meta.uid}
					image={post.node.post_hero_image}
					linkedin={post.node.linkedin}
				/>
			))}
		</BlogGrid>
	</>
)

export default ({ }) => {
	//Required check for no data being returned
	// const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
	// const projects = data.prismic.allProjects.edges
	// const meta = data.site.siteMetadata

	// const posts = data.prismic.allPosts.edges
	// if (!posts) return null

	// if (!doc || !projects) return null


	return (
		<StaticQuery
			query={graphql`
  {
    prismic {
      allPosts {
        edges {
          node {
            post_title
            post_hero_image
            post_date
            post_preview_description
            linkedin
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`}
			render={data => (

				<Layout>
					<RenderBody meta={data.site.siteMetadata} />
					<Blog posts={data.prismic.allPosts.edges} meta={data.site.siteMetadata} />
				</Layout>
			)}
		/>

	)
}

RenderBody.propTypes = {
	home: PropTypes.object.isRequired,
	projects: PropTypes.array.isRequired,
	meta: PropTypes.object.isRequired,
}
