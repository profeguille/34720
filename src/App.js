import './App.css';
import Bienvenida from './components/Bienvenida';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Producto from './components/Producto';

function App() {
  let producto1 = { id: 100, name: 'zapato nike', price: 100 };
  let producto2 = { id: 101, name: 'zapato adidas', price: 150 };
  let producto3 = { id: 102, name: 'vestido lola', price: 300 };

  function consoleHolaMundo() {
    console.log('hola mundo');
  }

  return (
    <div>
      <NavBar />

      <Bienvenida />

      <Producto item={producto1} color={'coral'} consoleHolaMundo={consoleHolaMundo} />

      {/*       <Producto item={producto2} color={'blue'} consoleHolaMundo={consoleHolaMundo} />
       */}
      {/*       <Producto item={producto3} color={'blue'} consoleHolaMundo={consoleHolaMundo} />
       */}
      <Footer />
    </div>
  );
}

export default App;
