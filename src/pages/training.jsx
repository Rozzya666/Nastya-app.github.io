import React from "react";
import classes from '../components/UI/HeaderLi/HeaderLi.module.css'

function Training() {
    const styles = {
        h2: {
          maxWidth:'125px', marginBottom: '15px', textAlign: 'center'
        },
    }
    return(
        <div className='about'>
          <h2 style={styles.h2} className={classes.HeaderLi}>Навчання:</h2>
          <h1 style={{fontSize: '32px', textAlign: 'center', margin: '0 auto', maxWidth: '725px'}}>
             <span style={{color: '#838383', fontWeight: 'bold'}}>Кератин, Ботокс, холодна реконструкція.</span>
          </h1>
          <p style={{fontSize: '20px', margin: '20px 10px 10px'}}>Навчання проходить 5 днів (індивідуально):</p>
          <ul style={{fontSize: '20px', listStyle: 'circle', display: 'flex', flexDirection: 'column', gap: '15px', margin:'10px'}}>
            <li>1 день - теорія.</li>
            <li>2-4 день - практична частина.</li>
            <li>5 день - самостійна робота.</li>
            <li>Сертифікат - після повного проходження курсу.</li>
            <li>Супровід після навчання 3 місяці.</li>
          </ul>
          
       </div>
    )
}

export default Training