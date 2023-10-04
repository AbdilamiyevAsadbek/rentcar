import React from 'react'
import { useState } from 'react'
import { Favorite } from "@mui/icons-material"
import "./Cards.style.css"
export default function Cards({status, title, img, handleLike, car, isLikedCar, petrol_consumption, manual, number_of_people, price}) {
    const [isLiked, setIsliked] = useState(false)
    const likedCar = {...car, isLiked: !isLiked}
    const handleLikeButton = () => {
        handleLike(likedCar)
        setIsliked(prev => !prev)
    }
    return (
        <div>
            <div className="cards">
                <div className="text_cards">
                    <div className="text1">
                        <h2>{status}</h2>
                        <p className='sport'>{title}</p>
                    </div>
                    <Favorite className={`${isLikedCar ? 'red' : "white"}`} onClick={handleLikeButton} />
                </div>
                <img src={img} className='img_car' />
                <div className="icon_links">
                    <div className="icon">
                    <img src="/src/assets/gas-station.svg" alt="" />
                    <span>{petrol_consumption}</span>
                    </div>
                    <div className="icon">
                    <img src="/src/assets/Car.svg" alt="" />
                    <p>{manual}</p>
                    </div>
                    <div className="icon">
                    <img src="/src/assets/profile-2user.svg" alt="" />
                    <p>{number_of_people}</p>
                    </div>
                </div>
                <div className="buttons_price">
                    <span>{price}</span>
                    <button>Rent Now</button>
                </div>
            </div>
        </div>
    )
}
