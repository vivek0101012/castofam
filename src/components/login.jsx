/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



export function Signin(){
    return  <div className=" flex w-full flex-col  p-10 items-center justify-center">
        
        <h1 className="mt-2 text-center md:text-3xl text-xl font-bold  text-[#534c51] font-playfair">Login in to your  account</h1>
           <div className="shadow mt-2 text-gray- w-[280px] flex rounded-lg  flex-col items-center justify-center  space-y-2 p-8">
    


    <Input content={"Email "}></Input>
    <Input content={"Enter Password"}></Input>
    <button className="p-1 w-11/12  bg-[#367AFF] active:scale-95 text-white rounded-lg">{"sign in"}</button>
    <div className="flex flex-row space-x-2 items-center justify-center">
    <img src="src/images/line.png" className="h-[2px] w-[50px]" alt="" />
    <h1 className="flex self-center ">{"or"}</h1>
    <img src="src/images/line.png" alt="" className="h-[2px] w-[50px] " />
    
    </div>
    
    
    <div className="flex p-1  space-x-2 flex-row font-normal cursor-pointer text-sm w-11/12 border-[1px] rounded-lg border-gray-400 active:scale-90 justify-center items-center  "> <span>{"continue with google "}
    </span> 
        <img src="https://i.ibb.co/Y7t2FP9B/google.png" alt="google" className=" flex self-center " width={16} alt="" />
    </div>
    
    <div className="w-11/12 text-center  text-gray-800 text-[12px]"> {"Need account ? "}
    <Link to={"/signup"}>
    <span className="text-blue-950 cursor-pointer font-semibold ">create one</span> 
    </Link>
 
    </div>
    </div></div>
    

    
    
 
    
    
    }
    
    function Input({content}){
        return <input className="border-gray-400 border-[1px] rounded-lg p-1 w-11/12  px-4 " placeholder={content}/>
    
    }