import {  Link, Route, Routes } from "react-router-dom";
import TopBar from "./scenes/global/TopBar";
import { colorModeContext, useMode } from "./theme";
import { Button, CssBaseline,ThemeProvider } from "@mui/material";
import DashBoard from "./scenes/dashboard";
import SideBar from "./scenes/global/SideBar";
import { useState } from "react";
import Team from "./scenes/team";
import Contact from "./scenes/contact";
import Invoice from "./scenes/invoice";
import Form from "./scenes/form-profile";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import BarChart from "./components/BarChart";
import Footer from "./scenes/global/Footer";
function App() {
  const [theme,colorMode] =useMode();
  const [isSidebar,setIsSidebar] = useState(true);
  return (
  <colorModeContext.Provider value={colorMode} >
    <ThemeProvider theme={theme}>
      <CssBaseline/>
              <div className="app">
                  <SideBar isSidebar={isSidebar}/>                
                <main className="content">
                  <TopBar setIsSidebar={setIsSidebar}/>
                  <Routes>
                    <Route path="/" element={<Team/>} />
                    <Route path="/dashboard" element={<Team />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/invoice" element={<Invoice />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/faq" element={<FAQ />} />
                    {/* <Route path="/barchart" element={<BarChart />} /> */}
                  </Routes>
  \
                </main>
               
              </div>
    </ThemeProvider>

  </colorModeContext.Provider>

  );
}

export default App;
