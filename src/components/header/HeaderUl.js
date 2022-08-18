import React from "react";
import HeaderLi from "./HeaderLi";


function HeaderUl({href, styles}){
    return(
        <ul style={styles.ul}>
            {href.map((hrefEnter, index) => {
                return <HeaderLi styles={styles} href={hrefEnter} key={index} />
            })}
        </ul>
    )
}

export default HeaderUl