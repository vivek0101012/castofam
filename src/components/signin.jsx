/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export function Signup(){
    
return <div className=" flex w-full flex-col p-10 items-center justify-center">
    
    
    <h1 className="mt-2 text-center text-3xl font-bold text-[#534c51] font-playfair">Create  account</h1>
    
    <div className="shadow mt-1 w-[300px] self-center justify-items-center  text-gray- flex rounded-lg  flex-col items-center justify-center  space-y-2 p-8">

<Input content={"your name"}></Input>

<Input content={"Date of birth"}></Input>
<Input content={"Email "}></Input>
<Input content={"Enter Password"}></Input>
<button className="p-2 w-[200px] bg-[#367AFF] active:scale-95 text-white rounded-lg">{"sign up"}</button>
<div className="flex flex-row space-x-2 items-center justify-center">
<img src="src/images/line.png" className="h-[2px] w-[50px]" alt="" />
<h1 className="flex self-center ">{"or"}</h1>
<img src="src/images/line.png" alt="" className="h-[2px] w-[50px] " />

</div>


<div className="flex p-1.5  space-x-2 flex-row  w-[200px] border-[1px] text-sm cursor-pointer rounded-lg border-gray-400 active:scale-90 justify-center items-center "> <span>{"continue with google "}
</span> 
    <img src="https://i.ibb.co/Y7t2FP9B/google.png" alt="google"  className=" flex self-center " width={16} alt="" />
</div>

<div className="w-11/12 text-center text-gray-800 text-[12px]"> {"Already have and account ?  "} 
<Link to={"/signin"}>
<span className="text-blue-900 font-semibold">{"sign in"}</span>
</Link>

 </div>
</div></div>




}

function Input({content}){
    return <input className="border-gray-400 border-[1px] w-[200px] rounded p-1  px-4 " placeholder={content}/>

}