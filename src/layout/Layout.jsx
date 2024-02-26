import { Outlet } from "react-router";
import Nav from "../components/Nav";

const Layout = () => {
  return (
    <section className="min-h-screen bg-slate-500 text-white">
      <div className="container mx-auto">
        <Nav />
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
