import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import BookEventPage from '../BookEventPage/BookEventPage';
import MenuPage from '../MenuPage/MenuPage';
import NavBar from '../../components/NavBar/NavBar';
import { EventDetailsPage } from '../EventDetailPage/EventDetailPage';
import EditFormPage  from '../EditFormPage/EditFormPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/events" element={<BookEventPage />} />
              <Route path="/events/:id/details" element={<EventDetailsPage />} />
              <Route path="/events/:id/update" element={<EditFormPage />} />
             
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
