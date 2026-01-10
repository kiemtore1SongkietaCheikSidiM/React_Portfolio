const Projects = () =>{
    return (
        <div className="p-10">
            <div className="grid grid-cols-5 grid-rows-5 gap-4 p-20">
                <div className="row-span-2 col-start-2 p-20 border-2 border-indigo-600">
                    <a href="">
                        <h2>Un chatBot de fin de cycle</h2>
                    </a>
                 </div>
                <div className="row-span-2 col-start-4 p-20 border-2 border-indigo-600">
                    <a className="" href="">
                        <h2 className="p-10">Un projet de front Vite_React_tailwind</h2>
                    </a>
                </div>
                <div className="row-span-2 col-start-2 row-start-4 p-20 border-2 border-indigo-600">
                    <a href="">
                        <h2>Une Analyse de donne ML_supervised</h2>
                    </a>
                </div>
                <div className="row-span-2 col-start-4 row-start-4 p-20 border-2 border-indigo-600">
                    <a href="">
                        <h2>Une analyse de donne ML_Unsupercised</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Projects