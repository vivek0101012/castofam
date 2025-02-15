/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Cartcontext } from "../context/Cartcontext";
export default function Services (){
  const { cart, addtocart } = useContext(Cartcontext);
  const services = [
    {
      image: "https://i.ibb.co/nNNzpCGQ/airforce1.png",  
      title: "Nike Air Force 1",
      detail: "Classic sneakers with unmatched comfort",
      price: 7999,
    },
    {
      image: "https://i.ibb.co/Y4hsndD3/ultraboost.png",
      title: "Adidas Ultraboost",
      detail: "Premium running shoes with superior cushioning",
      price: 10999,
    },
    {
      image: "https://i.ibb.co/JjxFggXS/rsx.png",
      title: "Puma RS-X",
      detail: "Chunky sneakers with a bold statement",
      price: 6999,
    },
    {
      image: "https://i.ibb.co/JRkCvNbS/classic.png",
      title: "Reebok Classic",
      detail: "Timeless retro design with everyday comfort",
      price: 5999,
    },
    {
      image: "https://i.ibb.co/pqXkGfq/timberland.png",
      title: "Timberland Premium Boots",
      detail: "Durable leather boots built for all terrains",
      price: 12999,
    },
    {
      image: "https://i.ibb.co/HLLM79Z3/crocs.png",
      title: "Crocs Classic Clogs",
      detail: "Ultra-lightweight and comfortable slip-ons",
      price: 3499,
    },
  ];
  
  const Bestseller = [


    {
      image: "https://i.ibb.co/nNNzpCGQ/airforce1.png",  
      title: "Nike Air Force 1",
      detail: "Classic sneakers with unmatched comfort",
      price: 7999,
    },
    {
      image: "https://i.ibb.co/Y4hsndD3/ultraboost.png",
      title: "Adidas Ultraboost",
      detail: "Premium running shoes with superior cushioning",
      price: 10999,
    },
    {
      image: "https://i.ibb.co/JRkCvNbS/classic.png",
      title: "Reebok Classic",
      detail: "Timeless retro design with everyday comfort",
      price: 5999,
    },

    {
      image: "https://i.ibb.co/HLLM79Z3/crocs.png",
      title: "Crocs Classic Clogs",
      detail: "Ultra-lightweight and comfortable slip-ons",
      price: 3499,
    },
  ];
  
    
return <div className="py-16 font-sans">


  

  
<h2 className="text-center text-xl font-semibold text-[#009E5A]">OUR COLLECTIONS</h2>

<h1 className="mt-2 text-center text-3xl font-bold text">Recommended</h1>




<div className=" flex flex-row mx-2 overflow-auto gap-8  px-6 py-4  no-scrollbar ">
{
    services.map((e,index)=>(



<Card services={e} key={index} ></Card>




      
    ))
}



</div>



<h2 className="text-center text-lg font-semibold">BEST SELLERS</h2>


<div className=" flex flex-row  md:justify-center overflow-auto gap-8  no-scrollbar  px-6 py-4 ">
{
    Bestseller.map((e,index)=>(
      <Card services={e} key={index} ></Card>
    ))
}



</div>



</div>





}



export function Card({services}){
  const { cart, addtocart } = useContext(Cartcontext);
  const { image, title, detail, price } = services;
 return <div className="   rounded-md h-[360px]  w-[240px] flex flex-col shadow-lg py-2  space-y-2   " >



     <img src={image} className="h-40  bg-slate-200 rounded-t-xl" alt="" />


     <div className="flex flex-col  px-4 py-2 flex-grow ">
     <h1 className="font-bold text-lg truncate"> {title}</h1>
     <h1 className=" text-sm truncate"> {detail}</h1>

     <div className="flex justify-start   items-center w-full   space-x-4 mt-4">

     <h1 className="font-bold text-lg truncate">Price</h1> <h1 className="font-bold text-lg font-sans text-center truncate   text-[#00B96C]  "> ₹{price}</h1>

     </div>



   
     <div className="flex   items-center w-full px-0   space-x-4 mt-4">
<button className="rounded-md text-nowrap px-4 py-2  font-semibold 
        bg-white text-[#00B96C] border-[#00B96C] text-center border-2 transition-all 
        duration-300 ease-in-out transform hover:scale-105">
  ORDER NOW
</button>

        <img src="/images/addtocart.png " 
   onClick={()=>{ console.log(cart);
    
 
    addtocart(services) }}
        className="object-contain  active:scale-90" width={36}></img>
     </div>
       
    

    </div>
 


        </div>
}