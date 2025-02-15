import { useState } from "react";
const testimonials = [
    {
        image: "https://i.ibb.co/GQk9QYNj/1.jpg",
        name: "Aarav Mehta",
        review: "Great collection and top-notch quality! The shoes are super comfortable, and I love how stylish they are. Definitely my go-to store for footwear.",
        stars: 3
    },
    {
        image: "https://i.ibb.co/QF4xqCwt/2.jpg",
        name: "Rohan Sharma",
        review: "The variety is amazing! Whether it’s casual sneakers or formal shoes, they have it all. The comfort and durability make it worth every penny.",
        stars: 4
    },
    {
        image: "https://i.ibb.co/rRVRBCB0/3.jpg",
        name: "Vikram Kapoor",
        review: "Impressive service and fast delivery. The size guide was accurate, and my shoes fit perfectly. It’s great to find a store that values quality and customer satisfaction.",
        stars: 5
    },
    {
        image: "https://i.ibb.co/XxRKz6wx/4.jpg",
        name: "Neel Khanna",
        review: "Absolutely love the trendy sneaker collection! The designs are unique, and the comfort level is fantastic. My new pair has become my everyday favorite!",
        stars: 2
    },
    {
        image: "https://i.ibb.co/yBYfqCTT/5.jpg",
        name: "Arjun Verma",
        review: "Durable, stylish, and comfortable – everything I look for in shoes! The quality exceeded my expectations, and I’ll definitely be back for more.",
        stars: 1
    },
    {
        image: "https://i.ibb.co/PsG25Cfg/6.jpg",
        name: "Kabir Malhotra",
        review: "Smooth shopping experience with excellent customer support. They helped me pick the right size, and I couldn't be happier with my purchase!",
        stars: 4
    },
    {
        image: "https://i.ibb.co/G4M9L86k/7.jpg",
        name: "Ishaan Kaur",
        review: "The shoes are exactly as described – stylish and long-lasting. The ordering process was seamless, and I received my package on time!",
        stars: 3
    }
];



export default function Testimonials() {


  return (
    <div className="bg-gray-50 flex flex-col wmt-10 items-center justify-center font-playfair">
      <h2 className="text-center mt-8 text-lg font-semibold text-[#00B96C]">TESTIMONIALS</h2>
      <h1 className="text-center md:text-3xl text-2xl text-[#024731] font-semibold">
        What our Customers say...
      </h1>

     <div className=" flex flex-row w-full mt-4 overflow-x-auto gap-8 px-10 py-4  no-scrollbar scroll-smooth  snap-x snap-mandatory pl-4">
     {
        testimonials.map((e,index)=>(
     
     
     
     <Card reviews={e} key={index} ></Card>
     
     
     
     
           
         ))
     }
     
     
     
     </div>

     
    </div>
  );
}

export function Card({reviews}){

  const { image, name, review ,stars} = reviews;
 return <div className="   rounded-md h-[300px] border-2 border-[#00B96C] min-w-[300px]  flex flex-col shadow-lg py-2 px-4  space-y-2   " >

<div className=" w-full flex items-center justify-center">

<img src={image} className=" w-24  rounded-full " alt="" />
</div>

   



     <div className="flex flex-col  px-4 py-2 flex-grow ">
     <h1 className="font-bold text-center text-lg text-nowrap "> {name}</h1>
<Stars stars={stars}></Stars>
<div className=" mt-2 px-3">



</div>

     <h1 className=" text-sm text-wrap text-center "> {review}</h1>

  



   
       
    

    </div>
 


        </div>
}



export function Stars({stars}){
   let  arr = new Array(stars).fill(0)

return <div className="flex flex-row items-center justify-center space-x-3">




{
    arr.map((e,id)=>(
    <div key={id}>
<img src="/images/rating.png" width={20} alt="" />
        </div>
    ))

}

</div>


}