import React from "react";


function Loader() {
    return(
        <div  className="loader">
            <div className='lds-dual-ring'></div>
            <h2 style={{padding: '15px 0'}}>Зачекайте трішки...</h2>
        </div>
    )
}

export default Loader