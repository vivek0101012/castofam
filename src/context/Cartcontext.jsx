/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";

export const Cartcontext= createContext();

export function Cartprovider({children}){

    const [cart,setcart]=useState([]);


const addtocart= (product)=>{

setcart((prevcart)=>{

const ifexist= prevcart.some((item)=>item.title===product.title);

if(ifexist){
  return prevcart.map((element)=>
(element.title===product.title)?{...element,count:element.count+1}:element
  );
}
else {
  return  [...prevcart,{...product,count:1}];
}


})




}
;

const removefromcart = (e) => {
  setcart(cart.filter((item) => item.title !== e.title));
};
const increasecount = (e) => {
  setcart(cart.map(item =>
    item.title === e.title ? { ...item, count: item.count + 1 } : item
  ));
};

const decreasecount = (e) => {
  setcart(cart.map(item =>
    item.title === e.title && item.count >= 1 
      ? { ...item, count: item.count - 1 } 
      : item
  ).filter(item => item.count > 0)); 
};

return (
    <Cartcontext.Provider value={{ cart, addtocart,removefromcart,increasecount,decreasecount }}>
      {children}
    </Cartcontext.Provider>
  );



}