import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from "./pages/ErrorPages/NotFound";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import BlogPage from "./pages/Blogs/BlogPage";
import BlogDetailsPage from "./pages/Blogs/BlogDetailsPage";
import TaxPlanning from "./pages/Services/TaxPlanning";
import ServicesListing from "./pages/Services/ServicesListing";
// import ServicePage from "./pages/Services/ServicePage";
import AboutUsPage from "./pages/About/AboutUsPage";
import SectorPage from "./pages/Sectors/SectorPage";
import AboutPage from "./pages/About/AboutPage";
import ServicesPage from "./pages/Services/ServicesPage";
import ResourcesPage from "./pages/Sectors/ResourcesPage";
import CAServicesPage from "./pages/CAServicesPage/CaServices";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="sectors" element={<SectorPage />} />
        {/* <Route path="/services" element={<ServicesListing />} />
        <Route path="/services/:slug" element={<ServicesPage />} /> */}
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
         <Route path="Services" element={<CAServicesPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
