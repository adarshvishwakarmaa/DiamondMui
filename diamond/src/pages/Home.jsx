import React from 'react'
import Layouts from '../Components/Layouts'
import { Link } from 'react-router-dom'
// import Bg from '../images/bg.png'
import Bg from '../images/bg2.jpg'
import '../styles/HomeStyles.css'
const Home = () => {
  return (
    <Layouts>
      <div className="home" style={{backgroundImage:`url(${Bg})`}}>
        <div className="homecontain">
          <h1>Explore the World of Exquisite Diamonds</h1>
          <p>Discover timeless luxury, elegance, and brilliance in every stone.</p>
          <Link to="/menu">
            <button>
               Explore
            </button>
          </Link>
        </div>
      </div>
    </Layouts>
  )
}

export default Home
