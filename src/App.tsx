import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Donations } from './pages/Donations';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="donations" element={<Donations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;