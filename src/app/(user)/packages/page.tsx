import NavBar from '@/app/(user)/components/Layout/nabar'
import React from 'react'
import Package from "../../(user)/components/packages/packages"
import Footer from '@/app/(user)/components/Layout/Footer'

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