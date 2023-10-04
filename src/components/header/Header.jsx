import React from 'react'
import "./Header.style.css"
import "../../styles/index.css"

export default function Header() {
  return (
    <div className="container">
      <div className="d-flex justify-between homeCardContainer">
        <div className='homeCard'>
          <h2 className='homeCardTitle'>The Best Platform for Car Rental</h2>
          <p className='cardText'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
          <button className="homeCardBtn">Rental Car</button>

          <div className="img">
            <img className="homeImg" src="/src/assets/home-car-img.png" alt="home_car" />
          </div>
        </div>

        <div className='homeCard card_img2'>
          <h2 className='homeCardTitle'>Easy way to rent a car at a low price</h2>
          <p className='cardText'>Providing cheap car rental services and safe and comfortable facilities.</p>
          <button className="homeCardBtn btn2">Rental Car</button>

          <div className="img">
            <img className="homeImg2" src="/src/assets/home-car-img-2.png" alt="home_car" />
          </div>
        </div>
      </div>

      <div className="top-content">
        <div className="pick-up">
          <div className="pickup-title">
            <div className="circle">
              <span className='circle-in'></span>
            </div>
            <h1>Pick - Up</h1>
          </div>
          <div className="pick-up-cards">
            <div className="pick-up-card">
              <h1>Locations</h1>
              <h4>
                <span>Select your city</span>
                <i className='fa fa-angle-down'></i>
              </h4>
            </div>
            <div className="pick-up-card">
              <h1>Date</h1>
              <h4>
                <span>Select your date</span>
                <i className='fa fa-angle-down'></i>
              </h4>
            </div>
            <div className="pick-up-card">
              <h1>Time</h1>
              <h4>
                <span>Select your time</span>
                <i className='fa fa-angle-down'></i>
              </h4>
            </div>
          </div>
        </div>
        <button className='topsection-button'><i className="fa-solid fa-right-left"></i></button>
        <div className="drop-off">
          <div className="pickup-title">
            <div className="circle">
              <span className='circle-in'></span>
            </div>
            <h1>Drop off</h1>
          </div>
          <div className="pick-up-cards">
            <div className="pick-up-card">
              <h1>Locations</h1>
              <h4>
                <span>Select your city</span>
                <i className='fa fa-angle-down'></i>
              </h4>
            </div>
            <div className="pick-up-card">
              <h1>Date</h1>
              <h4>
                <span>Select your date</span>
                <i className='fa fa-angle-down'></i>
              </h4>
            </div>
            <div className="pick-up-card">
              <h1>Time</h1>
              <h4>
                <span>Select your time</span>
                <i className='fa fa-angle-down'></i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
