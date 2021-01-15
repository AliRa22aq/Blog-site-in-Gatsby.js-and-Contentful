import React from 'react'
import styles from './navbar.module.css'
import { Link } from "gatsby"
import {provider, auth} from './googleSignIn'
import Button from '@material-ui/core/Button';



const Navbar = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).then(results => {
            console.log(results)
        }).catch(error => console.log(error))
      }


    return (
        <div className={styles.nav}> 
            
            <div className={styles.head1}>
                 <Link to="/">    Gatsby Blog </Link>
            </div>
            <div className={styles.head2}>
                <a onClick={signIn}> 

                    Sing in
                
                </a>
            </div>

        </div>
    )
}

export default Navbar;
