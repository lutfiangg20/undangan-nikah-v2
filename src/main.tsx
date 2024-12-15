import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Opening from "./pages/opening.tsx";
import MainLayout from "./components/MainLayout.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import Salam from "./pages/salam/Salam.tsx";
import Mempelai from "./pages/mempelai/Mempelai.tsx";
import Akad from "./pages/akad/Akad.tsx";
import Maps from "./pages/maps/Maps.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <ThemeProvider>
      <div className="bg-[#260f0f]">
        <BrowserRouter>
          <Routes>
            <Route index element={<App />} />
            {/* <Route path="about" element={<About />} /> */}

            <Route element={<MainLayout />}>
              <Route path="opening" element={<Opening />} />
              <Route path="salam" element={<Salam />} />
              <Route path="mempelai" element={<Mempelai />} />
              <Route path="akad" element={<Akad />} />
              {/* <Route path="resepsi" element={<Salam />} /> */}
              <Route path="maps" element={<Maps />} />
              <Route path="counting" element={<Salam />} />
              <Route path="rsvp" element={<Salam />} />
              <Route path="gallery" element={<Salam />} />
              <Route path="thanks" element={<Salam />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  </StrictMode>,
);
