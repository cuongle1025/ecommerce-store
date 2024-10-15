import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export default function Layout() {
  return (
    <main className="bg-background">
      <Navbar />
        <Outlet />
      <Footer />
    </main>
  );
};
