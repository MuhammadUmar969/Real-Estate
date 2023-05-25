import React from 'react'
import {HiLocationMarker} from 'react-icons'

const Hero = () => {
  return (
    <>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            <div className="flexColStart hero-left">
               <div className="hero-title">

               <div className="orange-circle" />

                 <h1>Discover <br /> 
                     Most Suitable <br />
                     Property
                 </h1>
               </div>

               <div className="flexColStart hero-des">
                 <span>
                    Find a variety of properties that suit you very easily
                 </span>

                 <span>
                    Forget all difficulties in finding a residence for you
                 </span>
               </div>

               <div className="hero-bar">
                 <HiLocationMarker />
               </div>
            </div>

            <div className="flexCenter hero-right">
                <div className="img-container">
                    <img src="./public/images/hero-image.png" alt="hero-image" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero
