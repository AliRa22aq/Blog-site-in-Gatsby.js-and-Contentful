import React from 'react'
import styles from './navbar.module.css'
import { Link } from "gatsby"
import {provider, auth} from './googleSignIn'
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../store/userSlice"
import Avatar from '@material-ui/core/Avatar';
import { Grid, Button } from "@material-ui/core"





const Navbar = () => {                                                                                                           


    const dispatch = useDispatch()
    const user = useSelector((store) => (store))

    console.log(user)



    const signIn = () => {
        auth.signInWithPopup(provider).then(results => {
            console.log(results)
            const name = results.user.displayName;
            const picture = results.additionalUserInfo.profile.picture
            dispatch(addUser({name, picture}))
            
        }).catch(error => console.log(error))
    }




    return (
        <div className={styles.nav}> 
            <Grid container>
                <Grid item xs={6} className={styles.head1}> 
                <Link to="/">    Gatsby Blog </Link>
                </Grid>
                
                <Grid item xs={6} >
                <div className={styles.head2}>

                <a onClick={signIn}> 

                {!user.picture?
                    <Button variant="outlined" color="primary"> Sign In</Button>  :
                    <Avatar alt="DP" src={user.picture} /> 
                    }

                </a>
                </div>
                </Grid>


            </Grid>


            <div >
            </div>




        </div>
    )
}

export default Navbar;
