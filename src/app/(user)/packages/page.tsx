import NavBar from '@/components/Layout/nabar'
import React from 'react'
import Package from "../../../components/packages/packages"
import Footer from '@/components/Layout/Footer'

const page = () => {
  return (
    <div>
        <NavBar/>
        <Package />
        <Footer />
    </div>
  )
}

export default page