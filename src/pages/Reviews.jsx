import React from "react";
import classes from '../components/UI/HeaderLi/HeaderLi.module.css'
import review1 from './img/review1.jpg'
import review2 from './img/review2.jpg'
import review3 from './img/review3.jpg'
import review4 from './img/review4.jpg'
import review5 from './img/review5.jpg'
import '../App.css'
function Reviews() {
    const styles = {
        h2: {
          maxWidth:'125px', marginBottom: '15px', textAlign: 'center'
        },
        
        
    }
    return(
        <div>
            <h2 style={styles.h2} className={classes.HeaderLi}>Відгуки:</h2>
            <div className="review_block">
                <img src={review1} alt="review" />
                <img src={review2} alt="review" />
                <img src={review3} alt="review" />
                <img src={review4} alt="review" />
                <img src={review5} alt="review" />
            </div>
        </div>
    )
}

export default Reviews
















// {isLoading
//     ? <Loader />
//     : <Header /> 
//     }
//     <AboutMe styles={styles} />
//     {/* <div className='homecare'>
//        <h2 style={{maxWidth:'125px', marginBottom: '15px'}} className={classes.HeaderLi}>Домашній догляд:</h2>
//        <ul style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px', listStyle: 'square'}}>
//          <li>Підбираю індивідуально домашній догляд</li>
//          <li>Працюю з найкращими брендами, такими як <span>Luxliss</span>, <span>Raywell</span>, <span>Kaypro</span> і т.д. </li>
//          <li>Тестую кожен продукт</li>
//          <li>В наявності Шампуні Маски Бальзами Кондиціонери</li>
//          <li>Термозахист Олії Флюїди</li>
//        </ul>
//        <div className='keratin'>
//          <img className='keratins_photo' src={img1}></img>
//          <img className='keratins_photo' src={img2}></img>
//          <img className='keratins_photo' src={img3}></img>
//        </div>
//     </div> */}
//     {/* <div  className='prices'>
//        <h2 className={classes.HeaderLi} style={styles.h2}>Прайс процедур</h2>
//        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
//          <ul style={styles.flexDirect}>
//            <li>Кератин / Ботокс</li>
//            <li>
//              <img style={styles.imgFixedSize} src={img5}></img>
//            </li>
//          </ul>
//          <ul style={styles.flexDirect}>
//            <li style={styles.flexDirect}><span>Холодна реконструкція</span> / <span>Холодний ботокс</span> / <span>Догляд за волоссям</span></li>
//            <li>
//              <img style={styles.imgFixedSize} src={img4}></img>
//            </li>
//          </ul>
//        </div>
//     </div> */}

// const styles = {
//     h2: {
//       maxWidth:'125px', marginBottom: '15px', textAlign: 'center'
//     },
//     imgFixedSize: {
//       maxWidth: '330px',
//       marginTop: '15px'
//     },
//     flexDirect: {
//       display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
//     },
//     ul: {
//         display: 'flex',
//         gap: '20px',
//         justifyContent: 'center',
//         padding: '20px 0',
//         borderBottom: '2px solid #838383',
//         flexWrap: 'wrap'
//     }
//   }

//   useEffect(() => {
//     fetchingData()
//   }, [])

//   const [isLoading, setIsLoading] = useState(false)
//   function fetchingData() {
//     setIsLoading(true)
//     setTimeout(() => {
//       <Header /> 
//       setIsLoading(false)
//   }, 1500)
//   }
  