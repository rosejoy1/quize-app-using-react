import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
   <div className='home-content'>
        <img
         className='image1' src="https://wallpaperaccess.com/full/2384073.jpg" alt="" />
        <div className='cards'>
         <Link style={{textDecoration:'none',color:'white'}} to={'/art'}>
             <div className="cards-content  ">
             <h1 className='reveal-text' style={{backgroundColor:'rgb(14, 203, 241)'}}><i  style={{backgroundColor:'rgb(14, 203, 241)'}} class="fa-solid fa-palette"></i>Art</h1>
             </div>
                </Link>
          <Link style={{textDecoration:'none',color:'white'}} to={'/sports'}><div style={{backgroundColor:' rgb(251, 10, 191)'}} className="cards-content ">
          <h1 className='reveal-text' style={{backgroundColor:' rgb(251, 10, 191)'}}><i  style={{backgroundColor:'rgb(251, 10, 191)'}} class="fa-solid fa-masks-theater"></i>Entertainment</h1>
          </div>
       
          </Link>
          <Link style={{textDecoration:'none',color:'white'}} to={'/history'}><div className="cards-content">
            
            <h1 className='reveal-text' style={{backgroundColor:'rgb(14,203,241'}} >   <i style={{backgroundColor:' rgb(14, 203, 241)'}}  class="fa-solid fa-landmark"></i>History</h1>
            </div></Link>
    
        </div>
    
   </div>
    </>
  )
}

export default Home