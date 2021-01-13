import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { ComplexCard } from '../components/complexCard'
import { Grid } from "@material-ui/core"
import Layout from '../components/layout'


const BlogIndex = () => {


  const result = useStaticQuery(
    graphql`
      {
        allContentfulPost {
          nodes {
            author
            image {
              fluid {
                src
              }
            }
            title
            subtitle
            slug
          }
        }
      }
    `
  )


  const eachPost = result.allContentfulPost.nodes

  console.log(eachPost)


  return (
    <Layout>

      <h1> Welcome to Gatsby Blog  </h1>

      <Grid container spacing={4}>
        {
          eachPost.map((post, index) => {
            return (

              <Grid item xl={3} key={index}>
                <ComplexCard
                  title={post.title}
                  subtitle={post.subtitle}
                  author={post.author}
                  image={post.image.fluid.src}
                  slug={post.slug}
                />
              </Grid>

            )
          })
        }
      </Grid>

    </Layout>
  )
}

export default BlogIndex;