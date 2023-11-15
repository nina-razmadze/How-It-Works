import { Outlet } from "react-router";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
