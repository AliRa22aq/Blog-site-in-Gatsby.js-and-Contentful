import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Paper from '@material-ui/core/Paper';
import Layout from "../components/layout";




const BlogPostContentfulTemplate = ({pageContext}) => {
  console.log(pageContext.data);

  return (
    <Layout>

    <Paper variant="outlined" square >
    
    <h1>{pageContext.data.title}</h1> <br />

    <h2>{pageContext.data.subtitle}</h2> <br />

    <h2>{pageContext.data.author}</h2> <br />

    <img src={pageContext.data.image.fluid.src} alt="image" />

    <p> {documentToReactComponents(JSON.parse(pageContext.data.content.raw))} </p>

    </Paper>

    </Layout>
  )
}

export default BlogPostContentfulTemplate
