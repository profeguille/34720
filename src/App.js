import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="/product/:idproduct" element={<ItemDetailContainer />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
