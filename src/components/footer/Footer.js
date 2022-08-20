import React from "react";


function Footer() {
    
    return(
        <footer>
            <ul style={{marginTop: '30px', padding: '20px', backgroundColor: '#838383', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center'}}>
                <li>
                    <a target='_blank' href="https://www.instagram.com/keratin_botox_knastya/">
                        <img style={{width: '40px', height: '40px'}} src="https://cdn.worldvectorlogo.com/logos/instagram-2016-6.svg"></img>
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://t.me/keratin_botox_kuchma">
                        <img style={{width: '60px', height: '60px'}} src="https://cdn.icon-icons.com/icons2/2201/PNG/512/telegram_logo_circle_icon_134012.png"></img>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer