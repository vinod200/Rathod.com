import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"atta"} heading={"Top's Atta"}/>
      <HorizontalCardProduct category={"oil"} heading={"Popular's Oils"}/>

      <VerticalCardProduct category={"ghee"} heading={"Ghee"}/>
      <VerticalCardProduct category={"pulses"} heading={"Pulses"}/>
      <VerticalCardProduct category={"Rice"} heading={"Rice"}/>
      <VerticalCardProduct category={"spices"} heading={"Spices"}/>
      <VerticalCardProduct category={"tea & coffee"} heading={"Tea & Coffee"}/>
      <VerticalCardProduct category={"biscuits"} heading={"Biscuits"}/>
      <VerticalCardProduct category={"wheat"} heading={"Wheat"}/>
      <VerticalCardProduct category={"dry fruits"} heading={"Dry Fruits"}/>
    </div>
  )
}

export default Home