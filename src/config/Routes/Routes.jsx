import RootLayout from "@/components/layouts/RootLayout";
import AboutPage from "@/pages/AboutPage";

import Homepage from "@/pages/Homepage";
import NoteFound from "@/pages/NotFound";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />

        <Route path="*" element={<NoteFound />} />
      </Route>
    </>
  )
);

export default router;
