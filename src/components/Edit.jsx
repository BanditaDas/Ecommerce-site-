import React, { useContext, useEffect, useState } from 'react'
import { productContext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Edit() {
  const navigate = useNavigate()

  const [products, setproducts] = useContext(productContext)
  
  const {id} = useParams()
  const [product, setproduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: ""
  })

  const changehan = (e)=>{

    setproduct({...product, [e.target.name]: e.target.value})
  }

//   const [title, settitle] = useState("")
//   const [image, setimage] = useState("")
//   const [category, setcategory] = useState("")
//   const [price, setprice] = useState("")
//   const [description, setdescription] = useState("")


  useEffect(()=>{
    setproduct(products.filter(p => p.id == id)[0])
  },[id])

  const AddProductHandel = (e)=>{
    e.preventDefault();

    if(product.title.trim().length === 0 || product.image.trim().length === 0 || product.category.trim().length === 0 || product.price.trim().length === 0 || product.description.trim().length === 0  ){
      alert("Please fill all the fields");
      return;
    }

      const pi = products.findIndex((p)=> p.id == id)

      const copydata = [...products]
      copydata[pi] = {...products[pi], ...product}


      setproducts(copydata)
      localStorage.setItem("products", JSON.stringify(copydata));

      toast.success("product Updated successfully")

      navigate(-1);
      
  }


  return (
    <form onSubmit={AddProductHandel} className='w-full h-full flex flex-col items-center justify-center gap-10'>
    <h1 className='mb-[5vh] text-2xl font-semibold'>Edit Product</h1>
    <input type="text" placeholder='Title' className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-[40%]' name='title' onChange={changehan}
    value={product && product.title} />
    <input type="url" placeholder='Img link' className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-[40%]' name='image' onChange={changehan}
    value={product && product.image} />
    
    <div className='flex gap-5 w-[40%]'>
      <input type="text" placeholder='Catagory' className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-1/2' name='category' onChange={changehan}
      value={product && product.category} />
      <input type="number" min={0} placeholder='Price' className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-1/2 ' name='price' onChange={changehan}
      value={product && product.price} />
    </div>
    
    <textarea className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-[40%]' placeholder='Description' rows="5" name='description' onChange={changehan}
    value={product && product.description} ></textarea>


    <button className='py-3 px-5 border border-blue-500 text-blue-500 rounded hover:bg-blue-700 hover:text-white  transition-all' href = "/create">Update Product</button>
  </form>
  )
}

export default Edit;