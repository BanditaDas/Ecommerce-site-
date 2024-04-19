import React from 'react'
import Home from './components/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Dets from './components/Dets'
import Create from './components/Create'
import Edit from './components/Edit'

function App() {
  const { search, pathname} = useLocation()
  return (
    <div className='h-screen w-screen flex'>

      {(pathname != '/' || search.length > 0) && (
        <Link to="/" className='py-3 px-5 border border-red-500 text-red-500 rounded hover:bg-red-700 hover:text-white hover:italic hover:font-medium transition-all  absolute left-[17%] top-[2%]'>Home</Link>
      )}
      
      
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/details/:id' element= {<Dets />} />
        <Route path='/create' element= {<Create />} />
        <Route path='edit/:id' element= {<Edit />} />

      </Routes>
      

 
    </div>
  )
}

export default App