import { MoreHorizontal } from "lucide-react"
import React from "react"






function TableSection(){
    const recentOrder = [
    {
        id: "#4575",
        customer: "John Smith",
        product: "MacBook Pro 16",
        amount: "$1245",
        status: "completed",
        date: "2024-01-05"
    },
    {
        id: "#4576",
        customer: "Amina Traoré",
        product: "iPhone 14 Pro",
        amount: "$899",
        status: "pending",
        date: "2024-01-07"
    },
    {
        id: "#4577",
        customer: "Paul Dubois",
        product: "Samsung Galaxy S23",
        amount: "$780",
        status: "cancelled",
        date: "2024-01-08"
    },
    {
        id: "#4578",
        customer: "Fatou Diallo",
        product: "Dell XPS 13",
        amount: "$1050",
        status: "refunded",
        date: "2024-01-09"
    }
]


   const getSatusColor = (status) =>{
    switch(status){
        case "completed":
            return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-400"
        case "pending":
            return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-emerald-400"
        case "cancelled":
            return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-400"
        default:
            return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
    }
   }



    return <div className="space-y-6">
        {/* Recents Order*/}
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl rounded-b-2xl
        border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
            <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                <div className="flex  items-center justify-between ">
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                            Recent Order
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Latest customer orders</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
                </div>
            </div>
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-left p-4 text-sm font-semibold
                            text-slate-600">
                                Order Id
                            </th>
                            <th className="text-left p-4 text-sm font-semibold
                            text-slate-600">
                                Product
                            </th>
                            <th className="text-left p-4 text-sm font-semibold
                            text-slate-600">
                                Amount
                            </th>
                            <th className="text-left p-4 text-sm font-semibold
                            text-slate-600">
                                Status
                            </th>
                            <th className="text-left p-4 text-sm font-semibold
                            text-slate-600">
                                Date
                            </th>
                        </tr>
                        <tbody>
                            {recentOrder.map((order,index) =>{
                                return <tr className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50
                            transition-all">
                                <td className="p-4">
                                    <span className="text-sm font-medium text-blue-700">
                                        {order.id}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className="text-sm font-medium text-blue-700">
                                        {order.customer}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className="text-sm font-medium text-blue-700">
                                        {order.product}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className="text-sm font-medium text-blue-700">
                                        {order.amount}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className="text-sm font-medium text-blue-700">
                                        <MoreHorizontal className="w-4 h-4"/>
                                    </span>
                                </td>
                                
                            </tr>
                            })}
                        </tbody>
                    </thead>
                </table>
            </div>
        </div>
    </div>
}
export default TableSection