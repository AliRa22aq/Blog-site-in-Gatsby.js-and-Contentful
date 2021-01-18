import React from "react"
import Blog from '../components/blog'
import BlogTop from "../components/blogTop";
import Layout from "../components/layout";


const BlogIndex = () => {


  return (
    <Layout>
      <BlogTop />
      <Blog />
    </Layout>
  )
}

export default BlogIndex;