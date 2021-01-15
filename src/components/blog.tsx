import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { ComplexCard } from './complexCard'
import { Grid, Button } from "@material-ui/core"
import styles from './blog.module.css'
import firebase from "gatsby-plugin-firebase"



const Blog = () => {

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


    const signIn = () => {
    auth.signInWithPopup(provider).then(results => {
        console.log(results)
    }

    ).catch(error => console.log(error))
  }

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
      <h2>Blog List </h2>

      <Grid container spacing={3}  >
        {
          eachPost.map((post, index) => {
            return (

              <Grid item xs={12} md={8} lg={4} key={index} >
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