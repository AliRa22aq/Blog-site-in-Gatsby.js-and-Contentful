import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"


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
            content {
              raw
            }
          }
        }
      }
    ` 
  )
  

  const eachPost = result.allContentfulPost.nodes

  console.log(eachPost)


  return (
    <div> 
      <h1> Hello Blog post </h1>
      { eachPost.map((post, index) => {
        return (
          <div key={index}> 
          <h3> {post.title} </h3>
          <h4> {post.subtitle} </h4>
          <h6> {post.author} </h6>
          <img src={post.image.fluid.src} alt= {`image${index}`} />
          </div>
        )     
      })
    }

    </div>
  )
}

export default BlogIndex;