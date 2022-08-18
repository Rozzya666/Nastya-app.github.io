import React, { useState } from "react";

import HeaderUl from "./HeaderUl";

const Header = () => {
    const [href, setHref] = useState([
        {titleLi: "Навчання", url: '/training'},
        {titleLi: "Про мене", url: '/about'},
        {titleLi: "Домашній догляд", url: '/homecare'},
        {titleLi: "Прайс процедур", url: '/price'},
        {titleLi: "Відгуки", url: '/reviews'},
    ])
    const styles = {
        ul: {
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            padding: '20px 0',
            borderBottom: '2px solid #838383',
            flexWrap: 'wrap'
        },
        a: {
            textDecoration: 'none',
            color: 'black'
        }
    }
    return(
        <HeaderUl styles={styles} href={href} />
    )
}

{/* <ul className="headerul" style={styles.ul}>
            <li> <Link to='/training'>Навчання</Link></li>
            <li> <Link to='/about'>Про мене</Link></li>
            <li> <Link to='/homecare'>Домашній догляд</Link></li>
            <li> <Link to='/price'>Прайс процедур</Link></li>
            <li> <Link to='/reviews'>Відгуки</Link></li>
        </ul> */}

export default Header