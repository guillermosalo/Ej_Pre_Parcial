import './App.css'
import Home from './Pages/Home'


function App() {
  const [total, setTotal] = useState(0)

  const comprar = () =>{
    // setTotal(prev => +1)
    setTotal(total+1)
  }

  return (
    <>
    <Home comprar={comprar}/>
    <h1>{total}</h1>
    </>

  )
}

export default App
