import { NavLink, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl mb-10">I'm Contact Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sit
        itaque soluta maxime adipisci, odit earum ipsam sed velit quam mollitia
        alias amet aperiam numquam minima nesciunt distinctio reiciendis
        blanditiis ea deserunt! Ad illum natus quibusdam officia maxime,
        officiis cumque vel praesentium architecto labore vitae commodi,
        doloremque temporibus reprehenderit minus nam? Facilis laborum magnam,
        nulla libero, ad qui maxime nostrum provident vitae nam eos ipsum
        placeat minima delectus quae similique veritatis a commodi quidem
        officiis odio. Quo accusantium saepe facilis ducimus suscipit, eius non
        hic fugiat? Tenetur reiciendis esse nesciunt adipisci voluptatum
        consequatur? Hic quos, vero distinctio ratione aut ab.
      </p>

      <nav className="mt-10 space-x-6">
        <NavLink to={"contact-detail"}>More Details</NavLink>
        <NavLink to={"contact-form"}>Contact Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Contact;
