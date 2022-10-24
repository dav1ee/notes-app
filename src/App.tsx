import React from 'react';

import { Routes, Route } from 'react-router-dom';

import FoldersPage from './pages/FoldersPage';
import NotesPage from './pages/NotesPage';
import FullNote from './pages/FullNote';

import './scss/app.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/folders" element={<FoldersPage />} />
        <Route path="folders/:id/notes" element={<NotesPage />} />
        <Route path="folders/:id/notes/:noteId" element={<FullNote />} />
      </Routes>
    </div>
  );
};

export default App;
