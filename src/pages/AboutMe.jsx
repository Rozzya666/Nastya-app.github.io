import React from "react";
import img from '../pages/img/nastya.jpg'
import classes from '../components/UI/HeaderLi/HeaderLi.module.css'
import '../App.css'
const AboutMe = () => {
    const styles = {
        h2: {
          maxWidth:'125px', marginBottom: '15px', textAlign: 'center'
        },
        imgFixedSize: {
          maxWidth: '330px',
          marginTop: '15px',
          height: '350px'
        },
        
    }

    return(
        <div className='about'>
          <h2 style={styles.h2} className={classes.HeaderLi}>Про мене:</h2>
          <img src={img} style={{padding: '15px', margin: '0 auto', maxWidth: '320px', display: 'flex', justifyContent: 'center'}}></img>
          <h1 style={{fontSize: '32px', textAlign: 'center', margin: '0 auto', maxWidth: '725px'}}>
            Мене звати <span style={{color: '#30d5c8', fontWeight: 'bold'}}>Анастасія</span>, я майстер кератинового випрямлення волосся
          </h1>
       </div>
    )
}

export default AboutMe