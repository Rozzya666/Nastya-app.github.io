import React from 'react';
import img1 from '../pages/img/keratin1.jpg';
import img2 from '../pages/img/keratin2.jpg';
import img3 from '../pages/img/keratin3.jpg';
import classes from '../components/UI/HeaderLi/HeaderLi.module.css'
import '../App.css'


const HomeCare = () => {
    const styles = {
        h2: {
          maxWidth:'125px', marginBottom: '15px', textAlign: 'center'
        },
        imgFixedSize: {
          maxWidth: '330px',
          marginTop: '15px'
        },
        flexDirect: {
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        },
        
    }
    return(
        <div className='homecare'>
          <h2 style={styles.h2} className={classes.HeaderLi}>Домашній догляд:</h2>
          <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px', listStyle: 'square'}}>
            <li>Підбираю індивідуально домашній догляд</li>
            <li>Працюю з найкращими брендами, такими як <span>Luxliss</span>, <span>Raywell</span>, <span>Kaypro</span> і т.д. </li>
            <li>Тестую кожен продукт</li>
            <li>В наявності Шампуні Маски Бальзами Кондиціонери</li>
            <li>Термозахист Олії Флюїди</li>
          </ul>
          <div className='keratin'>
            <img className='keratins_photo' src={img1}></img>
            <img className='keratins_photo' src={img2}></img>
            <img className='keratins_photo' src={img3}></img>
          </div>
       </div>
    )
}
export default HomeCare
