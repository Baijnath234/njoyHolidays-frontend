import Hotel from '@/app/(user)/components/Hotels/Hotel'
import NavBar from '@/app/(user)/components/Layout/nabar'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar/>
      <Hotel />
    </div>
  )
}

export default page
