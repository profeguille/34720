import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Test1 from './tests/Test1';
import GenericContext from './tests/GenericContext';

export default function App() {
  return (
    <>
      <GenericContext>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/test1" element={<Test1 />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idcategory" element={<ItemListContainer />} />
            <Route path="/product/:idproduct" element={<ItemDetailContainer />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </GenericContext>
    </>
  );
}
