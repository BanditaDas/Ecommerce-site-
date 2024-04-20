import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import axios from '../utils/Axios'
import Loading from './Loading'
import { productContext } from '../utils/Context'

function Dets() {
  const [products, setproducts] = useContext(productContext)

  const [pro, setpro] = useState(null)
  const {id} = useParams()

  const navigate = useNavigate()



  // const getpro = async()=>{
  //   try{
  //     const {data}= await axios.get(`/products/${id}`)
  //     setpro(data)
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  useEffect(()=>{
    if(!pro){
      setpro(products.filter(p => p.id == id)[0])
    }
    // getpro()
  },[])

  const proddelhan = ()=>{
    const filterproduct = products.filter(p => p.id != id)
    setproducts(filterproduct)
    localStorage.setItem("products", JSON.stringify(filterproduct))
    navigate(-1)
  }

  return (pro ?(
    <div className='w-[70%] h-full flex justify-center gap-20   m-auto p-[10%]'>

        <img className='h-[80%] w-[50%] object-contain' src={`${pro.image}`} alt="" />
        
        <div className='content '>
            <h1 className='text-2xl font-medium cursor-pointer mb-2'>{pro.title}</h1>

            <h3 className='text-xl mb-2'>{pro.category}</h3>

            <h2 className='font-semibold text-xl mb-3'>{pro.price}</h2>

            <p className='text-sm mb-10'>{pro.description}</p>

            <Link to={`/edit/${pro.id}`} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Edit</Link>
            <button onClick={()=> proddelhan(pro.id)}  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-5">Delete</button>
        </div>
    </div>
    ): (
      <Loading/>
    )
  )
}

export default Dets