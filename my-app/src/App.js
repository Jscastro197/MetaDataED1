import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import NavbarComp from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavbarComp />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}
export default App