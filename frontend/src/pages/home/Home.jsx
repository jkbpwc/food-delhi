import React from 'react'
import Navbar from '../../components/navbar'
import Header from '../../components/Header'
import ExploreMenu from '../../components/ExploreMenu'
import { useState } from 'react'
import FoodList from '../../components/FoodList'
import AppDownload from '../../components/AppDownload'

const Home = () => {
    const [category,setCategory]=useState('All');
  return (
    <div className='align-middle overflow-x-hidden'> 
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodList category={category}/>
    <AppDownload/>
    </div>
  )
}

export default Home
