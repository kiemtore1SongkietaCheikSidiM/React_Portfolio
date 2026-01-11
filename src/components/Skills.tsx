import { IoLogoHtml5 } from "react-icons/io"
import { IoLogoCss3 } from "react-icons/io5"
import { FaJsSquare } from "react-icons/fa"
import { SiTypescript,SiTailwindcss ,SiDjango,SiSqlite, SiMysql } from "react-icons/si"
import { FaReact } from "react-icons/fa6"
import { FaPython,FaFlask,FaRobot } from "react-icons/fa"
import { TbSql } from "react-icons/tb"
import { BiLogoPostgresql } from "react-icons/bi"




export default function Skills(){
    return (
        <>
            <div className="grid grid-cols-5 grid-rows-5 gap-4 bg-violet-500 p-20">
                <div className="col-span-2 row-span-2 ml-10">
                    <h1 className="italic text-3xl font-Archivo">Front-end</h1>
                    <ul className="ml-5 text-2xl">
                        <li><IoLogoHtml5 className="text-red-400"/>HTML</li>
                        <li><IoLogoCss3 className="text-indigo-600"/>CSS</li>
                        <li><FaJsSquare className="text-yellow-300"/>JavaScript</li>
                        <li><SiTypescript className="text-indig-600"/>TypeScript</li>
                        <li><SiTailwindcss className="text-indigo-600"/>Tailwindcss</li>
                        <li><FaReact className="text-green-300"/>React</li>
                    </ul>
                </div>
                <div className="col-span-2 row-span-2 col-start-4 ml-10">
                    <h1 className="italic text-3xl font-Archivo">Back-end</h1>
                    <ul className="ml-5 text-2xl">
                        <li><FaPython/>Python</li>
                        <li><SiDjango/>Django</li>
                        <li><FaFlask/>Flask</li>
                    </ul>
                </div>
                <div className="col-span-2 row-span-2 row-start-4 ml-10">
                    <h1 className="italic text-3xl font-Archivo">DataBases</h1>
                    <ul className="ml-5 text-2xl">
                        <li><TbSql/>SQL</li>
                        <li><SiSqlite />SQLite</li>
                        <li><SiMysql/>MySQL</li>
                        <li><BiLogoPostgresql/>PostgrSQL</li>
                    </ul>
                </div>
                <div className="col-span-2 row-span-2 col-start-4 row-start-4 ml-10">
                    <h1 className="italic text-3xl font-Archivo">Machine-Learning</h1>
                    <ul className="text-2xl ml-5">
                        <li><FaRobot/>Supervised learning</li>
                        <li><FaRobot/>Unsupervised Learning</li>
                        <li><FaRobot/>Scrapping</li>
                        <li><FaRobot/>NLP</li>
                    </ul>
                </div>
            </div>
       </>
    
    )
}