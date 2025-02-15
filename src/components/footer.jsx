/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Cartcontext } from "../context/Cartcontext";


export default function Footer(){


    const socialLinks = [
        {
          name: "Facebook",
          url: "https://www.facebook.com",
          logo: "/images/facebook.png"
        },
        {
          name: "Twitter",
          url: "https://www.twitter.com",
          logo: "/images/twitter.png"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com",
          logo: "/images/linkedin.png"
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com",
          logo: "/images/instagram.png"
        }
      ];
     
      const contactInfo = {
        address: "123 Main Street, New Delhi, India",
        email: "contact@example.com",
        phone: "+91 98765 43210"
      };


    return <div className=" font-playfair  items-end bg-black">
<div className="flex flex-col space-y-2 md:p-4 ">


<div className=" flex flex-row items-center md:space-x-8 space-x-4 md:justify-around p-1  py-4 border-b border-gray-300  border-opacity-30 ">

    <div className=" flex flex-row space-x-2  w-32 items-center"><img src="/images/logo.png" className="rounded-lg" alt="" />
     
    </div>
    <div className=" flex  space-x-1 md:space-x-4">
        
        {
            socialLinks.map(((e,index)=>(
                 <div className="w-[24px] md:w-[36px] " key={index}>
<img src={e.logo} alt="" />
                 </div>
            )))
        }
        

         </div>

</div>


<div id="contact" className="space-y-2 flex flex-col md:text-sm my-2 text-sm font-manrope px-4 mt-2 md:w-[30%] self-center text-white ">

<h1 className="text-white/60"><span className="text-white "> address  : </span>{contactInfo.address}</h1>
<h1 className="text-white/60 "><span className="text-white   "> phone: </span>{contactInfo.phone}</h1>
<h1 className="text-white/60"><span className="text-white "> email  : </span>{contactInfo.email}</h1>


</div>


</div>


<p className="text-sm mt-2 mb-0 h-10 text-center flex items-center justify-center text-white text-opacity-70 bg-black">
  &copy; 2025 Castofam. All rights reserved.
</p>



    </div>

}