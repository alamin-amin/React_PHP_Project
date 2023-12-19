import React from 'react'
import Banner from '../Banner'
import Food_cards from '../Food_cards'
import Food from '../food_bg_img'
import SatisfayCustomers from '../SatisfayCustomers'


function Home() {
  return (
    <div>
      <Banner />
      <Food_cards />
      <Food />
      <SatisfayCustomers />
    </div>
  )
}


export default Home