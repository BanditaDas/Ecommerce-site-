import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import {productContext} from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'

function Home() {

  const [product] = useContext(productContext)

  const {search} = useLocation()
  const category = decodeURIComponent(search.split("=")[1])
  
  const [filterpro, setfilterpro] = useState(null)

  const getproductcat = async ()=>{
    try{
      const {data} = await axios.get(`/products/category/${category}`)
      setfilterpro(data)
    }
    catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    if (!filterpro || category == "undefined") setfilterpro(product)
    if (category != "undefined") {
      setfilterpro(product.filter(p => p.category == category))
    }
  },[category,product])


  return (product ?(
      <>
          <Nav />
          
          <div className=' w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>

            {filterpro && filterpro.map((p,i)=> (
                <Link key={i} to = {`/details/${p.id}`}className='w-[18%] h-[30vh] card p-5 border shadow rounded flex justify-center items-center flex-col mr-3 mb-3'>

                <div className=' mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center hover:scale-105 ' 
                style={{backgroundImage:`url(${p.image})`}}></div>

                <h1 className='hover:text-blue-500 text-[0.9vw]'>{p.title}</h1>

            </Link>

            ))}

              
          </div>
      </> 
    ) : (
      <Loading/>
    )
  )
}

export default Home