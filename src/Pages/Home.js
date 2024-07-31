import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import img from "../WhatsApp Image 2024-07-29 at 00.40.45_df3ecb9d.jpg"
import hardwimg from "../hardwares.webp"
import softimg from "../Untitled design.png"


const Home =()=>{


  
   return(
        <div className="flex flex-col">
        <div className="w-full h-[290px] relative">
        <img className="w-full h-full object-cover" src={img} alt="Home" />
        </div>


        <div className="flex max-w-8xl justify-center mx-auto m-2 p-10">

            <div className="border border-slate-600 h-200 w-full">
                  
                 <h2>Hardware</h2>
                 <img  className="w-full h-full object-cover" src={hardwimg} alt="Home" />

             
            </div>

            <div className="border border-slate-600 h-50 w-full">
                  <h2>Software</h2>
                  <img className="w-full h-full" src={softimg} alt="Home" />


            </div>
        </div>
        </div>
   );
}


export default Home;