





export default function Relax (){
    return(
        <div className={`min-h-screen bg-linear-to-br from-slate-50 via-blue-50
      to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500`}>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar collapsed={sidebarcollaps} ontoggle={() =>setSidebarcollaps(!sidebarcollaps)}
                currentPage={currentPage}
                onPageChange={setcurrentPage}/>
                <div className='flex-1 flex flex-col overflow-hidden'>
                    <Header sidebarCollapsed={sidebarcollaps}
                    onToggleSidebar={() =>setSidebarcollaps(!sidebarcollaps)}/>
                </div>
            </div>
        </div>

    )
}