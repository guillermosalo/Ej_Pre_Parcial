import React from 'react'

const Card = ({producto, comprar}) => {

    const [total, setTotal]= useState(0)
    const {imagen, nombre, precio} = producto

  return (
    <>
    <img src={producto.imagen} alt="" />
    <h1>Titulo</h1>
    <h3>stock</h3>
    <button onClick={()=>[]}></button>

    </>
  )
}

export default Card