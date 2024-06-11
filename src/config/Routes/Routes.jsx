import RootLayout from "@/components/layouts/RootLayout";
import AboutPage from "@/pages/AboutPage";

import { IndexPage } from "@/pages/IndexPage";
import NoteFound from "@/pages/NotFound";
import { ShopPage } from "@/pages/ShopPage";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="about" element={<ShopPage />} />

        <Route path="*" element={<NoteFound />} />
      </Route>
    </>
  )
);

export default router;
