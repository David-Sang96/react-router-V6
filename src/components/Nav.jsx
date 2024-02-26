import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <section className="flex justify-between py-4 text-xl items-center">
      <Link to={""} className="text-4xl">
        Survey
      </Link>
      <div className="space-x-7">
        <NavLink to={"about-us"}>About Us</NavLink>
        <NavLink to={"contact-us"}>Contact Us</NavLink>
      </div>
    </section>
  );
};

export default Nav;
