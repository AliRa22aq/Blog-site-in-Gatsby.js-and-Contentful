import React from 'react'
import styles from './footer.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer = () => {
    return (
        <div className={styles.foot}> 
        <a href="https://github.com/AliRa22aq">
            <h4> {`Ali Razzaq `} <GitHubIcon /></h4>
        </a>
        </div>
    )
}

export default Footer;

