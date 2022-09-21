import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GenericContext from './components/GenericContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import TestLecturaProductos from './tests/TestLecturaProductos';
import TestLecturaProducto from './tests/TestLecturaProducto';
import Comprar from './components/Comprar';

export default function App() {
  return (
    <>
      <GenericContext>
        <BrowserRouter>
          {/* <NavBar /> */}

          <Routes>
            <Route path="/test" element={<TestLecturaProductos />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/comprar" element={<Comprar />} />
            <Route path="/category/:idcategory" element={<ItemListContainer />} />
            <Route path="/product/:idproduct" element={<ItemDetailContainer />} />
          </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
      </GenericContext>
    </>
  );
}
