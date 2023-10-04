import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import "./styles/index.css"
import Cards from './components/Cards/Cards'
import data from "./__mock/data"
import CardsContent from './components/Cards/CardsContent'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  const [cars, setCars] = useState(data)

  const handleLike = (likedCar) => {
    const filteredCars = cars.filter(car => (car.id !== likedCar.id))
    filteredCars.push(likedCar)
    filteredCars.sort((a,b) => a.id - b.id)
    setCars(filteredCars)   
  }
  return (
    <>
      <Navbar  cars={cars} handleLike={handleLike}/>
    <Header/>

      <div className='container'>
        <CardsContent cars={cars} handleLike={handleLike} title={"Popular Car"} isPopular={true}/>
      </div>
      <div className='container'>
        <CardsContent cars={cars} handleLike={handleLike}  title={"Recomendation Car"} isPopular={false}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
