import { BsYoutube,BsFacebook,BsTwitterX,BsTelegram } from "react-icons/bs"
import Heropic from '../assets/mohamed.jpg'

const Hero = () =>{
    return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row sm:flex-col sm:space-y-10 text-white">
            <div className="lg:w--1/3 sm:w-fit">
                <p className="text-4xl mb-5 text-slate-950 font-bebas">I'm</p>
                <h1 className="text-6xl font-mono italic text-zinc-950 mb-5">Songkieta Cheik Sidi Mohamed</h1>
                <hr />
                <p className="mt-10 text-xl text-neutral-600 font-One">
                    A fullstack developpement and Data Analyste. A computer science to build web and apps sites. I used many framework to an app in front and backend. zI also use to analyze data 
                    and takes decisions about it to improve to benefict of an startup or company.
                </p>
            </div>
            <div className="w-1/3 items-center sm:w-fit">
                <img src={Heropic} alt="Me" width={250} height={250} className="rounded-full w-full border-8 border-white" />
            </div>
            <div>
                <p className="text-emerald-400 ml-10 mb-5 w-96 text-center text-2xl">About Me</p>
                <p className=" text-stone-950 ">
                    Let's build quality in programing and design on web and app sites. We can take care about a data and backend
                </p>
                <button className="bg-white text indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white ">
                    see more ...
                </button>
                <div className="flex mt-5 space-x-4 cursor-pointer">
                    <BsYoutube size={40} className=" rounded-full hover:text-red-600" />
                    <BsFacebook size={40} className="rounded-full hover:text-blue-700"/>
                    <BsTwitterX size={40} className="rounded-full hover:text-stone-950"/>
                    <BsTelegram size={40} className="rounded-full hover:text-blue-700"/>
                </div>
            </div>
        </section>
    )
}
export default Hero