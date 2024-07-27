import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Header from "../components/headers";

const Layout = () => {
  return (
    <div>
      <header>
        <nav className="mt-[20px]">
          <Navbar />
        </nav>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
