import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
export default App