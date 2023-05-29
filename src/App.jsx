import { useState, useEffect } from 'react'
import { getDataOrders } from './requests/Requests'
import Orders from './components/Orders/Orders';
import './App.css'
import 'sweetalert2/src/sweetalert2.scss'
import Logo from './assets/yellow-logo.png';
import { useOrderContext } from './contexts/OrderContext';

function LoadingScreen() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { selectOrder } = useOrderContext();

  
  useEffect(() => {
    console.log("valor", selectOrder);
  },[selectOrder])

  useEffect(() => {
    setIsLoading(true);
    // Simulación de una solicitud de API que tarda 2 segundos en completarse
    setTimeout(async() => {
      const resp = await getDataOrders();
      await setData(resp.result);
      setIsLoading(false);
    }, 500);
  }, []);


  if (isLoading) {
    return <>
      <div className='loading'>
        <div className="logo">
        <img srcSet={Logo} />
        <h1>BEGO</h1>
        </div>
        <div className="process">
          Cargando...
        </div>
      </div>
    </>;
  }
  if(selectOrder == null){
    return <div><Orders orders={data}/></div>;
  }else{
    return <div>Realizando merger antes de mandar</div>;
  }
  
}

function App() {

  return (
    <>
    <div className="App">
      {LoadingScreen()}
    </div>
    </>
  )
}



export default App
