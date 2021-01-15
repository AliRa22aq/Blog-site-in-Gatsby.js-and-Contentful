import React from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Paper from '@material-ui/core/Paper';
import Layout from "../components/layout";
import style from './blog-post.module.css'
import { useStaticQuery, Link } from "gatsby"



import { Container, Typography } from '@material-ui/core'


const BlogPostContentfulTemplate = ({ pageContext }) => {
  console.log(pageContext.data);

  const blogData = pageContext.data;
  console.log(blogData.postNo)


  const result = useStaticQuery(
    graphql`
      {
        allContentfulPost {
            totalCount
          }
      }
    `
  )

  const totalPosts = result.allContentfulPost.totalCount


  return (
    <Layout>

      <div className={style.paper} >

        <Paper elevation={3} >
          <Container maxWidth="lg" >
            <div className={style.blogpost_title}>
              <Typography className={style.title} >
                {blogData.title}
              </Typography>
              <div className={style.blogpost_subtitle}>
                <Typography className={style.subtitle} variant="h6" >
                  {blogData.subtitle}
                </Typography>
              </div>
            </div>
          </Container>

          <Container maxWidth="lg" >
            <div className={style.blogpost_imagecontainer}>
              <div className={style.blogpost_image} >
                <img src={blogData.image.fluid.src} alt={blogData.title} />
              </div>
            </div>
          </Container>

          <Container maxWidth="sm" >
            <div className={style.blogpost_datacontainer} >
              <div className={style.blogpost_paragraph} >
                {documentToReactComponents(JSON.parse(blogData.content.raw))}
              </div>
            </div>
            <div className={style.blogpost_author}>
              <span className={style.author} >Author : </span>
              <span className={style.authorName} >{blogData.author}</span>

            </div>
            <div className={style.Blogs_previouspage} >

              {/* {
               blogData.postNo === 1 ? <Link to="/post2" > <button> Next Blog </button> </Link> :
               blogData.slug == 'post2' ? <Link to="/post3" > <button> Next Blog </button> </Link> :
               blogData.slug == 'post3' ? <Link to="/post1" > <button> Next Blog </button> </Link> :
               null
              } */}

              {
                blogData.postNo < totalPosts?
                <Link to={`/post${blogData.postNo+1}`}> <button> Next Blog </button> </Link>:
                <Link to='/post1'> <button> Next Blog </button> </Link> 

              }

            </div>
            <div>
            </div>
          </Container>
        </Paper>
      </div>
    </Layout>
  )
}

export default BlogPostContentfulTemplate

