import React from "react";
import { Link } from "react-router-dom";
import classes from '../UI/HeaderLi/HeaderLi.module.css'


function HeaderLi({href, styles}) {
    return(
        <li className={classes.HeaderLi}>
            <Link style={styles.a} to={href.url}>{href.titleLi}</Link>
        </li>
    )
}

export default HeaderLi