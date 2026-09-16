import { Routes, Route, Navigate } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Why from "./pages/Why";
import Designs from "./pages/Designs";
import Materials from "./pages/Materials";
import Prices from "./pages/Prices";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Developers from "./pages/Developers";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/why" element={<Why />} />
        <Route path="/designs" element={<Designs />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/story" element={<Story />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
