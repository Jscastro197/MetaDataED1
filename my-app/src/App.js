import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavbarComp from "./components/Navbar";
import Upload from "./pages/Upload";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider} from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>

    <CssBaseline/>
    {/* <NavbarComp /> */}
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>

    <div className="app">
      <main className="content"><Topbar/></main>
    </div>

    </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  )
}
export default App