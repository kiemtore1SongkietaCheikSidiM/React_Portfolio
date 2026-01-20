import React from 'react'
import { useState,useEffect } from 'react'
import {
    ChevronDown, 
    Menu, 
    Settings,
    Search,
    Filter,
    Plus,
    Sun,
    Bell,
    Moon

} from 'lucide-react'
import Mohamed from './mohamed.jpg'




function Header(){
     // It retrieves the saved theme from localStorage (if available). If no theme is found, it defaults to 'light'. useState initializes the theme state with this value.
    const defaultState = localStorage.getItem('theme') || 'light';
    const [theme, setTheme] = useState(defaultState);
    // Update Theme Using useEffect
    useEffect(() => {
    // Triggered every time theme changes ([theme] dependency). Saves the theme to localStorage so it persists across page reloads.
    localStorage.setItem('theme', theme);
    // Toggles the dark class on <html>, allowing Tailwind to apply dark mode styles.
    document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    // Handle Button Click to Toggle Theme
    const handleButton = () => {
    // Switches the theme:
    setTheme(theme == 'light' ? 'dark' : 'light');
   }
    return (
    <div className={` bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
    border-slate-200/50 dark:border-slate-700/80 px-6 py-4 mt-10 mb-2`}>
        <div className="flex items-center justify-between">
            {/*left section*/}
            <div className="flex items-center space-x-4">
                <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300
                  hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                >
                </button>
                <div className=' md:block'>
                    <h1 className='text-2xl font-black text-slate-800 dark:text-white'>Dashboard</h1>
                    <p className='text-slate-800 dark:text-white'>Welcome back Mohamed what happened today?</p>
                </div>
            </div>
            {/* Center*/}
            <div className='flex-1 max-w-md mx-8'>
                <div className='relative '>
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2
                    text-slate-400 dark:text-slate-100"/>
                    <input type="text" className='w-full pl-10 pr-4
                    py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800
                    dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' placeholder='Search anything' />
                    <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5
                    text-slate-400 dark:hover:text-slate-300 hover:text-slate-600'>
                        <Filter/>
                    </button>
                </div>
            </div>
            {/*Right*/}
            <div className='flex items-center space-x-3'>
                {/*Quic Action*/}
                <button className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-linear-to-r 
                from-blue-500 to-purple-600 text-white rounded-xl 
                hover:shadow-lg transsition-all cursor-pointer'>
                    <Plus className="w-4 h-4"/>
                    <span className='text-sm font-medium'>
                        New
                    </span>
                </button>
                
                {/*Toggles*/}
                 <button onClick={handleButton} className={`p-2.5 rounded-xl text-slate-600 dark:text-slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}>
                    {theme === 'light' ? <Moon className='w-5 h-5 text-black'/> : <Sun className='w-5 h-5 text-yellow-400'/>}
                </button>
                    

                {/*Notification*/}
                <button className='relative p-2.5 rounded-xl text-slate-800 dark:slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                    <Bell className='w-5 h-5 text-slate-800 dark:text-slate-200'/>
                    <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs
                    rounded-ful flex items-center justify-center'>
                        3
                    </span>
                </button>
                    
                {/*Settings*/}
                <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                    <Settings className='w-5 h-5'/>
                </button>

                {/* User Profie*/}
                <div className='flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700'>
                    <img src={Mohamed} alt="User" className='w-8 h-8 rounded-full ring-2 ring-blue-500'/>
                    <div className='hidden md:block'>
                        <p className='text-sm font-medium text-slate-500
                        dark:text-slate-400'>
                            Mohamed
                        </p>
                        <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
                    </div>
                    <ChevronDown className='w-4 h-4 text-slate-400 dark:text-slate-500'/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Header