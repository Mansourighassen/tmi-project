import React from 'react'
import Hero from '../../Common/Hero'
import Moyens from './Moyens'
import Offres from './Offres'
const Home = () => {
    return (
        <div class=" md:mx-auto "> 
            <Hero/>
            <Moyens/>
            <Offres/>
        </div>
    )
}

export default Home
