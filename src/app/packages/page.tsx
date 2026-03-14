import NavBar from '@/components/Layout/nabar'
import React from 'react'
import Package from "../../components/packages/packages"

const page = () => {
  return (
    <div>
        <NavBar/>
        <Package />
    </div>
  )
}

export default page