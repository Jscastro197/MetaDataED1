import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NavbarComp from "./components/Navbar"
import Upload from "./pages/Upload"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <NavbarComp />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
    </>
  )
}
export default App