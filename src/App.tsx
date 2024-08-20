// src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import DocumentList from './pages/DocumentList'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthProviderWithRouter from './contexts/AuthProviderWithRouter'

const App: React.FC = () => {
  return (
    <Router>
      <AuthProviderWithRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/documents" element={<DocumentList />} />
            {/* Add other protected routes here */}
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProviderWithRouter>
    </Router>
  )
}

export default App
