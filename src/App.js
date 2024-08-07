import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import Validation from './components/Validation';
import Confirmation from './components/Confirmation';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Homepage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Homepage />} />
        <Route path="/login" element={<Homepage />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <hr />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
