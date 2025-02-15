/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Cartcontext } from "../context/Cartcontext";


import { useEffect } from "react";

export default function Cartpage(){
    const { cart,addtocart,removefromcart,increasecount,decreasecount} = useContext(Cartcontext);
const [total,settotal]=useState(0);

useEffect(()=>{
    let newtotal=0;
cart.forEach(item=>{
  
newtotal+=item.price*item.count;
})

console.log(newtotal);
settotal(newtotal);

},[cart])
return <div className="py-16 bg-white/10 flex  flex-col   font-sans min-h-screen text-center ">
    <h1 className="mt-2 text-center text-3xl font-bold text-[#534c51] border-b border-opacity-40 m-2 ">MY Cart</h1>
<div className=" flex flex-col overflow-auto gap-8  px-6 py-4 scrollbar-hide ">
{
    cart.map((e,index)=>(
        <div className="  rounded-md  flex flex-col shadow-lg py-2 px-2  space-y-2   " key={index}>


<div className=" flex flex-col md:flex-row items-center justify-evenly space-x-8" >
<img src={e.image} className="md:w-[200px] rounded-md " alt="" />




<div className="flex flex-col  justify-center items-center"><h1 className="font-bold text-nowrap"> {e.title}</h1>
<h3 className=" md: text-nowrap">{e.detail}</h3>
<h2 className="font-bold font-serif"> ₹ {e.price}</h2> </div>

<div className=" flex items-center justify-end">
<div className="flex  justify-center w-full px-4 py-6 space-x-3">
<button
onClick={()=>{removefromcart(e)}}
className="rounded-md text-nowrap px-4 py-2 text-white font-semibold 
      bg-[#00B96C] text-center shadow-md hover:bg-[#a66d85] transition-all 
        duration-300 ease-in-out transform hover:scale-105">
  Remove
</button>

<div className="flex flex-col items-center justify-center">
<img src="/images/plus.png " 
 onClick={()=>{increasecount(e)}}
        className="object-contain   active:scale-90" width={16} ></img>
         <img src="/images/plus.png " 
onClick={()=>{decreasecount(e)}}
 className="object-contain rotate-180 active:scale-90" width={16}></img>
</div>

 <h1 className="text-center text-2xl">{e.count}</h1>
     </div>
</div>

</div>
 
      




   
       
    




        </div>
    ))
}



</div>


<div className=" w-full flex justify-center items-center">

<div className="flex flex-col  md:flex-row  items-center w-full justify-between max-w-3xl bg-white/30 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white/40">

  <div className="w-full md:w-2/3 space-y-4 text-gray-800">
    <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">Cart Summary</h2>
<div className="flex flex-col"> 
  
    
{
  cart.map((e,index)=>(
    <div key={index} className="flex justify-between text-lg">
      <span>{e.title} x{e.count}</span>
      <span className="font-medium font-manrope ">{e.price*e.count}</span>
    </div> 
  ))
} 
    
    </div>
   

    <div className="border-t pt-2 flex justify-between text-xl font-bold">
      <span>Total:</span>
      <span className="text-[#00B96C] font-manrope ">₹{total.toFixed(2)}</span>
    </div>
  </div>

  <div className="mt-4 md:mt-0">
    <button
      className="px-6 py-3 bg-[#00B96C] text-white font-semibold rounded-lg shadow-md hover:bg-[#a66d85] transition-all 
      duration-300 ease-in-out transform hover:scale-105 active:scale-95 w-full md:w-auto"
    >
      Proceed to Checkout
    </button>
  </div>
</div>
</div>




</div>





}