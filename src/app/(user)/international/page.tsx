import International from '@/app/(user)/components/International/International'
import Footer from '@/app/(user)/components/Layout/Footer'
import NavBar from '@/app/(user)/components/Layout/nabar'
import React from 'react'

const page = () => {
  return (
    <div>
    <NavBar/>
    <International/>
    <Footer/>
    </div>
  )
}

export default page