import React from "react";
import img4 from '../pages/img/price2.jpg';
import img5 from '../pages/img/price.jpg';
import classes from '../components/UI/HeaderLi/HeaderLi.module.css'

function Price() {
    const styles = {
        h2: {
          maxWidth:'125px', marginBottom: '15px', textAlign: 'center'
        },
        imgFixedSize: {
          maxWidth: '330px',
          marginTop: '15px',
          height: '350px'
        },
        flexDirect: {
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }
      }
    return(
    <div  className='prices'>
        <h2 className={classes.HeaderLi} style={styles.h2}>Прайс процедур</h2>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
          <ul style={styles.flexDirect}>
            <li>Кератин / Ботокс</li>
            <li>
              <img style={styles.imgFixedSize} src={img4}></img>
            </li>
          </ul>
          <ul style={styles.flexDirect}>
            <li style={styles.flexDirect}><span>Холодна реконструкція</span> / <span>Холодний ботокс</span> / <span>Догляд за волоссям</span></li>
            <li>
              <img style={styles.imgFixedSize} src={img5}></img>
            </li>
          </ul>
        </div>
     </div>
    )
}

export default Price
