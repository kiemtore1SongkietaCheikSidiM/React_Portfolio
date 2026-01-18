import React from 'react'
import StatsGrids from './StatsGrid'
import ChartSection from './ChartSection'


function Dashboard(){
    return <div className='space-y-6'>
        {/* Stats grid*/}
        <StatsGrids/>

        <ChartSection/>
    </div>
}
export default Dashboard