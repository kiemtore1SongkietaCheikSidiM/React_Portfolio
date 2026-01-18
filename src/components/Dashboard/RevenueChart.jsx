import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"
import React  from "react"





function RevenueChart(){
  const data = [
    { month: "January", revenue: 520000, expenses: 180000 },
    { month: "February", revenue: 680000, expenses: 240000 },
    { month: "March", revenue: 450000, expenses: 160000 },
    { month: "April", revenue: 790000, expenses: 310000 },
    { month: "May", revenue: 920000, expenses: 270000 },
    { month: "June", revenue: 1200000, expenses: 420000 },
    { month: "July", revenue: 860000, expenses: 390000 },
    { month: "August", revenue: 640000, expenses: 210000 },
    { month: "September", revenue: 980000, expenses: 350000 },
    { month: "October", revenue: 720000, expenses: 260000 },
    { month: "November", revenue: 1100000, expenses: 480000 },
    { month: "December", revenue: 1450000, expenses: 620000 },
  ]


    return <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl
    border border-slate-200/50 dark:border-slate-700/50 p-6">
        <div className="flex items-center justify-between mb-6">
            <div >
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    Revenue Chart

                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Monthly revenue
                </p>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                        <span>Revenue</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-linear-to-r from-slate-400 to-slate-500 rounded-full"></div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                        <span>Expenses</span>
                    </div>
                </div>
            </div>
        </div>


        <div className="h-80">
            {/*  */}
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top:20, right: 30, left:20 , bottom:5}}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" opacity={0.3}/>
                    <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false}
                    axisLine={false} />
                    <YAxis stroke="#6748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`}/>
                    <Tooltip contentStyle={{
                    backgroundColor : "rgba(255,255,255,0.95)",
                    border : "none",
                    borderRadius: "12px",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                }} formatter={(value) => [`$${value.toLocaleString()}`,""]} />
                <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[4,4,0,0]} maxBarSize={40} />
                <Bar dataKey="expenses" fill="url(#expensesGradient)" radius={[4,4,0,0]} maxBarSize={40} />
                <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6"/>
                        <stop offset="100%" stopColor="#8b5cf6"/>
                    </linearGradient>
                    <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#94a3b8"/>
                        <stop offset="100%" stopColor="#64748b"/>
                    </linearGradient>
                </defs>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
}
export default RevenueChart