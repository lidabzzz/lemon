import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Reservation from './Reservation';


function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
