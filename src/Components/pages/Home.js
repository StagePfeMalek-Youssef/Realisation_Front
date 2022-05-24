import React from 'react';
import '../../App.css';
import Cards from '../../Components/PageAccueil/Cards'
import Footer from '../../Components/PageAccueil/Footer';
import HeroSection from '../../Components/PageAccueil/HeroSection';
import Newsletter from '../../Components/PageAccueil/Newsletter';
function Home () {
    return (
        <>
         <HeroSection />
         <Cards />
         <Newsletter/>
         <Footer/>
        </>
    )
}
export default Home;