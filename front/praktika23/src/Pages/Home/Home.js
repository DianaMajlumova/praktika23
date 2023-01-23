import React from 'react'
import CardsSection from '../../Components/HomeComponents/CardsSection/CardsSection'
import FirstSection from '../../Components/HomeComponents/FirstSection/FirstSection'
import HappyCustomers from '../../Components/HomeComponents/HappyCustomers/HappyCustomers'
import LegalSolutionsSection from '../../Components/HomeComponents/LegalSolutionsSection/LegalSolutionsSection'
import ProvideHighlySection from '../../Components/HomeComponents/ProvideHighlySection/ProvideHighlySection'
import Navbar from '../../Layout/Navbar/Navbar'

function Home() {
  return (
    <>
    
      <Navbar/>
      <FirstSection/>
      <CardsSection/>
      <ProvideHighlySection/>
      <HappyCustomers/>
      <LegalSolutionsSection/>
    </>
  )
}

export default Home
