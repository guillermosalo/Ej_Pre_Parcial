import React from 'react'
import Card from '../Components/Card'
import Header from '../Components/Header'

const Home = () => {

    const texto = 'Home'

  return (
    <>
    <Header titulo= {texto} descripcion= 'Esta es la ventana de inicio'/>
    {productos.map((item)=> <Card item={item}/>)}
    </>
  )
}

export default Home