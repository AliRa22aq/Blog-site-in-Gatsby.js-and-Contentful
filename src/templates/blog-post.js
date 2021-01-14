import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Paper from '@material-ui/core/Paper';
import Layout from "../components/layout";
import styles from './blog-post.module.css'




const BlogPostContentfulTemplate = ({pageContext}) => {
  console.log(pageContext.data);

  return (
    <Layout>
      <div className= {styles.paper} >

    <Paper elevation= {3} >
    
    <h1>{pageContext.data.title}</h1> <br />

    <h2>{pageContext.data.subtitle}</h2> <br />

    <h2>{pageContext.data.author}</h2> <br />

    <img src={pageContext.data.image.fluid.src} alt="image" />

    <p> {documentToReactComponents(JSON.parse(pageContext.data.content.raw))} </p>

    </Paper>
    </div>
    </Layout>
  )
}

export default BlogPostContentfulTemplate
