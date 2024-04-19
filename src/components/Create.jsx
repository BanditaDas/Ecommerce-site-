import React, { useContext, useState } from 'react'
import { productContext } from '../utils/Context'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Create() {
  const navigate = useNavigate()
  const [products, setproducts] = useContext(productContext)

  const [title, settitle] = useState("")
  const [image, setimage] = useState("")
  const [category, setcategory] = useState("")
  const [price, setprice] = useState("")
  const [description, setdescription] = useState("")

  const AddProductHandel = (e)=>{
    e.preventDefault();

    if(title.trim().length === 0 || image.trim().length === 0 || category.trim().length === 0 || price.trim().length === 0 || description.trim().length === 0  ){
      alert("Please fill all the fields");
      return;
    }else{
      const product = {
        id: nanoid(),
        title,
        image,
        category,
        price,
        description,
      };
      setproducts([...products, product])
      localStorage.setItem("products", JSON.stringify([...products, product]));

      toast.success("product Added successfully")

      navigate("/");
      
    }

    
  }


  return (
    <form onSubmit={AddProductHandel} className='w-full h-full flex flex-col items-center justify-center gap-10'>
    <h1 className='mb-[5vh] text-2xl font-semibold'>Add New Product</h1>
    <input type="text" placeholder='Title' className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-[40%]' onChange={(e)=> settitle(e.target.value)}
    value={title} />
    <input type="url" placeholder='Img link' className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-[40%]' onChange={(e)=> setimage(e.target.value)}
    value={image} />
    
    <div className='flex gap-5 w-[40%]'>
      <input type="text" placeholder='Catagory' className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-1/2' onChange={(e)=> setcategory(e.target.value)}
      value={category} />
      <input type="number" min={0} placeholder='Price' className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-1/2 ' onChange={(e)=> setprice(e.target.value)}
      value={price} />
    </div>
    
    <textarea className='rounded-md text-xl bg-zinc-200 p-2 outline-none w-[40%]' placeholder='Description' rows="5" onChange={(e)=> setdescription(e.target.value)}
    value={description} ></textarea>


    <button className='py-3 px-5 border border-blue-500 text-blue-500 rounded hover:bg-blue-700 hover:text-white  transition-all' href = "/create">Add new product</button>
  </form>
  )
}

export default Create