import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router";
import Opening from "./pages/opening.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjamt6bGhoa290YXppand3a2ZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwODg0MDEsImV4cCI6MjA1MTY2NDQwMX0.iZ1fg3zBQoFxBo450qiNXamQVH9WLE3GM40KlIWTcW0";
const supabaseUrl = "https://ecjkzlhhkotazijwwkfp.supabase.co";
export const supabase = createClient(supabaseUrl, SUPABASE_KEY);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <ThemeProvider>
      <div className="bg-[#f7ebd2] text-[#614306]">
        <HashRouter>
          <Routes>
            <Route path="/:id" element={<Opening />} />
            {/* <Route path="about" element={<About />} /> */}

            {/* <Route element={<MainLayout />}> */}
            {/*   <Route path="/:id" element={<Opening />} /> */}
            {/*   <Route path="salam" element={<Salam />} /> */}
            {/*   <Route path="mempelai" element={<Mempelai />} /> */}
            {/*   <Route path="akad" element={<Akad />} /> */}
            {/*   {/* <Route path="resepsi" element={<Salam />} /> */}
            {/*   <Route path="maps" element={<Maps />} /> */}
            {/*   <Route path="counting" element={<Counting />} /> */}
            {/*   <Route path="rsvp" element={<Salam />} /> */}
            {/*   <Route path="gallery" element={<Salam />} /> */}
            {/*   <Route path="thanks" element={<Salam />} /> */}
            {/* </Route> */}
          </Routes>
        </HashRouter>
      </div>
    </ThemeProvider>
  </StrictMode>,
);
