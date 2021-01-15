import React from 'react'
import styles from './navbar.module.css'
import { Link } from "gatsby"


const Navbar = () => {
    return (
        <div className={styles.nav}> 
            
            <div className={styles.head1}>
                 <Link to="/">    Gatsby Blog </Link>
            </div>
            <div className={styles.head2}>
                    Sing in
                
            </div>

        </div>
    )
}

export default Navbar;
