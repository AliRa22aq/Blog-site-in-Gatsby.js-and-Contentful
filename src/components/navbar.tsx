import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}> 
            
            <div className={styles.head1}>
                    Gatsby Blog
            </div>
            <div className={styles.head2}>
                    Sing in
                
            </div>

        </div>
    )
}

export default Navbar;
