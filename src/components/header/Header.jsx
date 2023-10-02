import './header.css'
// import "../../../public/assets/car1.png"

function Header() {
  return (
    <div className='headerContainer'>
      <div className="headerCard">
        <h2>The Best Platform for Car Rental</h2>
        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
        <button>Rental Car</button>
        <img src="assets/car1.png" alt="car" className='car-img1'/>
      </div>
      <div className="headerCard2">
        <h2>Easy way to rent a car at a low price</h2>
        <p>Providing cheap car rental services and safe and comfortable facilities.</p>
        <button>Rental Car</button>
      </div>
    </div>
  )
}
export default Header