import React from 'react'
import Cards from './Cards'

export default function CardsContent({ cars, handleLike, title, isPopular }) {
    const popularCars = cars.slice(0, 4)
    if(isPopular){
        return (
            <div>
                <div className='text_about'>
                <h3>{title}</h3>
                <a href="#">View All</a>
                </div>
                <div className='cards_wrapper'>
                {popularCars.map((car) => {
                   return <Cards key={car.id}
                        status={car.status}
                        title={car.title}
                        img={car.carImg}
                        handleLike={handleLike}
                        car={car}
                        isLikedCar={car.isLiked}
                        petrol_consumption={car.petrol_consumption}
                        manual={car.manual}
                        number_of_people={car.number_of_people}
                        price={car.price}
                    />
                })}
                </div>
            </div>
        )
    }
 
    const recomendationCars = cars.slice(4)
    if(!isPopular){
        return (
            <div>
                <div className='text_about'>
                <h3>{title}</h3>
                <a href="#">View All</a>
                </div>
                <div className='cards_wrapper'>
                {recomendationCars.map((car) => {
                   return <Cards key={car.id}
                        status={car.status}
                        title={car.title}
                        img={car.carImg}
                        handleLike={handleLike}
                        car={car}
                        isLikedCar={car.isLiked}
                        petrol_consumption={car.petrol_consumption}
                        manual={car.manual}
                        number_of_people={car.number_of_people}
                        price={car.price}
                    />
                })}
                </div>
                <div className='showmore_cars'>
                <button>Show more car</button>
                </div>
            </div>
        )
    }
}
