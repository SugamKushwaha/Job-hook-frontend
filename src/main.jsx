import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { Divider, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import '@mantine/tiptap/styles.css';
import "./index.css"; // ✅ REQUIRED for Tailwind
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FindJob from "./pages/FindJob.jsx";
import Footer from "./footer/Footer.jsx";
import Header from "./header/Header.jsx";
import FindTelent from "./pages/FindTelentPage.jsx";
import TalentProfilePage from "./pages/TalentProfilePage.jsx";
import PostJobsPage from "./pages/PostJobsPage.jsx";
import JobDescriptionPage from "./pages/JobDescriptionPage.jsx";
import ApplyJobPage from "./pages/ApplyJobPage.jsx";
import CompanyProfilePage from "./pages/CompanyProfilePage.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider defaultColorScheme='dark' >
      <BrowserRouter>
      <div className="relative">
        <Header/>
      <Divider/>
      <Routes >
        <Route path="/find-jobs" element={<FindJob/>} />
        <Route path="/find-talent" element={<FindTelent/>}/>
        <Route path="/jobs" element={<JobDescriptionPage/>}/>
        <Route path="/company" element={<CompanyProfilePage/>}/>
        <Route path="/apply-job" element={<ApplyJobPage/>}/>
        <Route path="/post-job" element={<PostJobsPage/>}/>
        <Route path="/talent-profile" element={<TalentProfilePage/>}/>
        <Route path="*"   element={<App/>}/>
      </Routes>
     
      <Footer/>
      </div>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
