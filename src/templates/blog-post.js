import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const BlogPostContentfulTemplate = ({pageContext}) => {
  console.log(pageContext.data);

  return (
    <div>
    
    <h1>data : {pageContext.data.title}</h1> <br />

    <h2>data : {pageContext.data.subtitle}</h2> <br />

    <h2>data : {pageContext.data.author}</h2> <br />

    <img src={pageContext.data.image.fluid.src} alt="image" />

    <p> {documentToReactComponents(JSON.parse(pageContext.data.content.raw))} </p>

    </div>
  )
}

export default BlogPostContentfulTemplate
