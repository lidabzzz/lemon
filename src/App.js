import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BookingForm from './BookingForm';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<BookingForm />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
