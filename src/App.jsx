// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className='w-10/12 m-auto'>
      <section className='sticky top-0 z-50' >
        <Navbar/>
      </section>
      <Outlet>
      </Outlet>
    </div>
  )
}

export default App
