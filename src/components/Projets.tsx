const Projects = () =>{
    return (
        <div className="p-10">
            <div className="grid grid-cols-5 grid-rows-5 gap-4 p-20 bg-green-200">
                <div className="row-span-2 col-start-2 p-30 bg-yellow-300 px-12">
                    <a href="">
                        <h2>Un chatBot de Sante Maternelle et Infantile</h2>
                        <ul className="list-disc">
                            <li>Repondre aux questions</li>
                            <li>Donner des estimations</li>
                            <li>Encourager les bonnes habitudes</li>
                        </ul>
                    </a>
                 </div>
                <div className="row-span-2 col-start-4 p-30 bg-yellow-300 px-12">
                    <a className="" href="">
                        <h2 className="">Un projet de front Vite_React_tailwind</h2>
                        <ul className="list-disc">
                            <li>Repondre aux questions</li>
                            <li>Donner des estimations</li>
                            <li>Encourager les bonnes habitudes</li>
                        </ul>
                    </a>
                </div>
                <div className="row-span-2 col-start-2 row-start-4 p-30 bg-yellow-300 px-12">
                    <a href="">
                        <h2>Une Analyse de donne ML_supervised</h2>
                        <ul className="list-disc">
                            <li>Repondre aux questions</li>
                            <li>Donner des estimations</li>
                            <li>Encourager les bonnes habitudes</li>
                        </ul>
                    </a>
                </div>
                <div className="row-span-2 col-start-4 row-start-4 p-30 bg-yellow-300 px-12">
                    <a href="">
                        <h2>Une analyse de donne ML_Unsupercised</h2>
                        <ul className="list-disc">
                            <li>Repondre aux questions</li>
                            <li>Donner des estimations</li>
                            <li>Encourager les bonnes habitudes</li>
                        </ul>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Projects