import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { ComplexCard } from './complexCard'
import { Grid } from "@material-ui/core"
import styles from './blog.module.css'

const Blog = () => {


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
            <div className={styles.x} >

                <Grid container spacing={3}  >
                    {
                        eachPost.map((post, index) => {
                            return (

                                <Grid item xs={12} lg={4}  key={index} style={{alignItems:"center"}}>
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

            </div>
    )
}

export default Blog;