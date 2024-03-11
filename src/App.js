import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BookingPage from './components/Booking/BookingPage';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
