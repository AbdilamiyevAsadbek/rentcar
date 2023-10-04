import React from 'react'
import { useState } from 'react'
import "./Navbar.style.css"
import { Search, FavoriteBorderSharp, NotificationsNoneSharp, SettingsSharp } from "@mui/icons-material"
import Modal from "../Modal/Modal"
import Cards from "../Cards/Cards"
export default function Navbar({ cars, handleLike}) {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
      {showModal ? <Modal handleModal={handleModal}>
        <div className='modal' style={{display: 'flex', gap: 20}}>
        {cars.map((car) => {
          if (car.isLiked) {
            return <Cards key={car.id}
            status={car.status}
            title={car.title}
            img={car.carImg}
            handleLike={handleLike}
            car={car}
            isLikedCar={car.isLiked}
            petrol_consumption={car.petrol_consumption}
        />
          }
        })}
        </div>
      </Modal> : null}
      <div className='navbar_wrapper'>
        <div className='container'>
          <div className='navbar'>
            <div className="topbarLeft">
              <img src="/src/assets/logo_navbar.svg" alt="" />
            </div>
            <div className="topbarCenter">
              <Search />
              <input placeholder='Search something here' className='searchInput' />
              <img src="/src/assets/filter.svg" alt="" />
            </div>
            <div className='topbarRight'>
              <div className="topbarIcons">
                <FavoriteBorderSharp onClick={handleModal} />

              </div>
              <div className="topbarIcons notifications">
                <NotificationsNoneSharp />
                <img src="/src/assets/red_images.svg" alt="" className='red_img' />
              </div>
              <div className="topbarIcons">
                <SettingsSharp />
              </div>
              <img src="/src/assets/user_img.svg" alt="" />

            </div>
          </div>

        </div>
      </div>

    </>

  )
}
