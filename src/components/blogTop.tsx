import React from 'react'
import style from './blogTop.module.css'
import { Container, Grid, Typography } from "@material-ui/core"




const BlogTop = () => {
    return (
        <div className={style.container}>
            <Grid container> 

            <Grid item xs={12}>

            <div className={style.body}>

                <h4>Welcome to GatsBy Blog </h4>

            </div>
            </Grid>
            <Grid item xs={12}>
            <div className={style.body2}>

                <img 
                src="https://i.pinimg.com/originals/1e/c3/ab/1ec3ab5a3a6f58f2c4fa7ec58605d56f.png" 
                alt="img"
                height= "400px"
                width= '550px' />

            </div>
            </Grid>
            </Grid>
        </div>

    )
}


export default BlogTop




