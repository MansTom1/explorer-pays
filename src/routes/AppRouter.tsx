/*import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter */

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router'

import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import ProfilePage from '../pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import LoginPage from '../pages/LoginPage'
import CountriesPage from '../pages/CountriesPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />
        
        <Route
          path="/countries"
          element={<CountriesPage />}
        />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter