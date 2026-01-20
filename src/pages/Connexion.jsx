import React from "react"
import Header from './../components/Header'
import Identite from './../components/Identite'
import Foot from './../components/Foot'



function Connexion(){
  return (
    <>
    <div className='dark:bg-gray-800'>
        <div>
            <Header />
        </div>
        <div className='ml-10 mb-10 mt-10 mr-10 justify-center dark:bg-gray-800 bg-gray-100'>
            <Identite />
        </div>
        <div>
            <Foot />
        </div>
    </div>
    </>
  )
}

export default Connexion