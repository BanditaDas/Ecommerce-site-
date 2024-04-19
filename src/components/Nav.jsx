import React, { useContext } from 'react'
import { productContext } from '../utils/Context';
import { Link } from 'react-router-dom';

function Nav() {
  const [products, setproducts] = useContext(productContext)

  let category = products && products.reduce((acc, cv)=>[...acc,cv.category],[])

  category = [...new Set(category)]
  
 
  const color = ()=> {
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
  };

  return (
    <>
        <nav className='w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5'>
            <a className='py-3 px-5 border border-blue-500 text-blue-500 rounded hover:bg-blue-700 hover:text-white hover:italic hover:font-medium transition-all' href = "/create">Add new product</a>
            <hr className='w-[80%] m-3'/>
            <h1 className='text-2xl w-[80%] mb-3'>Catagory Filter</h1>
            <div className=' w-[80%]'>


                {category.map((c,i)=>(
                  <Link key={i} to={`/?catagory=${c}`} className='mb-3 flex items-center'> 
                  <span style={{backgroundColor:color()}} className=' w-[15px] h-[15px]  mr-2 rounded-full '></span>{" "}
                  {c}
                  </Link>
                  

                ))}

                
                
            </div>
        </nav>
    </>
  )
}

export default Nav