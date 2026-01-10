import { VscAccount } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react'
import { HiMenuAlt1} from "react-icons/hi"



const Nav = ()=>{
    const [toggle, setToggle] = useState(false)

function OpenMenu(){
    setToggle(true)
}
function CloseMenu(){
    setToggle(false)
}

    return (
        <>
        <div className="flex items-center justify-between p-10 lg:flex-row">
            <a className="text-white font-mono text-3xl tracking-wider flex items-center"><VscAccount />AUTOCODE</a>
            <div className="space-x-4">
                <div className="max-sm:hidden max-md:hidden max-lg:block ">
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Home</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">About</a>
                    <a href="#"className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
                    <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Project</a>
                    <a href="#"className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Testimonials</a>
                </div>
                <div className="max-sm:block max-md:block max-lg:hidden max-xl:hidden max-2xl:hidden ">
                    {toggle ?(
                         <AiOutlineClose onClick={CloseMenu} size={30} className="text-white cursor-pointer"/>
                    ):(
                       <HiMenuAlt1 onClick={OpenMenu} size={30} className="text-white cursor-pointer"/> 
                    )}
                    
                </div>
            </div>
        </div>
        <div className="max-sm:block max-md:block max-lg:hidden max-xl:hidden max-2xl:hidden">
            {toggle ?(
            <div className="flex justify-between ml-10">
                <ul>
                    <li className="text-white text-xl mb-2 cursor-pointer">Home</li>
                    <li className="text-white text-xl mb-2 cursor-pointer">About</li>
                    <li className="text-white text-xl mb-2 cursor-pointer">Skills</li>
                    <li className="text-white text-xl mb-2 cursor-pointer">Project</li>
                    <li className="text-white text-xl mb-2 cursor-pointer">Testimonials</li>
                </ul>
            </div>
          ):(
            <div></div>
          ) }
        </div>            
    </> 
            
        
    )
}
export default Nav