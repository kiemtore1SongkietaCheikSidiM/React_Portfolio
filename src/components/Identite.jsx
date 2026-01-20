import React from "react"
import { useState,useEffect } from "react"





export default function Identite() {

    return (
            <form  className="ml-100 mr-90 p-10 justify-center text-center border border-gray-300/60 rounded-2xl bg-white dark:bg-gray-900 dark:border-gray-700 shadow-md">
                <h1 className="text-gray-900 text-3xl mt-10 font-medium dark:text-white">Connecte toi</h1>
                <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">Connecte toi pour aceder</p>
                <div className="flex items-center mt-6 w-full  bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                    <input type="text" name="name" placeholder="UserName" className="border-none outline-none ring-0"/>
                </div>
                <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0"/>
                </div>
                <button type="submit" className="mt-2 w-full h-11 rounded-full text-white dark:text-slate-300 bg-indigo-500 hover:opacity-90 transition-opacity">
                    <span>Sign in</span>
                </button>
                <p className="text-gray-500 text-sm mt-3 mb-11 dark:text-gray-400"><a href="#" className="text-indigo-500 hover:underline">click here</a></p>
            </form>
    )
}
